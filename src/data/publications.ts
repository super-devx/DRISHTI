export type PublicationType = 'journal' | 'conference' | 'book-chapter' | 'patent'

export interface Publication {
  id: string
  title: string
  authors: string[]
  venue: string // Journal name, Conference name, Book title, or Patent office
  year: number
  type: PublicationType
  doi?: string
  pdfUrl?: string
  abstract?: string
  pages?: string
  volume?: string
  issue?: string
  publisher?: string
  patentNumber?: string
}

export const publications: Publication[] = [
  // Journals
  {
    id: 'j-001',
    title: 'Deep Learning Approaches for Medical Image Segmentation: A Comprehensive Survey',
    authors: ['Author Name 1', 'Author Name 2', 'PI Name'],
    venue: 'IEEE Transactions on Medical Imaging',
    year: 2024,
    type: 'journal',
    doi: '10.1109/TMI.2024.XXXXX',
    pdfUrl: 'https://example.com/paper1.pdf',
    abstract: 'This paper presents a comprehensive survey of deep learning approaches for medical image segmentation...',
    volume: '43',
    issue: '5',
    pages: '1234-1256',
    publisher: 'IEEE'
  },
  {
    id: 'j-002',
    title: 'Transfer Learning for Natural Language Processing: Methods and Applications',
    authors: ['Author Name 3', 'PI Name', 'Author Name 4'],
    venue: 'Journal of Artificial Intelligence Research',
    year: 2024,
    type: 'journal',
    doi: '10.1613/jair.1.xxxxx',
    pdfUrl: 'https://example.com/paper2.pdf',
    volume: '78',
    pages: '100-145',
    publisher: 'AAAI Press'
  },
  {
    id: 'j-003',
    title: 'Explainable AI for Healthcare: Transparency in Clinical Decision Support Systems',
    authors: ['PI Name', 'Author Name 5', 'Author Name 6'],
    venue: 'Nature Machine Intelligence',
    year: 2023,
    type: 'journal',
    doi: '10.1038/s42256-023-xxxxx',
    volume: '5',
    issue: '8',
    pages: '789-802',
    publisher: 'Nature Publishing Group'
  },

  // Conferences
  {
    id: 'c-001',
    title: 'Attention Mechanisms for Multi-Modal Learning in Medical Diagnosis',
    authors: ['Author Name 2', 'Author Name 7', 'PI Name'],
    venue: 'Conference on Neural Information Processing Systems (NeurIPS)',
    year: 2024,
    type: 'conference',
    pdfUrl: 'https://example.com/paper3.pdf',
    pages: '1-12',
    publisher: 'NeurIPS'
  },
  {
    id: 'c-002',
    title: 'Federated Learning for Privacy-Preserving Healthcare Analytics',
    authors: ['Author Name 8', 'PI Name'],
    venue: 'International Conference on Machine Learning (ICML)',
    year: 2024,
    type: 'conference',
    pdfUrl: 'https://example.com/paper4.pdf',
    pages: '5678-5690',
    publisher: 'PMLR'
  },
  {
    id: 'c-003',
    title: 'Self-Supervised Learning for Robust Computer Vision',
    authors: ['Author Name 1', 'Author Name 9', 'PI Name'],
    venue: 'IEEE Conference on Computer Vision and Pattern Recognition (CVPR)',
    year: 2023,
    type: 'conference',
    doi: '10.1109/CVPR52729.2023.xxxxx',
    pdfUrl: 'https://example.com/paper5.pdf',
    pages: '12345-12354',
    publisher: 'IEEE'
  },
  {
    id: 'c-004',
    title: 'Reinforcement Learning for Autonomous Navigation in Complex Environments',
    authors: ['Author Name 10', 'PI Name', 'Author Name 11'],
    venue: 'International Conference on Robotics and Automation (ICRA)',
    year: 2023,
    type: 'conference',
    doi: '10.1109/ICRA48891.2023.xxxxx',
    pages: '4567-4573',
    publisher: 'IEEE'
  },

  // Book Chapters
  {
    id: 'b-001',
    title: 'Machine Learning in Healthcare: Current Trends and Future Directions',
    authors: ['PI Name', 'Author Name 12'],
    venue: 'Advances in Artificial Intelligence for Healthcare',
    year: 2024,
    type: 'book-chapter',
    pages: '45-78',
    publisher: 'Springer',
    abstract: 'This chapter explores the current state and future potential of machine learning in healthcare...'
  },
  {
    id: 'b-002',
    title: 'Deep Learning Architectures for Image Analysis',
    authors: ['Author Name 2', 'PI Name'],
    venue: 'Handbook of Computer Vision and Image Processing',
    year: 2023,
    type: 'book-chapter',
    pages: '123-156',
    publisher: 'Elsevier'
  },

  // Patents
  {
    id: 'p-001',
    title: 'System and Method for Automated Disease Detection Using Deep Learning',
    authors: ['PI Name', 'Author Name 1', 'Author Name 5'],
    venue: 'United States Patent and Trademark Office',
    year: 2024,
    type: 'patent',
    patentNumber: 'US 11,234,567 B2',
    abstract: 'A novel system for automated disease detection using convolutional neural networks...'
  },
  {
    id: 'p-002',
    title: 'AI-Based Medical Image Enhancement and Analysis Platform',
    authors: ['PI Name', 'Author Name 13'],
    venue: 'Indian Patent Office',
    year: 2023,
    type: 'patent',
    patentNumber: 'IN 456789',
    abstract: 'An integrated platform for medical image enhancement using artificial intelligence...'
  },

  // Additional publications for pagination testing
  {
    id: 'j-004',
    title: 'Graph Neural Networks for Drug Discovery and Molecular Property Prediction',
    authors: ['Author Name 14', 'PI Name', 'Author Name 15'],
    venue: 'Journal of Chemical Information and Modeling',
    year: 2022,
    type: 'journal',
    doi: '10.1021/acs.jcim.2c00xxx',
    volume: '62',
    issue: '18',
    pages: '4321-4335',
    publisher: 'ACS Publications'
  },
  {
    id: 'c-005',
    title: 'Few-Shot Learning for Medical Image Classification',
    authors: ['Author Name 16', 'Author Name 2', 'PI Name'],
    venue: 'International Conference on Medical Image Computing and Computer-Assisted Intervention (MICCAI)',
    year: 2022,
    type: 'conference',
    doi: '10.1007/978-3-031-16452-1_xx',
    pages: '234-243',
    publisher: 'Springer'
  }
]

// Helper function to check if a publication is recent (within last 6 months)
export function isRecentPublication(year: number): boolean {
  const currentYear = new Date().getFullYear()
  const currentMonth = new Date().getMonth()

  // Consider publications from current year as recent
  // You can adjust this logic based on your needs
  if (year === currentYear) {
    return true
  }

  // If it's early in the year (Jan-Jun), also include previous year publications
  if (currentMonth < 6 && year === currentYear - 1) {
    return true
  }

  return false
}

// Helper function to get publications by type
export function getPublicationsByType(type: PublicationType | 'all'): Publication[] {
  if (type === 'all') {
    return publications
  }
  return publications.filter(pub => pub.type === type)
}

// Helper function to search publications
export function searchPublications(query: string): Publication[] {
  const lowercaseQuery = query.toLowerCase()
  return publications.filter(pub =>
    pub.title.toLowerCase().includes(lowercaseQuery) ||
    pub.authors.some(author => author.toLowerCase().includes(lowercaseQuery)) ||
    pub.venue.toLowerCase().includes(lowercaseQuery)
  )
}