import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, Search, Eye, AlertCircle } from 'lucide-react'

function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Animated 404 with Eye Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
          className="mb-8"
        >
          <div className="relative inline-block">
            {/* Background glow */}
            <motion.div
              className="absolute inset-0 bg-blue-400 dark:bg-blue-600 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* 404 with Eye */}
            <div className="relative">
              <h1 className="text-9xl font-bold text-blue-900 dark:text-blue-100 flex items-center justify-center gap-4">
                4
                <div className="relative">
                  <div className="bg-blue-600 dark:bg-blue-500 rounded-full p-6">
                    <Eye className="w-16 h-16 text-white" strokeWidth={2} />
                  </div>
                  <motion.div
                    className="absolute inset-0 border-4 border-blue-600 dark:border-blue-500 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [1, 0, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>
                4
              </h1>
            </div>
          </div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <AlertCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Page Not Found
            </h2>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Oops! The page you're looking for doesn't exist or has been moved.
            <br />
            Let's get you back on track with DRISHTI Lab.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/"
            className="flex items-center justify-center gap-2 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl font-semibold"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
          <Link
            to="/#research"
            className="flex items-center justify-center gap-2 px-8 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border-2 border-blue-600 dark:border-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors font-semibold"
          >
            <Search className="w-5 h-5" />
            Explore Research
          </Link>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-12 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
            Quick Links
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
            <Link
              to="/#about"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              About Lab
            </Link>
            <Link
              to="/#team"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Our Team
            </Link>
            <Link
              to="/#publications"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Publications
            </Link>
            <Link
              to="/#contact"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>

        {/* DRISHTI Branding */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="mt-8 text-sm text-gray-500 dark:text-gray-400"
        >
          DRISHTI Lab - Advancing AI Research
        </motion.p>
      </div>
    </div>
  )
}

export default NotFound
