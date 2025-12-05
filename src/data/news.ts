export type NewsType = 'achievement' | 'award' | 'publication' | 'event' | 'student' | 'general'

export interface NewsItem {
  id: string
  date: string // Format: "YYYY-MM-DD"
  title: string
  description: string
  type: NewsType
  link?: string
  imageUrl?: string
  tags?: string[]
}

export const newsItems: NewsItem[] = [
  // Recent Achievements & Awards
  {
    id: 'news-001',
    date: '2024-11-15',
    title: 'Best Paper Award at NeurIPS 2024',
    description: 'Our paper on "Attention Mechanisms for Multi-Modal Learning in Medical Diagnosis" received the Best Paper Award at the prestigious NeurIPS 2024 conference. This work represents a significant breakthrough in explainable AI for healthcare.',
    type: 'award',
    link: 'https://example.com/neurips-award',
    tags: ['NeurIPS', 'Medical AI', 'Best Paper']
  },
  {
    id: 'news-002',
    date: '2024-10-28',
    title: 'Lab Secures Major DST Grant',
    description: 'DRISHTI Lab has been awarded a ₹2.5 Crore grant from the Department of Science and Technology for a three-year project on "Explainable AI for Clinical Decision Support Systems". This will fund cutting-edge research and support 3 PhD students.',
    type: 'achievement',
    link: 'https://example.com/dst-grant',
    tags: ['Funding', 'DST', 'Healthcare AI']
  },
  {
    id: 'news-003',
    date: '2024-10-20',
    title: 'Paper Accepted at CVPR 2025',
    description: 'Our paper "Self-Supervised Learning for Robust Computer Vision in Low-Resource Settings" has been accepted at CVPR 2025. The paper introduces novel techniques for learning robust visual representations with limited labeled data.',
    type: 'publication',
    link: 'https://example.com/cvpr-paper',
    tags: ['CVPR', 'Computer Vision', 'Self-Supervised Learning']
  },
  {
    id: 'news-004',
    date: '2024-10-10',
    title: 'Student Awarded Google PhD Fellowship',
    description: 'Congratulations to our PhD student Amit Kumar for being awarded the prestigious Google PhD Fellowship in Machine Learning! This fellowship recognizes outstanding graduate students doing exceptional research in computer science.',
    type: 'student',
    link: 'https://example.com/google-fellowship',
    tags: ['Google', 'Fellowship', 'PhD']
  },

  // Upcoming Events
  {
    id: 'news-005',
    date: '2024-12-15',
    title: 'Workshop on AI in Healthcare - Registration Open',
    description: 'DRISHTI Lab is organizing a two-day workshop on "AI Applications in Healthcare" on December 15-16, 2024. The workshop will feature talks from leading researchers, hands-on tutorials, and panel discussions. Register now!',
    type: 'event',
    link: 'https://example.com/workshop-registration',
    tags: ['Workshop', 'Healthcare', 'Registration Open']
  },
  {
    id: 'news-006',
    date: '2024-12-20',
    title: 'Guest Lecture by Prof. Jane Smith (MIT)',
    description: 'Join us for an exciting guest lecture by Prof. Jane Smith from MIT on "The Future of Natural Language Processing". The talk will be held on December 20, 2024, at 4:00 PM in the Main Auditorium.',
    type: 'event',
    link: 'https://example.com/guest-lecture',
    tags: ['Guest Lecture', 'NLP', 'MIT']
  },

  // More Recent Updates
  {
    id: 'news-007',
    date: '2024-09-25',
    title: 'Two Papers Accepted at AAAI 2025',
    description: 'Exciting news! Two of our research papers have been accepted at AAAI 2025. The papers cover topics in federated learning and graph neural networks for drug discovery. Looking forward to presenting at the conference.',
    type: 'publication',
    link: 'https://example.com/aaai-papers',
    tags: ['AAAI', 'Federated Learning', 'Drug Discovery']
  },
  {
    id: 'news-008',
    date: '2024-09-15',
    title: 'Lab Ranked Among Top 10 AI Research Groups in India',
    description: 'DRISHTI Lab has been recognized as one of the top 10 AI research groups in India by the National AI Research Rankings 2024. This recognition is based on publication impact, industry collaborations, and societal contributions.',
    type: 'achievement',
    link: 'https://example.com/ai-rankings',
    tags: ['Ranking', 'Recognition', 'AI Research']
  },
  {
    id: 'news-009',
    date: '2024-09-05',
    title: 'Student Wins Best Poster Award at ICML',
    description: 'Our M.Tech student Priya Sharma won the Best Poster Award at ICML 2024 for her work on "Few-Shot Learning for Medical Image Classification". Congratulations Priya!',
    type: 'student',
    link: 'https://example.com/icml-poster',
    tags: ['ICML', 'Poster Award', 'Medical Imaging']
  },
  {
    id: 'news-010',
    date: '2024-08-20',
    title: 'New Collaboration with AIIMS Delhi',
    description: 'DRISHTI Lab has entered into a strategic collaboration with AIIMS Delhi for joint research in AI-assisted medical diagnosis. This partnership will enable access to clinical data and expert medical knowledge.',
    type: 'achievement',
    link: 'https://example.com/aiims-collaboration',
    tags: ['Collaboration', 'AIIMS', 'Medical AI']
  },
  {
    id: 'news-011',
    date: '2024-08-10',
    title: 'Patent Granted for AI-Based Disease Detection System',
    description: 'Our patent application for "System and Method for Automated Disease Detection Using Deep Learning" has been granted by the Indian Patent Office. This technology has the potential to revolutionize early disease diagnosis.',
    type: 'achievement',
    link: 'https://example.com/patent-details',
    tags: ['Patent', 'Medical AI', 'Innovation']
  },
  {
    id: 'news-012',
    date: '2024-07-30',
    title: 'PhD Student Receives IBM Research Fellowship',
    description: 'Congratulations to Rahul Verma for receiving the IBM Research Fellowship! This fellowship will support his research on quantum machine learning and provide opportunities to collaborate with IBM Research.',
    type: 'student',
    link: 'https://example.com/ibm-fellowship',
    tags: ['IBM', 'Fellowship', 'Quantum ML']
  },

  // Past Events/Updates
  {
    id: 'news-013',
    date: '2024-07-15',
    title: 'Successfully Organized Summer School on Deep Learning',
    description: 'DRISHTI Lab successfully organized a week-long summer school on "Deep Learning: Theory and Practice" with 100+ participants from across India. The program included lectures, hands-on sessions, and project presentations.',
    type: 'event',
    link: 'https://example.com/summer-school-report',
    tags: ['Summer School', 'Deep Learning', 'Education']
  },
  {
    id: 'news-014',
    date: '2024-06-25',
    title: 'Lab Director Appointed to National AI Task Force',
    description: 'Prof. [PI Name], Director of DRISHTI Lab, has been appointed as a member of the National AI Task Force by the Government of India. This task force will advise on national AI policy and strategy.',
    type: 'achievement',
    link: 'https://example.com/task-force',
    tags: ['National AI', 'Policy', 'Recognition']
  },
  {
    id: 'news-015',
    date: '2024-06-10',
    title: 'Paper Featured on CVPR 2024 Best Papers List',
    description: 'Our CVPR 2024 paper was featured in the conference\'s list of notable papers. The paper introduces a novel approach to self-supervised learning that achieves state-of-the-art results with minimal labeled data.',
    type: 'publication',
    link: 'https://example.com/cvpr-featured',
    tags: ['CVPR', 'Featured Paper', 'Computer Vision']
  },
  {
    id: 'news-016',
    date: '2024-05-20',
    title: 'Three PhD Students Successfully Defend Theses',
    description: 'Congratulations to our PhD students who successfully defended their doctoral theses! All three have accepted positions at leading tech companies and research institutions. We wish them all the best in their future endeavors.',
    type: 'student',
    link: 'https://example.com/phd-defense',
    tags: ['PhD Defense', 'Graduation', 'Achievement']
  }
]

// Helper function to get news items by type
export function getNewsByType(type: NewsType | 'all'): NewsItem[] {
  if (type === 'all') {
    return newsItems
  }
  return newsItems.filter(item => item.type === type)
}

// Helper function to get recent news (last N items)
export function getRecentNews(count: number): NewsItem[] {
  return newsItems
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count)
}

// Helper function to get upcoming events
export function getUpcomingEvents(): NewsItem[] {
  const today = new Date()
  return newsItems
    .filter(item => item.type === 'event' && new Date(item.date) > today)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
}

// Helper function to format date
export function formatNewsDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

// Helper function to check if news is recent (within last 30 days)
export function isRecentNews(dateString: string): boolean {
  const newsDate = new Date(dateString)
  const today = new Date()
  const diffTime = today.getTime() - newsDate.getTime()
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  return diffDays <= 30
}
