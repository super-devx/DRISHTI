import { LucideIcon } from 'lucide-react'
import {
  Brain,
  Microscope,
  MessageSquare,
  Eye,
  Bot,
  Network
} from 'lucide-react'

export interface ResearchArea {
  id: string
  title: string
  description: string
  icon: LucideIcon
  details: string[]
  applications: string[]
  keyProjects?: string[]
  publications?: number
}

export const researchAreas: ResearchArea[] = [
  {
    id: 'ai-ml',
    title: 'Artificial Intelligence & Machine Learning',
    description: 'Developing advanced AI algorithms and machine learning models for solving complex real-world problems across various domains.',
    icon: Brain,
    details: [
      'Deep Learning architectures and optimization',
      'Transfer Learning and Few-Shot Learning',
      'Federated Learning for privacy-preserving ML',
      'AutoML and Neural Architecture Search',
      'Explainable AI (XAI) and interpretable models'
    ],
    applications: [
      'Healthcare diagnostics',
      'Financial forecasting',
      'Autonomous systems',
      'Natural language understanding'
    ],
    keyProjects: [
      'AI-Driven Medical Image Analysis',
      'Federated Learning for Healthcare Analytics'
    ],
    publications: 45
  },
  {
    id: 'medical-imaging',
    title: 'Medical Image Analysis',
    description: 'Applying computer vision and deep learning to analyze medical images for disease detection, diagnosis, and treatment planning.',
    icon: Microscope,
    details: [
      'Automated disease detection from CT, MRI, X-ray',
      'Image segmentation and registration',
      'Multi-modal medical image fusion',
      '3D reconstruction and visualization',
      'CAD systems for radiology'
    ],
    applications: [
      'Early cancer detection',
      'Neurological disorder diagnosis',
      'Cardiac imaging analysis',
      'Pathology image analysis'
    ],
    keyProjects: [
      'AI-Driven Medical Image Analysis',
      'Multi-Modal Learning for Medical Diagnosis'
    ],
    publications: 32
  },
  {
    id: 'nlp',
    title: 'Natural Language Processing',
    description: 'Research in language understanding, generation, and translation with focus on low-resource Indian languages.',
    icon: MessageSquare,
    details: [
      'Large Language Models (LLMs)',
      'Multilingual NLP for Indian languages',
      'Sentiment analysis and opinion mining',
      'Text summarization and generation',
      'Named Entity Recognition (NER)',
      'Question Answering systems'
    ],
    applications: [
      'Machine translation',
      'Chatbots and virtual assistants',
      'Social media monitoring',
      'Document analysis'
    ],
    keyProjects: [
      'NLP for Indian Languages',
      'Sentiment Analysis for Social Media'
    ],
    publications: 28
  },
  {
    id: 'computer-vision',
    title: 'Computer Vision',
    description: 'Developing visual recognition systems for object detection, tracking, and scene understanding in various environments.',
    icon: Eye,
    details: [
      'Object detection and recognition',
      'Instance and semantic segmentation',
      'Action recognition in videos',
      'Self-supervised visual learning',
      'Vision transformers',
      'Multi-camera tracking'
    ],
    applications: [
      'Autonomous vehicles',
      'Surveillance systems',
      'Agricultural monitoring',
      'Industrial automation'
    ],
    keyProjects: [
      'Smart Traffic Management System',
      'Agricultural Crop Disease Detection'
    ],
    publications: 38
  },
  {
    id: 'robotics',
    title: 'Robotics & Autonomous Systems',
    description: 'Creating intelligent robotic systems with autonomous navigation, planning, and decision-making capabilities.',
    icon: Bot,
    details: [
      'Autonomous navigation and path planning',
      'SLAM (Simultaneous Localization and Mapping)',
      'Reinforcement learning for robotics',
      'Human-robot interaction',
      'Swarm robotics',
      'Robot perception and control'
    ],
    applications: [
      'Indoor navigation robots',
      'Warehouse automation',
      'Search and rescue operations',
      'Agricultural robots'
    ],
    keyProjects: [
      'Autonomous Navigation for Indoor Robotics'
    ],
    publications: 22
  },
  {
    id: 'healthcare-ai',
    title: 'AI for Healthcare',
    description: 'Integrating AI technologies to improve healthcare delivery, diagnosis, and patient outcomes.',
    icon: Network,
    details: [
      'Clinical decision support systems',
      'Disease prediction and prognosis',
      'Drug discovery using AI',
      'Electronic Health Record (EHR) analysis',
      'Telemedicine and remote monitoring',
      'Personalized medicine'
    ],
    applications: [
      'Early disease detection',
      'Treatment recommendation',
      'Patient risk stratification',
      'Healthcare resource optimization'
    ],
    keyProjects: [
      'Explainable AI for Clinical Decisions',
      'Federated Learning for Healthcare'
    ],
    publications: 35
  }
]

// Helper function to get research area by id
export function getResearchAreaById(id: string): ResearchArea | undefined {
  return researchAreas.find(area => area.id === id)
}

// Helper function to get total publications across all areas
export function getTotalPublications(): number {
  return researchAreas.reduce((total, area) => total + (area.publications || 0), 0)
}

// Helper function to get research areas by minimum publication count
export function getResearchAreasByPublications(minPublications: number): ResearchArea[] {
  return researchAreas
    .filter(area => (area.publications || 0) >= minPublications)
    .sort((a, b) => (b.publications || 0) - (a.publications || 0))
}

// Export icon components for use in components
export { Brain, Microscope, MessageSquare, Eye, Bot, Network }
