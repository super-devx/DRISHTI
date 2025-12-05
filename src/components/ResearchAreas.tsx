import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  Cpu,
  Wifi,
  Brain,
  Radio,
  Antenna,
  CircuitBoard,
} from 'lucide-react'

interface ResearchArea {
  title: string
  icon: React.ReactNode
  description: string
  color: string
  gradient: string
}

const ResearchAreas = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const researchAreas: ResearchArea[] = [
    {
      title: 'Intelligent Sensors & MEMS',
      icon: <Cpu size={48} strokeWidth={1.5} />,
      description:
        'Developing next-generation micro-electro-mechanical systems and smart sensors for precise environmental monitoring, biomedical applications, and industrial automation with enhanced sensitivity and miniaturization.',
      color: 'from-blue-500 to-blue-600',
      gradient: 'bg-gradient-to-br from-blue-500 to-blue-600',
    },
    {
      title: 'IoT Systems & Architecture',
      icon: <Wifi size={48} strokeWidth={1.5} />,
      description:
        'Designing robust and scalable Internet of Things architectures, edge computing frameworks, and cloud-integrated systems for smart cities, healthcare, and industrial IoT applications with real-time data processing.',
      color: 'from-teal-500 to-teal-600',
      gradient: 'bg-gradient-to-br from-teal-500 to-teal-600',
    },
    {
      title: 'Heuristic & AI-based Solutions',
      icon: <Brain size={48} strokeWidth={1.5} />,
      description:
        'Implementing machine learning algorithms, neural networks, and optimization techniques for intelligent decision-making, predictive analytics, and autonomous systems in resource-constrained IoT environments.',
      color: 'from-purple-500 to-purple-600',
      gradient: 'bg-gradient-to-br from-purple-500 to-purple-600',
    },
    {
      title: 'RF & Microwave Technology',
      icon: <Radio size={48} strokeWidth={1.5} />,
      description:
        'Advancing radio frequency and microwave circuit design, antenna systems, and electromagnetic wave propagation for enhanced wireless communication, radar systems, and satellite communications.',
      color: 'from-orange-500 to-orange-600',
      gradient: 'bg-gradient-to-br from-orange-500 to-orange-600',
    },
    {
      title: 'Wireless Communication Systems',
      icon: <Antenna size={48} strokeWidth={1.5} />,
      description:
        'Researching 5G/6G networks, cognitive radio, spectrum sensing, and next-generation wireless protocols for reliable, high-speed, and energy-efficient communication in dense IoT deployments.',
      color: 'from-green-500 to-green-600',
      gradient: 'bg-gradient-to-br from-green-500 to-green-600',
    },
    {
      title: 'Embedded Systems & FPGA',
      icon: <CircuitBoard size={48} strokeWidth={1.5} />,
      description:
        'Creating optimized embedded solutions, hardware accelerators, and FPGA-based architectures for real-time signal processing, cryptography, and high-performance computing in edge devices.',
      color: 'from-red-500 to-red-600',
      gradient: 'bg-gradient-to-br from-red-500 to-red-600',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="research" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={cardVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              Research Areas
            </h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Exploring cutting-edge technologies across multiple domains to drive innovation
              in intelligent systems and IoT
            </p>
          </motion.div>

          {/* Research Cards Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {researchAreas.map((area, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Card Background Gradient (visible on hover) */}
                <motion.div
                  className={`absolute inset-0 ${area.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* Card Content */}
                <div className="relative p-8 h-full flex flex-col">
                  {/* Icon Container */}
                  <motion.div
                    className="mb-6 text-gray-700 group-hover:text-white transition-colors duration-300"
                    animate={{
                      scale: hoveredIndex === index ? 1.1 : 1,
                      rotate: hoveredIndex === index ? 5 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {area.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-4 group-hover:text-white transition-colors duration-300">
                    {area.title}
                  </h3>

                  {/* Description (visible on hover) */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                      height: hoveredIndex === index ? 'auto' : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm text-white leading-relaxed">
                      {area.description}
                    </p>
                  </motion.div>

                  {/* Learn More Link (visible when not hovered) */}
                  <motion.div
                    animate={{
                      opacity: hoveredIndex === index ? 0 : 1,
                      height: hoveredIndex === index ? 0 : 'auto',
                    }}
                    transition={{ duration: 0.3 }}
                    className="mt-auto pt-4"
                  >
                    <span className="text-teal-600 font-semibold flex items-center gap-2 group-hover:text-white">
                      Learn more
                      <motion.svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        animate={{ x: hoveredIndex === index ? 5 : 0 }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </motion.svg>
                    </span>
                  </motion.div>

                  {/* Corner Accent */}
                  <motion.div
                    className="absolute top-0 right-0 w-20 h-20 opacity-10 group-hover:opacity-20"
                    animate={{
                      rotate: hoveredIndex === index ? 180 : 0,
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <svg viewBox="0 0 100 100" className="text-current">
                      <polygon
                        points="100,0 100,100 0,100"
                        fill="currentColor"
                      />
                    </svg>
                  </motion.div>
                </div>

                {/* Decorative Border */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 ${area.gradient}`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            variants={cardVariants}
            className="text-center mt-16"
          >
            <p className="text-gray-600 mb-6">
              Interested in collaborating on cutting-edge research?
            </p>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#contact')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ResearchAreas
