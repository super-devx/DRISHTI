# DRISHTI Lab Website - Components Guide

Complete guide to all components in the DRISHTI Lab website.

## 📁 Project Structure

```
DRISHTI/
├── src/
│   ├── components/         # Reusable components
│   │   ├── AboutLab.tsx
│   │   ├── AnimatedBackground.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── LoadingSplash.tsx
│   │   ├── Navbar.tsx
│   │   ├── News.tsx
│   │   ├── Projects.tsx
│   │   ├── Publications.tsx
│   │   ├── ResearchAreas.tsx
│   │   ├── ScrollReveal.tsx
│   │   ├── SEO.tsx
│   │   ├── StatCounter.tsx
│   │   ├── Team.tsx
│   │   └── ThemeToggle.tsx
│   ├── context/           # React contexts
│   │   └── ThemeContext.tsx
│   ├── data/              # Data files
│   │   ├── news.ts
│   │   ├── projects.ts
│   │   ├── publications.ts
│   │   └── team.ts
│   ├── pages/             # Page components
│   │   ├── Home.tsx
│   │   └── NotFound.tsx
│   ├── App.tsx            # Main app component
│   └── main.tsx           # Entry point
├── public/                # Static assets
│   ├── favicon.svg
│   └── site.webmanifest
└── index.html             # HTML template
```

## 🧩 Core Components

### 1. Hero Section
**File:** `src/components/Hero.tsx`

**Purpose:** Landing section with animated background and CTA

**Features:**
- Animated gradient background
- Floating particles effect
- Scroll-to-explore button
- Responsive text sizing

**Data:** Static content (can be made dynamic)

---

### 2. About Lab
**File:** `src/components/AboutLab.tsx`

**Purpose:** Lab introduction and mission statement

**Features:**
- Mission, vision, values cards
- Animated statistics counter
- Icon-based information display
- Smooth scroll animations

**Data:** Static content

---

### 3. Research Areas
**File:** `src/components/ResearchAreas.tsx`

**Purpose:** Showcase lab's research focus areas

**Features:**
- Interactive cards with hover effects
- Icon representation for each area
- Expandable descriptions
- Grid layout (responsive)

**Data:** Static content

---

### 4. Team
**File:** `src/components/Team.tsx`
**Data:** `src/data/team.ts`

**Purpose:** Display team members and PI

**Features:**
- Featured PI card (larger, detailed)
- Team member grid (PhD, M.Tech, RA)
- Hover overlay with contact links
- Alumni section
- Photo placeholders

**Data Structure:**
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
```

**Customization:** Edit `src/data/team.ts`

---

### 5. Publications
**File:** `src/components/Publications.tsx`
**Data:** `src/data/publications.ts`

**Purpose:** Display research publications

**Features:**
- Filter tabs (All, Journals, Conferences, Book Chapters, Patents)
- Search functionality
- Color-coded publication types
- "NEW" badge for recent publications
- DOI and PDF links
- Pagination (6 per page)

**Data Structure:**
```typescript
interface Publication {
  id: string
  title: string
  authors: string[]
  venue: string
  year: number
  type: 'journal' | 'conference' | 'book-chapter' | 'patent'
  doi?: string
  pdfUrl?: string
}
```

**Customization:** Edit `src/data/publications.ts`

---

### 6. Projects
**File:** `src/components/Projects.tsx`
**Data:** `src/data/projects.ts`

**Purpose:** Display current and completed projects

**Features:**
- Tab navigation (Current/Completed)
- Project cards with full details
- Progress bars for ongoing projects
- Status indicators
- Lab facilities showcase
- Collaborations section (Academic, Industry, Government)

**Data Structure:**
```typescript
interface Project {
  id: string
  title: string
  sponsor: string
  pi: string
  duration: { start: string; end: string }
  description: string
  status: 'ongoing' | 'completed'
  fundingAmount?: string
  outcomes?: string[]
}
```

**Customization:** Edit `src/data/projects.ts`

---

### 7. News & Updates
**File:** `src/components/News.tsx`
**Data:** `src/data/news.ts`

**Purpose:** Display lab news, achievements, and events

**Features:**
- Filter by type (Achievement, Award, Publication, Event, Student)
- "NEW" badge for recent items
- "UPCOMING" badge for future events
- Pagination (6 per page)
- Tags system
- External links

**Data Structure:**
```typescript
interface NewsItem {
  id: string
  date: string
  title: string
  description: string
  type: 'achievement' | 'award' | 'publication' | 'event' | 'student' | 'general'
  link?: string
  tags?: string[]
}
```

**Customization:** Edit `src/data/news.ts`

---

### 8. Contact
**File:** `src/components/Contact.tsx`

**Purpose:** Contact information and form

**Features:**
- Full contact details (address, email, phone, hours)
- Validated contact form
- Social media links
- Google Maps placeholder
- Success/error notifications
- Form validation (real-time)

**Form Fields:**
- Name (required, min 2 chars)
- Email (required, valid format)
- Subject (required, min 5 chars)
- Message (required, min 20 chars)

**Customization:** Update `contactInfo` object in component

---

### 9. Footer
**File:** `src/components/Footer.tsx`

**Purpose:** Site footer with links and info

**Features:**
- Quick links to all sections
- Social media icons (5 platforms)
- Visitor counter (localStorage)
- Affiliation information
- Back-to-top button
- Copyright notice

**Customization:** Update `footerConfig` object

---

## 🎨 Utility Components

### LoadingSplash
**File:** `src/components/LoadingSplash.tsx`

Animated loading screen with DRISHTI branding

### ScrollReveal
**File:** `src/components/ScrollReveal.tsx`

Wrapper for scroll-triggered animations
```tsx
<ScrollReveal direction="up" delay={0.2}>
  <Content />
</ScrollReveal>
```

### ThemeToggle
**File:** `src/components/ThemeToggle.tsx`

Floating dark/light mode toggle button

### SEO
**File:** `src/components/SEO.tsx`

Dynamic meta tags for each page

### StatCounter
**File:** `src/components/StatCounter.tsx`

Animated number counter for statistics

### AnimatedBackground
**File:** `src/components/AnimatedBackground.tsx`

Animated gradient background for Hero

### Navbar
**File:** `src/components/Navbar.tsx`

Navigation bar with smooth scroll to sections

---

## 📊 Data Files

All data is centralized in TypeScript files for easy updates:

### team.ts
- Principal Investigator
- Current team members (array)
- Alumni members (array)

### publications.ts
- Publications array
- Helper functions (filter, search, format)

### projects.ts
- Current projects
- Completed projects
- Lab facilities
- Collaborations

### news.ts
- News items array
- Helper functions (filter by type, get recent, format date)

---

## 🎯 Context & State Management

### ThemeContext
**File:** `src/context/ThemeContext.tsx`

Manages dark/light theme across app

**Usage:**
```tsx
import { useTheme } from '../context/ThemeContext'

const { theme, toggleTheme } = useTheme()
```

**Features:**
- Persists to localStorage
- Detects system preference
- Applies class to document root

---

## 📄 Pages

### Home
**File:** `src/pages/Home.tsx`

Main page composing all sections

**Section Order:**
1. Hero
2. About Lab
3. Research Areas
4. Team
5. Publications
6. Projects
7. News
8. Contact

### NotFound (404)
**File:** `src/pages/NotFound.tsx`

Custom 404 page with DRISHTI branding

---

## 🎨 Styling Approach

### Tailwind CSS
- Utility-first CSS framework
- Custom animations in `tailwind.config.js`
- Dark mode support (`dark:` prefix)

### Framer Motion
- Page transitions
- Scroll animations
- Interactive elements

### Design Tokens

**Colors:**
- Primary: Blue (600 light, 500 dark)
- Background: Gray (50 light, 900 dark)
- Accent: Various blues

**Spacing:**
- Consistent padding: py-20, px-4
- Section gaps: mb-12, mb-16

**Typography:**
- Headers: 4xl, 3xl, 2xl, xl
- Body: base, sm
- Font: System font stack

---

## 🔧 Customization Guide

### Update Team Members
1. Open `src/data/team.ts`
2. Edit arrays: `principalInvestigator`, `currentTeamMembers`, `alumniMembers`
3. Add photos by updating `photo` field

### Update Publications
1. Open `src/data/publications.ts`
2. Add to `publications` array
3. Set correct `type` for filtering
4. Add DOI/PDF links

### Update Projects
1. Open `src/data/projects.ts`
2. Add to `currentProjects` or `completedProjects`
3. Update facilities in `labFacilities`
4. Update partners in `collaborations`

### Update News
1. Open `src/data/news.ts`
2. Add to `newsItems` array
3. Use correct date format: "YYYY-MM-DD"
4. Set appropriate `type`

### Change Colors
1. Update `tailwind.config.js`
2. Modify theme.extend.colors
3. Or use Tailwind's default palette

### Add New Section
1. Create component in `src/components/`
2. Import in `src/pages/Home.tsx`
3. Add to section order
4. Update Navbar links

---

## 🚀 Performance Tips

1. **Images:** Use WebP format, add lazy loading
2. **Code Splitting:** Already implemented for pages
3. **Bundle Size:** Run `npm run build` to check
4. **Lighthouse:** Test with Chrome DevTools

---

## ♿ Accessibility

- Semantic HTML used throughout
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states on all interactive elements
- Alt text for images (add when using real images)

---

## 📱 Responsive Breakpoints

```
sm: 640px   // Mobile landscape
md: 768px   // Tablet
lg: 1024px  // Desktop
xl: 1280px  // Large desktop
2xl: 1536px // Extra large
```

---

## 🔍 SEO Checklist

- ✅ Meta descriptions
- ✅ Title tags
- ✅ Open Graph tags
- ✅ Twitter Cards
- ✅ Favicon
- ✅ Sitemap (can be generated)
- ✅ Robots.txt (can be added)
- ⏳ Google Analytics (to be added)

---

## 📚 Resources

- [React Documentation](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)

---

**Version:** 1.0.0
**Last Updated:** December 2024
