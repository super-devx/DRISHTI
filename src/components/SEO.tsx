import { useEffect } from 'react'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: string
}

function SEO({
  title = 'DRISHTI Lab - AI Research & Innovation',
  description = 'Deep Research in Intelligent Systems, Healthcare Technologies & Innovation. Leading research lab advancing frontiers of AI, machine learning, computer vision, and natural language processing.',
  keywords = 'AI research, machine learning, computer vision, NLP, healthcare AI, deep learning, artificial intelligence, research lab, DRISHTI',
  image = '/og-image.jpg',
  url = 'https://drishtilab.example.edu',
  type = 'website'
}: SEOProps) {
  const siteTitle = 'DRISHTI Lab'
  const fullTitle = title.includes(siteTitle) ? title : `${title} | ${siteTitle}`

  useEffect(() => {
    // Update document title
    document.title = fullTitle

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const attribute = property ? 'property' : 'name'
      let element = document.querySelector(`meta[${attribute}="${name}"]`)

      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, name)
        document.head.appendChild(element)
      }

      element.setAttribute('content', content)
    }

    // Basic Meta Tags
    updateMetaTag('description', description)
    updateMetaTag('keywords', keywords)
    updateMetaTag('author', 'DRISHTI Lab')

    // Open Graph
    updateMetaTag('og:type', type, true)
    updateMetaTag('og:url', url, true)
    updateMetaTag('og:title', fullTitle, true)
    updateMetaTag('og:description', description, true)
    updateMetaTag('og:image', image, true)
    updateMetaTag('og:site_name', siteTitle, true)

    // Twitter
    updateMetaTag('twitter:card', 'summary_large_image')
    updateMetaTag('twitter:url', url)
    updateMetaTag('twitter:title', fullTitle)
    updateMetaTag('twitter:description', description)
    updateMetaTag('twitter:image', image)
    updateMetaTag('twitter:creator', '@drishti_lab')

    // Theme color
    updateMetaTag('theme-color', '#1e40af')
  }, [fullTitle, description, keywords, image, url, type])

  return null
}

export default SEO
