import { lazy, Suspense, useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LoadingSplash from './components/LoadingSplash'
import ThemeToggle from './components/ThemeToggle'
import SEO from './components/SEO'

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'))
const NotFound = lazy(() => import('./pages/NotFound'))

// Loading fallback component
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-600 dark:text-gray-400">Loading...</p>
      </div>
    </div>
  )
}

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    // Simulate initial loading (check if assets are ready)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // Show splash for 2 seconds minimum

    return () => clearTimeout(timer)
  }, [])

  const handleLoadingComplete = () => {
    setShowSplash(false)
  }

  return (
    <ThemeProvider>
      <Router>
        <SEO />
        <AnimatePresence mode="wait">
          {isLoading && showSplash ? (
            <LoadingSplash key="splash" onLoadingComplete={handleLoadingComplete} />
          ) : (
            <div key="app" className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
              <Navbar />
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
              <Footer />
              <ThemeToggle />
            </div>
          )}
        </AnimatePresence>
      </Router>
    </ThemeProvider>
  )
}

export default App
