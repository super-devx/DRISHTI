import { motion } from 'framer-motion'
import { Eye } from 'lucide-react'

interface LoadingSplashProps {
  onLoadingComplete: () => void
}

function LoadingSplash({ onLoadingComplete }: LoadingSplashProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={onLoadingComplete}
    >
      <div className="text-center">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 1
          }}
          className="mb-8"
        >
          <div className="relative">
            {/* Pulsing background circle */}
            <motion.div
              className="absolute inset-0 bg-blue-400 rounded-full blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Eye Icon - representing "DRISHTI" (Vision) */}
            <div className="relative bg-white rounded-full p-8 shadow-2xl">
              <Eye className="w-24 h-24 text-blue-600" strokeWidth={1.5} />
            </div>
          </div>
        </motion.div>

        {/* Lab Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-white mb-2">
            DRISHTI Lab
          </h1>
          <p className="text-blue-200 text-lg mb-6">
            Deep Research in Intelligent Systems, Healthcare Technologies & Innovation
          </p>
        </motion.div>

        {/* Loading Progress Bar */}
        <motion.div
          className="w-64 h-1 bg-blue-800 rounded-full mx-auto overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-blue-400 to-blue-200"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Loading Text */}
        <motion.p
          className="text-blue-300 text-sm mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Loading experience...
        </motion.p>
      </div>
    </motion.div>
  )
}

export default LoadingSplash
