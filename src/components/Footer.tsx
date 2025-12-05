import { useState, useEffect } from 'react'
import {
  Linkedin,
  BookOpen,
  GraduationCap,
  Github,
  Mail,
  Eye,
  ArrowUp
} from 'lucide-react'

function Footer() {
  const [visitorCount, setVisitorCount] = useState<number>(0)
  const [showScrollTop, setShowScrollTop] = useState(false)

  const currentYear = new Date().getFullYear()

  // Footer configuration
  const footerConfig = {
    affiliation: {
      department: 'Department of Electronics and Communication Engineering',
      institution: 'Indian Institute of Technology Roorkee',
      location: 'Roorkee, Uttarakhand, India'
    },
    quickLinks: {
      sections: [
        { name: 'Home', href: '#hero' },
        { name: 'About', href: '#about' },
        { name: 'Research', href: '#research' },
        { name: 'Team', href: '#team' },
        { name: 'Publications', href: '#publications' },
        { name: 'Projects', href: '#projects' },
        { name: 'News', href: '#news' },
        { name: 'Contact', href: '#contact' }
      ]
    },
    socialMedia: [
      {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/rajib-panigrahi-9a143839',
        icon: Linkedin,
        color: 'hover:bg-blue-600'
      },
      {
        name: 'ResearchGate',
        url: 'https://researchgate.net/profile/Rajib-Panigrahi',
        icon: BookOpen,
        color: 'hover:bg-green-600'
      },
      {
        name: 'Google Scholar',
        url: 'https://scholar.google.com/citations?user=pZdpRigAAAAJ&hl=en',
        icon: GraduationCap,
        color: 'hover:bg-red-600'
      },
      {
        name: 'IIT Roorkee',
        url: 'https://iitr.ac.in/sail/',
        icon: Github,
        color: 'hover:bg-gray-800'
      }
    ]
  }

  // Simulate visitor counter (replace with actual implementation)
  useEffect(() => {
    // Get visitor count from localStorage or API
    const storedCount = localStorage.getItem('visitorCount')
    if (storedCount) {
      setVisitorCount(parseInt(storedCount))
    } else {
      // Initialize with a random number for demo (replace with actual API call)
      const initialCount = Math.floor(Math.random() * 10000) + 50000
      setVisitorCount(initialCount)
      localStorage.setItem('visitorCount', initialCount.toString())
    }

    // Increment visitor count (do this once per session)
    const hasVisited = sessionStorage.getItem('hasVisited')
    if (!hasVisited) {
      setVisitorCount(prev => {
        const newCount = prev + 1
        localStorage.setItem('visitorCount', newCount.toString())
        return newCount
      })
      sessionStorage.setItem('hasVisited', 'true')
    }
  }, [])

  // Handle scroll to show/hide scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleQuickLinkClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Section */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4">DRISHTI</h3>
              <p className="text-blue-200 mb-4 leading-relaxed">
                Deep Research in Intelligent Sensors, Heuristic Technology & IoT. One of the highly active research labs at IIT Roorkee,
                pioneering innovations in intelligent sensor systems, IoT solutions for landslide monitoring, sensor development,
                edge computing, and AI-driven detection methods.
              </p>
              <div className="space-y-2 text-blue-200">
                <p className="font-semibold text-white">{footerConfig.affiliation.department}</p>
                <p>{footerConfig.affiliation.institution}</p>
                <p>{footerConfig.affiliation.location}</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {footerConfig.quickLinks.sections.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleQuickLinkClick(link.href)}
                      className="text-blue-200 hover:text-white transition-colors hover:underline text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect Section */}
            <div>
              <h4 className="text-lg font-bold mb-4">Connect With Us</h4>
              <div className="flex flex-wrap gap-3 mb-6">
                {footerConfig.socialMedia.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 bg-blue-800 rounded-lg flex items-center justify-center transition-colors ${social.color}`}
                      aria-label={social.name}
                      title={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  )
                })}
              </div>

              {/* Contact Email */}
              <div className="flex items-center gap-2 text-blue-200">
                <Mail className="w-4 h-4" />
                <a
                  href="mailto:rajib.panigrahi@ece.iitr.ac.in"
                  className="hover:text-white transition-colors hover:underline text-sm"
                >
                  rajib.panigrahi@ece.iitr.ac.in
                </a>
              </div>

              {/* Visitor Counter */}
              <div className="mt-6 p-3 bg-blue-800 rounded-lg">
                <div className="flex items-center justify-center gap-2 text-sm">
                  <Eye className="w-4 h-4 text-blue-300" />
                  <span className="text-blue-200">Visitors:</span>
                  <span className="font-bold text-white">{visitorCount.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <p className="text-blue-200 text-sm text-center md:text-left">
                © {currentYear} DRISHTI Lab - IIT Roorkee. All rights reserved.
              </p>

              {/* Additional Links */}
              <div className="flex gap-6 text-sm">
                <button
                  onClick={() => handleQuickLinkClick('#about')}
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Privacy Policy
                </button>
                <button
                  onClick={() => handleQuickLinkClick('#contact')}
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Terms of Use
                </button>
                <button
                  onClick={() => handleQuickLinkClick('#contact')}
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Sitemap
                </button>
              </div>

              {/* Made with love */}
              <p className="text-blue-200 text-sm">
                Made with <span className="text-red-400">❤</span> for Research
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all hover:scale-110 flex items-center justify-center z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </>
  )
}

export default Footer
