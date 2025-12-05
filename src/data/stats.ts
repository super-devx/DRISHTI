export interface LabStatistic {
  id: string
  label: string
  value: number
  suffix?: string
  prefix?: string
  description?: string
  icon?: string
  color?: string
  animationDuration?: number
}

export interface StatCategory {
  category: string
  stats: LabStatistic[]
}

// Main lab statistics (for hero/about sections)
export const mainStats: LabStatistic[] = [
  {
    id: 'publications',
    label: 'Publications',
    value: 200,
    suffix: '+',
    description: 'Research papers in top-tier journals and conferences',
    color: 'blue',
    animationDuration: 2000
  },
  {
    id: 'projects',
    label: 'Research Projects',
    value: 25,
    suffix: '+',
    description: 'Active and completed funded research projects',
    color: 'green',
    animationDuration: 2000
  },
  {
    id: 'team',
    label: 'Team Members',
    value: 30,
    suffix: '+',
    description: 'PhD students, researchers, and faculty',
    color: 'purple',
    animationDuration: 1500
  },
  {
    id: 'patents',
    label: 'Patents',
    value: 12,
    suffix: '',
    description: 'Filed and granted patents',
    color: 'orange',
    animationDuration: 1500
  }
]

// Detailed statistics organized by category
export const categorizedStats: StatCategory[] = [
  {
    category: 'Research Output',
    stats: [
      {
        id: 'journal-papers',
        label: 'Journal Papers',
        value: 120,
        description: 'Published in high-impact journals'
      },
      {
        id: 'conference-papers',
        label: 'Conference Papers',
        value: 75,
        description: 'Presented at international conferences'
      },
      {
        id: 'book-chapters',
        label: 'Book Chapters',
        value: 8,
        description: 'Contributions to edited volumes'
      },
      {
        id: 'h-index',
        label: 'H-Index',
        value: 42,
        description: 'Lab\'s collective h-index'
      },
      {
        id: 'citations',
        label: 'Citations',
        value: 5000,
        suffix: '+',
        description: 'Total citations of lab publications'
      }
    ]
  },
  {
    category: 'Funding & Grants',
    stats: [
      {
        id: 'total-funding',
        label: 'Total Funding',
        value: 15,
        prefix: '₹',
        suffix: ' Cr',
        description: 'Cumulative research funding received'
      },
      {
        id: 'active-grants',
        label: 'Active Grants',
        value: 8,
        description: 'Currently funded research projects'
      },
      {
        id: 'funding-agencies',
        label: 'Funding Agencies',
        value: 12,
        description: 'Government and industry partners'
      }
    ]
  },
  {
    category: 'Team & Training',
    stats: [
      {
        id: 'phd-students',
        label: 'PhD Students',
        value: 15,
        description: 'Pursuing doctoral research'
      },
      {
        id: 'mtech-students',
        label: 'M.Tech Students',
        value: 10,
        description: 'Master\'s research students'
      },
      {
        id: 'research-associates',
        label: 'Research Associates',
        value: 5,
        description: 'Postdoctoral researchers'
      },
      {
        id: 'alumni',
        label: 'Alumni',
        value: 50,
        suffix: '+',
        description: 'PhD and M.Tech graduates'
      }
    ]
  },
  {
    category: 'Impact & Recognition',
    stats: [
      {
        id: 'awards',
        label: 'Awards',
        value: 25,
        suffix: '+',
        description: 'Best paper and research awards'
      },
      {
        id: 'collaborations',
        label: 'Collaborations',
        value: 20,
        suffix: '+',
        description: 'Academic and industry partnerships'
      },
      {
        id: 'tech-transfers',
        label: 'Technology Transfers',
        value: 5,
        description: 'Successful commercialization'
      },
      {
        id: 'social-impact',
        label: 'Villages Impacted',
        value: 100,
        suffix: '+',
        description: 'Through deployed solutions'
      }
    ]
  },
  {
    category: 'Infrastructure',
    stats: [
      {
        id: 'gpu-nodes',
        label: 'GPU Nodes',
        value: 8,
        description: 'NVIDIA A100 GPUs for training'
      },
      {
        id: 'compute-cores',
        label: 'Compute Cores',
        value: 128,
        description: 'CPU cores in HPC cluster'
      },
      {
        id: 'storage',
        label: 'Storage',
        value: 100,
        suffix: ' TB',
        description: 'Research data storage'
      },
      {
        id: 'lab-space',
        label: 'Lab Space',
        value: 2000,
        suffix: ' sq ft',
        description: 'Dedicated research facility'
      }
    ]
  }
]

// Year-wise growth statistics (for charts/graphs)
export interface YearlyStats {
  year: number
  publications: number
  projects: number
  teamSize: number
  funding: number // in crores
}

export const yearlyGrowth: YearlyStats[] = [
  { year: 2020, publications: 25, projects: 3, teamSize: 12, funding: 1.5 },
  { year: 2021, publications: 35, projects: 5, teamSize: 18, funding: 2.5 },
  { year: 2022, publications: 45, projects: 8, teamSize: 22, funding: 4.0 },
  { year: 2023, publications: 50, projects: 12, teamSize: 28, funding: 5.5 },
  { year: 2024, publications: 45, projects: 10, teamSize: 30, funding: 7.5 }
]

// Research area distribution (for visualization)
export interface ResearchAreaStat {
  area: string
  publications: number
  projects: number
  percentage: number
}

export const researchAreaDistribution: ResearchAreaStat[] = [
  {
    area: 'AI & Machine Learning',
    publications: 45,
    projects: 8,
    percentage: 22.5
  },
  {
    area: 'Computer Vision',
    publications: 38,
    projects: 7,
    percentage: 19
  },
  {
    area: 'Healthcare AI',
    publications: 35,
    projects: 6,
    percentage: 17.5
  },
  {
    area: 'Medical Imaging',
    publications: 32,
    projects: 5,
    percentage: 16
  },
  {
    area: 'Natural Language Processing',
    publications: 28,
    projects: 4,
    percentage: 14
  },
  {
    area: 'Robotics & Autonomous Systems',
    publications: 22,
    projects: 3,
    percentage: 11
  }
]

// Helper functions
export function getTotalStat(statId: string): number {
  const stat = mainStats.find(s => s.id === statId)
  return stat ? stat.value : 0
}

export function getStatsByCategory(category: string): LabStatistic[] {
  const categoryData = categorizedStats.find(c => c.category === category)
  return categoryData ? categoryData.stats : []
}

export function getStatGrowthRate(statId: string, years: number = 5): number {
  // Calculate growth rate over specified years
  if (yearlyGrowth.length < 2) return 0

  const recentYears = yearlyGrowth.slice(-years)
  if (recentYears.length < 2) return 0

  const firstValue = recentYears[0][statId as keyof YearlyStats] as number
  const lastValue = recentYears[recentYears.length - 1][statId as keyof YearlyStats] as number

  if (!firstValue) return 0
  return ((lastValue - firstValue) / firstValue) * 100
}

export function formatStatValue(stat: LabStatistic): string {
  const prefix = stat.prefix || ''
  const suffix = stat.suffix || ''
  return `${prefix}${stat.value.toLocaleString()}${suffix}`
}

// Milestone achievements
export interface Milestone {
  year: number
  title: string
  description: string
}

export const labMilestones: Milestone[] = [
  {
    year: 2019,
    title: 'Lab Established',
    description: 'DRISHTI Lab founded with initial team of 5 researchers'
  },
  {
    year: 2020,
    title: 'First Major Grant',
    description: 'Received ₹2 Cr funding from DST for AI in Healthcare'
  },
  {
    year: 2021,
    title: 'Best Paper Award',
    description: 'Won Best Paper at NeurIPS for medical image analysis'
  },
  {
    year: 2022,
    title: 'Technology Transfer',
    description: 'Successfully transferred crop disease detection system to startup'
  },
  {
    year: 2023,
    title: '100th Publication',
    description: 'Published 100th research paper in top-tier venue'
  },
  {
    year: 2024,
    title: 'National Recognition',
    description: 'Ranked among top 10 AI research labs in India'
  }
]

// Export all statistics for quick access
export const allStats = {
  main: mainStats,
  categorized: categorizedStats,
  yearly: yearlyGrowth,
  distribution: researchAreaDistribution,
  milestones: labMilestones
}

export default allStats
