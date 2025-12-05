export type ProjectStatus = 'ongoing' | 'completed'

export interface Project {
  id: string
  title: string
  sponsor: string
  pi: string
  duration: {
    start: string // Format: "YYYY-MM"
    end: string // Format: "YYYY-MM" or "Present"
  }
  description: string
  status: ProjectStatus
  fundingAmount?: string
  outcomes?: string[]
  teamMembers?: string[]
}

export interface LabFacility {
  id: string
  name: string
  description: string
  imageUrl?: string
  specifications?: string[]
}

export interface Collaboration {
  id: string
  name: string
  type: 'industry' | 'academia' | 'government'
  description: string
  logoUrl?: string
  website?: string
}

export const currentProjects: Project[] = [
  {
    id: 'proj-001',
    title: 'AI-Driven Medical Image Analysis for Early Disease Detection',
    sponsor: 'Department of Science and Technology (DST), Govt. of India',
    pi: 'Dr. [PI Name]',
    duration: {
      start: '2023-04',
      end: '2026-03'
    },
    description: 'Development of advanced deep learning algorithms for automated detection and classification of diseases from medical imaging modalities including CT, MRI, and X-ray. The project focuses on creating explainable AI models that can assist radiologists in early diagnosis.',
    status: 'ongoing',
    fundingAmount: '₹75,00,000',
    outcomes: [
      '3 Journal publications',
      '5 Conference papers',
      '2 PhD students working'
    ],
    teamMembers: ['PhD Student 1', 'PhD Student 2', 'Research Associate 1']
  },
  {
    id: 'proj-002',
    title: 'Natural Language Processing for Indian Languages',
    sponsor: 'Ministry of Electronics and Information Technology (MeitY)',
    pi: 'Dr. [PI Name]',
    duration: {
      start: '2024-01',
      end: '2026-12'
    },
    description: 'Creating robust NLP models and datasets for low-resource Indian languages. This project aims to develop machine translation, sentiment analysis, and text summarization systems that work effectively across multiple Indian languages.',
    status: 'ongoing',
    fundingAmount: '₹1,20,00,000',
    outcomes: [
      'Developing multilingual datasets',
      '1 Conference paper published'
    ],
    teamMembers: ['PhD Student 3', 'M.Tech Student 1', 'M.Tech Student 2']
  },
  {
    id: 'proj-003',
    title: 'Autonomous Navigation Systems for Indoor Robotics',
    sponsor: 'Defence Research and Development Organisation (DRDO)',
    pi: 'Dr. [PI Name]',
    duration: {
      start: '2023-08',
      end: '2025-07'
    },
    description: 'Research and development of computer vision and reinforcement learning algorithms for autonomous navigation in complex indoor environments. Focus on real-time obstacle detection, path planning, and decision-making systems.',
    status: 'ongoing',
    fundingAmount: '₹95,00,000',
    outcomes: [
      'Prototype development in progress',
      '2 Patent applications filed'
    ],
    teamMembers: ['Research Associate 1', 'PhD Student 4']
  },
  {
    id: 'proj-004',
    title: 'Federated Learning for Privacy-Preserving Healthcare Analytics',
    sponsor: 'Indian Council of Medical Research (ICMR)',
    pi: 'Dr. [PI Name]',
    duration: {
      start: '2024-06',
      end: 'Present'
    },
    description: 'Developing federated learning frameworks that enable collaborative machine learning across multiple healthcare institutions while preserving patient privacy and data security. Application domains include disease prediction and treatment recommendation.',
    status: 'ongoing',
    fundingAmount: '₹65,00,000',
    teamMembers: ['PhD Student 5', 'Research Associate 2']
  }
]

export const completedProjects: Project[] = [
  {
    id: 'proj-101',
    title: 'Deep Learning for Agricultural Crop Disease Detection',
    sponsor: 'Indian Council of Agricultural Research (ICAR)',
    pi: 'Dr. [PI Name]',
    duration: {
      start: '2021-01',
      end: '2023-12'
    },
    description: 'Developed an end-to-end system for automated detection and classification of crop diseases using smartphone images. The system was deployed in 50+ villages and helped farmers identify diseases early.',
    status: 'completed',
    fundingAmount: '₹45,00,000',
    outcomes: [
      'Mobile app deployed in 5 states',
      '4 Journal publications',
      '6 Conference papers',
      'Technology transfer to startup'
    ],
    teamMembers: ['PhD Student (Graduated)', 'M.Tech Students (Graduated)']
  },
  {
    id: 'proj-102',
    title: 'Smart Traffic Management System using Computer Vision',
    sponsor: 'Ministry of Road Transport and Highways',
    pi: 'Dr. [PI Name]',
    duration: {
      start: '2020-06',
      end: '2023-05'
    },
    description: 'Created an intelligent traffic management system using multi-camera computer vision to analyze traffic flow, detect violations, and optimize signal timing. Successfully piloted in two metropolitan cities.',
    status: 'completed',
    fundingAmount: '₹85,00,000',
    outcomes: [
      'Pilot deployment in 2 cities',
      'Reduced traffic congestion by 25%',
      '5 Journal publications',
      '1 Patent granted'
    ],
    teamMembers: ['Research Associates (Former)', 'PhD Students (Graduated)']
  },
  {
    id: 'proj-103',
    title: 'Sentiment Analysis for Social Media Monitoring',
    sponsor: 'Private Industry Partner',
    pi: 'Dr. [PI Name]',
    duration: {
      start: '2021-09',
      end: '2023-08'
    },
    description: 'Developed advanced sentiment analysis and opinion mining tools for real-time social media monitoring. The system handles multiple languages and can detect emerging trends and public sentiment.',
    status: 'completed',
    fundingAmount: '₹30,00,000',
    outcomes: [
      'Commercial product developed',
      '2 Journal publications',
      '3 Conference papers'
    ]
  }
]

export const labFacilities: LabFacility[] = [
  {
    id: 'fac-001',
    name: 'High-Performance Computing Cluster',
    description: 'Dedicated computing cluster with multiple GPU nodes for training large-scale deep learning models and running intensive simulations.',
    imageUrl: '', // Add image URL here
    specifications: [
      '8x NVIDIA A100 GPUs',
      '128 CPU cores',
      '1TB RAM',
      '100TB Storage'
    ]
  },
  {
    id: 'fac-002',
    name: 'AI Workstations',
    description: 'Individual high-performance workstations equipped with latest GPUs for research and development activities.',
    imageUrl: '',
    specifications: [
      '10x RTX 4090 equipped workstations',
      '64GB RAM per workstation',
      'Dual 4K monitors',
      'High-speed networking'
    ]
  },
  {
    id: 'fac-003',
    name: 'Computer Vision Laboratory',
    description: 'Specialized lab equipped with cameras, sensors, and robotics platforms for computer vision and robotics research.',
    imageUrl: '',
    specifications: [
      'Multiple HD/4K cameras',
      'Depth sensors (LiDAR, RGB-D)',
      'Robotic platforms',
      'Motion capture system'
    ]
  },
  {
    id: 'fac-004',
    name: 'Data Annotation & Analysis Center',
    description: 'Dedicated space for data collection, annotation, and analysis with specialized software tools and trained personnel.',
    imageUrl: '',
    specifications: [
      'Annotation workstations',
      'Specialized software licenses',
      'Secure data storage',
      'Collaborative workspace'
    ]
  },
  {
    id: 'fac-005',
    name: 'Meeting & Collaboration Spaces',
    description: 'Modern conference rooms and open collaboration areas equipped with smart boards and video conferencing facilities.',
    imageUrl: '',
    specifications: [
      'Smart boards',
      'Video conferencing setup',
      'Wireless presentation',
      'Breakout spaces'
    ]
  },
  {
    id: 'fac-006',
    name: 'Medical Imaging Equipment',
    description: 'Access to medical imaging equipment through hospital collaborations for healthcare AI research.',
    imageUrl: '',
    specifications: [
      'CT Scanner access',
      'MRI Scanner access',
      'X-ray systems',
      'Ultrasound machines'
    ]
  }
]

export const collaborations: Collaboration[] = [
  {
    id: 'collab-001',
    name: 'All India Institute of Medical Sciences (AIIMS)',
    type: 'academia',
    description: 'Collaborative research in medical image analysis and AI-assisted diagnosis systems.',
    logoUrl: '', // Add logo URL
    website: 'https://aiims.edu'
  },
  {
    id: 'collab-002',
    name: 'Indian Institute of Technology (IIT) Delhi',
    type: 'academia',
    description: 'Joint research programs in machine learning and computer vision.',
    logoUrl: '',
    website: 'https://iitd.ac.in'
  },
  {
    id: 'collab-003',
    name: 'Indian Institute of Technology (IIT) Bombay',
    type: 'academia',
    description: 'Collaboration on natural language processing and speech recognition.',
    logoUrl: '',
    website: 'https://iitb.ac.in'
  },
  {
    id: 'collab-004',
    name: 'Tata Consultancy Services (TCS)',
    type: 'industry',
    description: 'Industry partnership for applied AI research and technology transfer.',
    logoUrl: '',
    website: 'https://tcs.com'
  },
  {
    id: 'collab-005',
    name: 'Infosys Limited',
    type: 'industry',
    description: 'Collaborative projects in enterprise AI solutions and automation.',
    logoUrl: '',
    website: 'https://infosys.com'
  },
  {
    id: 'collab-006',
    name: 'Microsoft Research India',
    type: 'industry',
    description: 'Joint research in AI for social good and low-resource languages.',
    logoUrl: '',
    website: 'https://microsoft.com/research'
  },
  {
    id: 'collab-007',
    name: 'Centre for Development of Advanced Computing (C-DAC)',
    type: 'government',
    description: 'Partnership on national AI initiatives and high-performance computing.',
    logoUrl: '',
    website: 'https://cdac.in'
  },
  {
    id: 'collab-008',
    name: 'Indian Space Research Organisation (ISRO)',
    type: 'government',
    description: 'Collaboration on satellite image analysis and remote sensing applications.',
    logoUrl: '',
    website: 'https://isro.gov.in'
  }
]
