# DRISHTI Lab - Data Management Guide

Complete guide to managing all content data in TypeScript files.

## 📁 Data Files Overview

All data is centralized in `/src/data/` for easy content management:

```
src/data/
├── index.ts              # Central export point
├── team.ts              # Team members (10 people)
├── publications.ts      # Publications (14 items)
├── projects.ts          # Projects, facilities, collaborations (21 items)
├── news.ts              # News and announcements (16 items)
├── research-areas.ts    # Research focus areas (6 areas)
└── stats.ts             # Lab statistics (60+ metrics)
```

---

## 1️⃣ Team Data (`team.ts`)

### Data Structure

```typescript
interface TeamMember {
  id: string
  name: string
  designation: string
  researchArea: string
  email?: string
  linkedin?: string
  photo?: string
}

interface PrincipalInvestigator extends TeamMember {
  bio: string
  qualifications: string[]
}
```

### What's Included

- **1 Principal Investigator** with full bio
- **6 Current team members** (PhD, M.Tech, Research Associates)
- **3 Alumni members**

### How to Update

```typescript
// Update PI
export const principalInvestigator: PrincipalInvestigator = {
  name: 'Dr. Your Name',           // ← Change this
  designation: 'Principal Investigator',
  researchArea: 'Your areas',       // ← Change this
  bio: 'Your bio...',               // ← Change this
  qualifications: ['PhD', 'M.Tech'], // ← Change this
  email: 'email@example.edu',       // ← Change this
  linkedin: 'your-url',             // ← Change this
  photo: '/team/pi.jpg'             // ← Add photo
}

// Add/Edit team members
export const currentTeamMembers: TeamMember[] = [
  {
    id: 'phd-001',                  // Unique ID
    name: 'Student Name',           // ← Change
    designation: 'Ph.D. Student',
    researchArea: 'Computer Vision', // ← Change
    email: 'student@example.edu',   // ← Change
    linkedin: 'linkedin-url',       // ← Optional
    photo: '/team/student1.jpg'     // ← Optional
  }
  // Add more members...
]
```

---

## 2️⃣ Publications Data (`publications.ts`)

### Data Structure

```typescript
type PublicationType = 'journal' | 'conference' | 'book-chapter' | 'patent'

interface Publication {
  id: string
  title: string
  authors: string[]
  venue: string
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
```

### What's Included

- **4 Journal articles**
- **5 Conference papers**
- **2 Book chapters**
- **2 Patents**
- **Total: 14 publications**

### How to Update

```typescript
export const publications: Publication[] = [
  {
    id: 'j-001',                    // Unique ID
    title: 'Your Paper Title',      // ← Change
    authors: ['Author 1', 'Author 2'], // ← Change
    venue: 'Journal Name',          // ← Change
    year: 2024,                     // ← Change
    type: 'journal',                // journal | conference | book-chapter | patent
    doi: '10.1109/TMI.2024.XXX',   // ← Optional
    pdfUrl: 'https://...',          // ← Optional
    abstract: 'Paper abstract...',  // ← Optional
    volume: '43',                   // ← Optional
    issue: '5',                     // ← Optional
    pages: '1234-1256',             // ← Optional
    publisher: 'IEEE'               // ← Optional
  }
  // Add more publications...
]
```

### Helper Functions

```typescript
// Filter by type
getPublicationsByType('journal')

// Search publications
searchPublications('deep learning')

// Check if recent (within 6 months)
isRecentPublication(2024)
```

---

## 3️⃣ Projects Data (`projects.ts`)

### Data Structure

```typescript
type ProjectStatus = 'ongoing' | 'completed'

interface Project {
  id: string
  title: string
  sponsor: string
  pi: string
  duration: { start: string; end: string }
  description: string
  status: ProjectStatus
  fundingAmount?: string
  outcomes?: string[]
  teamMembers?: string[]
}

interface LabFacility {
  id: string
  name: string
  description: string
  imageUrl?: string
  specifications?: string[]
}

interface Collaboration {
  id: string
  name: string
  type: 'industry' | 'academia' | 'government'
  description: string
  logoUrl?: string
  website?: string
}
```

### What's Included

- **4 Current projects**
- **3 Completed projects**
- **6 Lab facilities**
- **8 Collaborations** (3 academic, 3 industry, 2 government)

### How to Update

```typescript
// Current Projects
export const currentProjects: Project[] = [
  {
    id: 'proj-001',
    title: 'Project Title',         // ← Change
    sponsor: 'DST, Govt of India',  // ← Change
    pi: 'Dr. PI Name',              // ← Change
    duration: {
      start: '2023-04',             // ← YYYY-MM format
      end: '2026-03'                // ← YYYY-MM or 'Present'
    },
    description: 'Project description...', // ← Change
    status: 'ongoing',              // ongoing | completed
    fundingAmount: '₹75,00,000',    // ← Optional
    outcomes: [                     // ← Optional
      '3 Journal publications',
      '5 Conference papers'
    ],
    teamMembers: ['Student 1', 'Student 2'] // ← Optional
  }
]

// Lab Facilities
export const labFacilities: LabFacility[] = [
  {
    id: 'fac-001',
    name: 'HPC Cluster',            // ← Change
    description: 'Description...',  // ← Change
    imageUrl: '/facilities/hpc.jpg', // ← Optional
    specifications: [               // ← Optional
      '8x NVIDIA A100 GPUs',
      '128 CPU cores'
    ]
  }
]

// Collaborations
export const collaborations: Collaboration[] = [
  {
    id: 'collab-001',
    name: 'Partner Name',           // ← Change
    type: 'academia',               // academia | industry | government
    description: 'Collaboration details...', // ← Change
    logoUrl: '/logos/partner.png',  // ← Optional
    website: 'https://...'          // ← Optional
  }
]
```

---

## 4️⃣ News Data (`news.ts`)

### Data Structure

```typescript
type NewsType = 'achievement' | 'award' | 'publication' | 'event' | 'student' | 'general'

interface NewsItem {
  id: string
  date: string  // Format: "YYYY-MM-DD"
  title: string
  description: string
  type: NewsType
  link?: string
  imageUrl?: string
  tags?: string[]
}
```

### What's Included

- **16 News items** across 6 categories
- Date range: June 2024 - December 2024

### How to Update

```typescript
export const newsItems: NewsItem[] = [
  {
    id: 'news-001',
    date: '2024-11-15',             // ← YYYY-MM-DD format
    title: 'News Title',            // ← Change
    description: 'Full description...', // ← Change
    type: 'achievement',            // achievement | award | publication | event | student | general
    link: 'https://...',            // ← Optional external link
    imageUrl: '/news/image.jpg',    // ← Optional
    tags: ['Tag1', 'Tag2']          // ← Optional
  }
  // Add more news items...
]
```

### Helper Functions

```typescript
// Get news by type
getNewsByType('achievement')

// Get recent N items
getRecentNews(10)

// Get upcoming events
getUpcomingEvents()

// Format date nicely
formatNewsDate('2024-11-15')  // "November 15, 2024"

// Check if recent (within 30 days)
isRecentNews('2024-11-15')
```

---

## 5️⃣ Research Areas Data (`research-areas.ts`)

### Data Structure

```typescript
interface ResearchArea {
  id: string
  title: string
  description: string
  icon: LucideIcon
  details: string[]
  applications: string[]
  keyProjects?: string[]
  publications?: number
}
```

### What's Included

- **6 Research focus areas**:
  1. AI & Machine Learning (45 publications)
  2. Medical Image Analysis (32 publications)
  3. Natural Language Processing (28 publications)
  4. Computer Vision (38 publications)
  5. Robotics & Autonomous Systems (22 publications)
  6. AI for Healthcare (35 publications)

### How to Update

```typescript
import { Brain, Microscope, MessageSquare } from 'lucide-react'

export const researchAreas: ResearchArea[] = [
  {
    id: 'ai-ml',
    title: 'Your Research Area',    // ← Change
    description: 'Area description...', // ← Change
    icon: Brain,                    // ← Choose icon from lucide-react
    details: [                      // ← Change
      'Detail 1',
      'Detail 2',
      'Detail 3'
    ],
    applications: [                 // ← Change
      'Application 1',
      'Application 2'
    ],
    keyProjects: ['Project name'], // ← Optional
    publications: 45               // ← Optional
  }
]
```

### Helper Functions

```typescript
// Get area by ID
getResearchAreaById('ai-ml')

// Get total publications
getTotalPublications()

// Filter by min publications
getResearchAreasByPublications(30)
```

---

## 6️⃣ Statistics Data (`stats.ts`)

### Data Structure

```typescript
interface LabStatistic {
  id: string
  label: string
  value: number
  suffix?: string
  prefix?: string
  description?: string
  color?: string
}

interface YearlyStats {
  year: number
  publications: number
  projects: number
  teamSize: number
  funding: number
}

interface Milestone {
  year: number
  title: string
  description: string
}
```

### What's Included

- **4 Main statistics** (Publications, Projects, Team, Patents)
- **5 Categories** with detailed stats:
  - Research Output (5 stats)
  - Funding & Grants (3 stats)
  - Team & Training (4 stats)
  - Impact & Recognition (4 stats)
  - Infrastructure (4 stats)
- **5 Years** of growth data (2020-2024)
- **6 Research area** distribution stats
- **6 Lab milestones**

### How to Update

```typescript
// Main stats (displayed prominently)
export const mainStats: LabStatistic[] = [
  {
    id: 'publications',
    label: 'Publications',
    value: 200,                     // ← Change number
    suffix: '+',                    // ← Optional
    description: 'Research papers...', // ← Change
    color: 'blue'
  }
]

// Yearly growth
export const yearlyGrowth: YearlyStats[] = [
  {
    year: 2024,                     // ← Add new years
    publications: 45,               // ← Update numbers
    projects: 10,
    teamSize: 30,
    funding: 7.5                    // in crores
  }
]

// Milestones
export const labMilestones: Milestone[] = [
  {
    year: 2024,                     // ← Add new milestones
    title: 'Major Achievement',     // ← Change
    description: 'What happened...' // ← Change
  }
]
```

### Helper Functions

```typescript
// Get specific stat
getTotalStat('publications')

// Get stats by category
getStatsByCategory('Research Output')

// Calculate growth rate
getStatGrowthRate('publications', 5)  // 5 years

// Format stat value
formatStatValue(stat)  // "₹15 Cr" or "200+"
```

---

## 🎯 Central Import System

### Using index.ts

Import data from the central export:

```typescript
// Import specific data
import { team, publications, projects } from '@/data'

// Or import individual items
import {
  principalInvestigator,
  currentTeamMembers,
  publications,
  currentProjects,
  newsItems,
  researchAreas,
  mainStats
} from '@/data'

// Or import types
import type {
  TeamMember,
  Publication,
  Project,
  NewsItem,
  ResearchArea,
  LabStatistic
} from '@/data'
```

---

## 📊 Data Summary

| File | Type | Count | Last Updated |
|------|------|-------|--------------|
| team.ts | People | 10 | Setup |
| publications.ts | Papers | 14 | Setup |
| projects.ts | Projects | 7 | Setup |
| projects.ts | Facilities | 6 | Setup |
| projects.ts | Collaborations | 8 | Setup |
| news.ts | News Items | 16 | Setup |
| research-areas.ts | Areas | 6 | Setup |
| stats.ts | Statistics | 60+ | Setup |

**Total Data Items:** 120+

---

## ✅ Data Update Checklist

### Regular Updates (Monthly)

- [ ] Add new publications to `publications.ts`
- [ ] Update current projects in `projects.ts`
- [ ] Add news items to `news.ts`
- [ ] Update statistics in `stats.ts`

### Occasional Updates (Quarterly)

- [ ] Update team members in `team.ts`
- [ ] Add/remove alumni
- [ ] Update lab facilities
- [ ] Add new collaborations
- [ ] Update research area publications count

### Annual Updates

- [ ] Add new year to `yearlyGrowth` in `stats.ts`
- [ ] Update main statistics
- [ ] Add lab milestones
- [ ] Review and archive old news
- [ ] Update research area descriptions

---

## 🔍 Best Practices

### 1. **Consistent IDs**
Use prefixed IDs: `phd-001`, `j-001`, `proj-001`, `news-001`

### 2. **Date Formats**
- Full dates: `"YYYY-MM-DD"` (2024-11-15)
- Month/Year: `"YYYY-MM"` (2024-11)

### 3. **Optional Fields**
Mark optional fields with `?` in TypeScript

### 4. **Helper Functions**
Use provided helper functions instead of manual filtering

### 5. **Type Safety**
Always use TypeScript interfaces for new data

---

## 🚀 Quick Commands

### Add New Publication
1. Open `src/data/publications.ts`
2. Add to `publications` array
3. Use correct `type` (journal/conference/book-chapter/patent)
4. Add DOI and PDF links if available

### Add Team Member
1. Open `src/data/team.ts`
2. Add to `currentTeamMembers` array
3. Generate unique ID
4. Add photo in `/public/team/` folder

### Add News Item
1. Open `src/data/news.ts`
2. Add to `newsItems` array
3. Use correct date format
4. Set appropriate `type`

### Update Statistics
1. Open `src/data/stats.ts`
2. Update `mainStats` for hero section
3. Update `yearlyGrowth` for trends
4. Update category stats as needed

---

## 📝 Data Validation

All data files include TypeScript types for validation:

```typescript
// TypeScript will catch errors:
const publication: Publication = {
  id: 'j-001',
  title: 'Paper Title',
  // TypeScript error if required fields missing
  // TypeScript error if wrong type used
}
```

---

## 💡 Tips

1. **Backup Before Changes:** Copy data files before major updates
2. **Test After Updates:** Check website after data changes
3. **Use Placeholders:** Add placeholder data you can replace later
4. **Keep Organized:** Use consistent naming and ordering
5. **Document Changes:** Add comments for major updates

---

## 🔗 Related Documentation

- [QUICK_START.md](QUICK_START.md) - Quick customization guide
- [COMPONENTS_GUIDE.md](COMPONENTS_GUIDE.md) - Component documentation
- [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md) - Project overview

---

**Last Updated:** December 2024
**Data Version:** 1.0.0
