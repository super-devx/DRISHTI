export interface TeamMember {
  id: string
  name: string
  designation: string
  researchArea: string
  email?: string
  linkedin?: string
  photo?: string
}

export interface PrincipalInvestigator extends TeamMember {
  bio: string
  qualifications: string[]
}

export const principalInvestigator: PrincipalInvestigator = {
  id: 'pi-001',
  name: 'Dr. Rajib Kumar Panigrahi',
  designation: 'Professor, Electronics and Communication Engineering',
  researchArea: 'Information extraction from radar images, Radar signal processing, Target detection and estimation, Polarimetric SAR, Remote Sensing, Disaster Management',
  bio: 'Dr. Rajib Kumar Panigrahi is a Professor in the Electronics and Communication Engineering Department at IIT Roorkee. His research focuses on information extraction from radar images, radar signal processing, target detection and estimation, along with radar-based remote sensing, disaster management, and sensor development with networking applications. He leads several funded projects including lunar regolith analysis using Chandrayaan-II satellite data, landslide early warning systems development, and Polarimetric SAR analysis for various applications.',
  qualifications: [
    'Ph.D. in Electrical Engineering, IIT Guwahati (2011)',
    'Specialization: Radar Signal Processing & Remote Sensing'
  ],
  email: 'rajib.panigrahi@ece.iitr.ac.in',
  linkedin: 'https://www.linkedin.com/in/rajib-panigrahi-9a143839',
  photo: '' // Add photo URL or import path
}

export const currentTeamMembers: TeamMember[] = [
  // Research Staff
  {
    id: 'ra-001',
    name: 'Ankit Sharma',
    designation: 'Research Associate III',
    researchArea: 'Deep Learning, Cloud Computing, Internet of Things',
    email: 'ankit28sharma@gmail.com',
    linkedin: '',
    photo: ''
  },
  {
    id: 'srf-001',
    name: 'Amrita Joshi',
    designation: 'Senior Research Fellow',
    researchArea: 'Embedded Systems, Sensor Design, Wireless Communication',
    email: '',
    linkedin: 'https://www.linkedin.com/in/amrita-joshi-38699077/',
    photo: ''
  },
  {
    id: 'rf-001',
    name: 'Saket Kumar',
    designation: 'Research Fellow',
    researchArea: 'Sensor Development, Circuit Design, Machine Learning',
    email: '',
    linkedin: '',
    photo: ''
  },
  {
    id: 'intern-001',
    name: 'Mohd Anas',
    designation: 'Project Intern',
    researchArea: 'Sensor Design, VLSI, Python Development',
    email: '',
    linkedin: '',
    photo: ''
  },

  // PhD Students (Research Topics from supervision data)
  {
    id: 'phd-001',
    name: 'PhD Scholar',
    designation: 'Ph.D. Student',
    researchArea: 'MIMO Antenna Design for Wireless Applications',
    email: '',
    linkedin: '',
    photo: ''
  },
  {
    id: 'phd-002',
    name: 'PhD Scholar',
    designation: 'Ph.D. Student',
    researchArea: 'PolSAR Decomposition Techniques',
    email: '',
    linkedin: '',
    photo: ''
  },
  {
    id: 'phd-003',
    name: 'PhD Scholar',
    designation: 'Ph.D. Student',
    researchArea: 'Hybrid-Polarimetric SAR Data Classification',
    email: '',
    linkedin: '',
    photo: ''
  },
  {
    id: 'phd-004',
    name: 'PhD Scholar',
    designation: 'Ph.D. Student',
    researchArea: 'Speckle Filtering Algorithms for SAR Images',
    email: '',
    linkedin: '',
    photo: ''
  },
  {
    id: 'phd-005',
    name: 'PhD Scholar',
    designation: 'Ph.D. Student',
    researchArea: 'PolSAR-based Urban Application Algorithms',
    email: '',
    linkedin: '',
    photo: ''
  }
]

export const alumniMembers: TeamMember[] = [
  {
    id: 'alumni-001',
    name: 'Alumni Name 1',
    designation: 'Ph.D. (2023)',
    researchArea: 'Machine Learning',
    email: 'alumni1@example.com',
    linkedin: 'https://linkedin.com/in/alumni1',
    photo: ''
  },
  {
    id: 'alumni-002',
    name: 'Alumni Name 2',
    designation: 'M.Tech. (2022)',
    researchArea: 'Computer Vision',
    email: 'alumni2@example.com',
    linkedin: 'https://linkedin.com/in/alumni2',
    photo: ''
  },
  {
    id: 'alumni-003',
    name: 'Alumni Name 3',
    designation: 'Research Associate (2021)',
    researchArea: 'Natural Language Processing',
    email: 'alumni3@example.com',
    linkedin: 'https://linkedin.com/in/alumni3',
    photo: ''
  }
]