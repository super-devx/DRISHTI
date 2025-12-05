import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface StatCounterProps {
  end: number
  duration?: number
  label: string
  icon: React.ReactNode
  suffix?: string
}

const StatCounter = ({ end, duration = 2, label, icon, suffix = '' }: StatCounterProps) => {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number | null = null
    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = (timestamp - startTime) / (duration * 1000)

      if (progress < 1) {
        setCount(Math.floor(end * progress))
        requestAnimationFrame(animateCount)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(animateCount)
  }, [isInView, end, duration])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-4 text-teal-600"
      >
        {icon}
      </motion.div>
      <div className="text-4xl md:text-5xl font-bold text-blue-900 mb-2">
        {count}{suffix}
      </div>
      <div className="text-sm md:text-base text-gray-600 text-center font-medium">
        {label}
      </div>
    </motion.div>
  )
}

export default StatCounter
