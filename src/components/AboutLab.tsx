import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, FileText, Lightbulb, Users, FolderOpen } from 'lucide-react'
import StatCounter from './StatCounter'

const AboutLab = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    {
      end: 15,
      label: 'Years of Research',
      icon: <Calendar size={48} strokeWidth={1.5} />,
      suffix: '+',
    },
    {
      end: 250,
      label: 'Publications',
      icon: <FileText size={48} strokeWidth={1.5} />,
      suffix: '+',
    },
    {
      end: 35,
      label: 'Patents',
      icon: <Lightbulb size={48} strokeWidth={1.5} />,
      suffix: '',
    },
    {
      end: 42,
      label: 'Team Members',
      icon: <Users size={48} strokeWidth={1.5} />,
      suffix: '',
    },
    {
      end: 80,
      label: 'Funded Projects',
      icon: <FolderOpen size={48} strokeWidth={1.5} />,
      suffix: '+',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
              About DRISHTI Lab
            </h2>
            <div className="w-24 h-1 bg-teal-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Leading the frontier of innovation in intelligent systems and IoT technologies
            </p>
          </motion.div>

          {/* Research Focus */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-blue-900 mb-6 text-center">
                Our Research Focus
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-gray-700 leading-relaxed">
                <div className="space-y-4">
                  <p>
                    DRISHTI Lab is at the forefront of revolutionary research in intelligent
                    sensor networks, Internet of Things (IoT), and AI-driven heuristic systems.
                    Our multidisciplinary approach combines cutting-edge hardware development
                    with sophisticated software algorithms to create next-generation smart systems.
                  </p>
                  <p>
                    We focus on developing innovative solutions for real-world challenges in
                    healthcare monitoring, smart cities, environmental sensing, industrial
                    automation, and precision agriculture.
                  </p>
                </div>
                <div className="space-y-4">
                  <p>
                    Our research spans multiple domains including edge computing, wireless
                    sensor networks, machine learning for IoT, energy-efficient sensing,
                    and autonomous systems. We collaborate with leading industry partners
                    and academic institutions worldwide.
                  </p>
                  <p>
                    Through rigorous research and innovation, we aim to bridge the gap between
                    theoretical advancements and practical deployments, ensuring our solutions
                    make a tangible impact on society.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mission and Vision */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl shadow-xl p-8 text-white">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-blue-100 leading-relaxed">
                To pioneer groundbreaking research in intelligent sensor systems and IoT
                technologies, developing innovative solutions that address critical challenges
                in healthcare, sustainability, and smart infrastructure while fostering
                excellence in education and nurturing the next generation of tech leaders.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-600 to-teal-500 rounded-2xl shadow-xl p-8 text-white">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-teal-50 leading-relaxed">
                To be a globally recognized center of excellence in intelligent systems research,
                driving transformative innovations that shape the future of connected technologies,
                and creating a sustainable, intelligent world where IoT solutions enhance quality
                of life and foster environmental stewardship.
              </p>
            </div>
          </motion.div>

          {/* Statistics */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Our Impact in Numbers
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {stats.map((stat, index) => (
                <StatCounter
                  key={index}
                  end={stat.end}
                  label={stat.label}
                  icon={stat.icon}
                  suffix={stat.suffix}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutLab
