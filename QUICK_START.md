# DRISHTI Lab Website - Quick Start Guide

Get your DRISHTI Lab website up and running in minutes!

## 🚀 Quick Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open in Browser
Navigate to: `http://localhost:5173`

---

## 📝 First Steps: Customize Your Content

### Update Team Members (5 minutes)

**File:** `src/data/team.ts`

```typescript
// Update Principal Investigator
export const principalInvestigator = {
  name: 'Dr. Your Name',              // ← Change this
  designation: 'Principal Investigator',
  researchArea: 'Your research areas',  // ← Change this
  bio: 'Your bio',                      // ← Change this
  email: 'your.email@example.edu',      // ← Change this
  linkedin: 'your-linkedin-url',        // ← Change this
  photo: '/path/to/your/photo.jpg'      // ← Add your photo
}

// Update Current Team Members
export const currentTeamMembers = [
  {
    id: 'phd-001',
    name: 'Student Name',              // ← Change this
    designation: 'Ph.D. Student',
    researchArea: 'Their research',    // ← Change this
    email: 'email@example.edu',        // ← Change this
    linkedin: 'linkedin-url'           // ← Change this
  }
  // Add more team members...
]
```

### Update Contact Information (5 minutes)

**File:** `src/components/Contact.tsx`

Look for the `contactInfo` object around line 40:

```typescript
const contactInfo = {
  address: {
    line1: 'Your Lab Room',           // ← Change this
    line2: 'Your Department',          // ← Change this
    line3: 'Your Institution',         // ← Change this
    city: 'Your City - Pincode',       // ← Change this
    country: 'Your Country'            // ← Change this
  },
  email: 'your.email@example.edu',    // ← Change this
  phone: '+XX-XX-XXXX-XXXX',          // ← Change this
  // Update office hours and social media too
}
```

### Update Publications (10 minutes)

**File:** `src/data/publications.ts`

```typescript
export const publications: Publication[] = [
  {
    id: 'j-001',
    title: 'Your Paper Title',        // ← Change this
    authors: ['Author 1', 'Author 2'], // ← Change this
    venue: 'Journal Name',             // ← Change this
    year: 2024,                        // ← Change this
    type: 'journal',                   // journal, conference, book-chapter, patent
    doi: '10.1109/...',                // ← Add DOI
    pdfUrl: 'https://...',             // ← Add PDF link
  }
  // Add more publications...
]
```

### Update Projects (10 minutes)

**File:** `src/data/projects.ts`

```typescript
export const currentProjects: Project[] = [
  {
    id: 'proj-001',
    title: 'Your Project Title',      // ← Change this
    sponsor: 'Funding Agency',         // ← Change this
    pi: 'PI Name',                     // ← Change this
    duration: {
      start: '2024-01',                // ← Change this (YYYY-MM)
      end: '2026-12'                   // ← Change this
    },
    description: 'Project description', // ← Change this
    status: 'ongoing',                 // ongoing or completed
    fundingAmount: '₹XX,XX,XXX'        // ← Change this
  }
  // Add more projects...
]
```

### Update News (10 minutes)

**File:** `src/data/news.ts`

```typescript
export const newsItems: NewsItem[] = [
  {
    id: 'news-001',
    date: '2024-12-05',               // ← YYYY-MM-DD format
    title: 'Your News Title',         // ← Change this
    description: 'News description',   // ← Change this
    type: 'achievement',               // achievement, award, publication, event, student
    link: 'https://...',               // ← Optional external link
    tags: ['Tag1', 'Tag2']            // ← Optional tags
  }
  // Add more news items...
]
```

---

## 🎨 Customize Branding

### Change Colors

**File:** `tailwind.config.js`

The default color scheme is blue. To change:

```javascript
theme: {
  extend: {
    colors: {
      // Add your custom colors
      primary: '#YOUR_COLOR',
      // Or use Tailwind's built-in colors
    }
  }
}
```

Then replace `blue-600`, `blue-900`, etc. throughout components with your color.

### Update Lab Name & Description

**File:** `src/components/Hero.tsx`

```typescript
// Around line 20-30
<h1>DRISHTI Lab</h1>                              // ← Change lab name
<p>Deep Research in...</p>                        // ← Change tagline
```

**File:** `index.html`

```html
<title>DRISHTI Lab - AI Research</title>          <!-- Change title -->
<meta name="description" content="..."/>          <!-- Change description -->
```

### Add Your Logo

1. **Replace Favicon:**
   - Add your logo as `public/favicon.svg`
   - Or create PNG versions: `favicon.ico`, `apple-touch-icon.png`

2. **Update Splash Screen:**
   - File: `src/components/LoadingSplash.tsx`
   - Replace the `<Eye>` icon with your logo image

---

## 📸 Add Images

### Team Photos

1. Add photos to `public/team/` folder
2. Update team data:

```typescript
{
  name: 'Team Member',
  photo: '/team/member-name.jpg'  // ← Add this
}
```

### Lab Facilities

1. Add images to `public/facilities/` folder
2. Update projects data:

```typescript
{
  name: 'Facility Name',
  imageUrl: '/facilities/facility-name.jpg'  // ← Add this
}
```

---

## 🌙 Theme Toggle

Theme toggle is already implemented! Users can:
- Click the floating button (bottom-right)
- Toggle between light and dark modes
- Preference is saved automatically

To disable dark mode:
- Remove `<ThemeToggle />` from `src/App.tsx`

---

## 📧 Connect Contact Form

The contact form has validation but needs backend integration.

**File:** `src/components/Contact.tsx`

Find the `handleSubmit` function (around line 100):

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  // Replace the simulated API call with your actual endpoint
  try {
    const response = await fetch('YOUR_API_ENDPOINT', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    // Handle response...
  } catch (error) {
    // Handle error...
  }
}
```

**Options:**
- FormSpree: `https://formspree.io/YOUR_FORM_ID`
- Netlify Forms: Built-in form handling
- EmailJS: Client-side email sending
- Custom backend API

---

## 🗺️ Add Google Maps

**File:** `src/components/Contact.tsx`

Find the Google Maps placeholder (around line 250):

1. Get Google Maps embed code from [Google Maps](https://www.google.com/maps)
2. Click "Share" → "Embed a map"
3. Copy the iframe code
4. Uncomment and paste:

```tsx
<iframe
  src="YOUR_GOOGLE_MAPS_EMBED_URL"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
/>
```

---

## 🔧 Advanced Customization

### Add New Section

1. **Create Component:**
```bash
src/components/YourSection.tsx
```

2. **Import in Home:**
```typescript
// src/pages/Home.tsx
import YourSection from '../components/YourSection'

function Home() {
  return (
    <div>
      {/* Other sections... */}
      <YourSection />
    </div>
  )
}
```

3. **Add to Navbar:**
```typescript
// src/components/Navbar.tsx
{ name: 'Your Section', href: '#your-section' }
```

### Modify Animations

**Scroll Animations:**
```tsx
import ScrollReveal from '../components/ScrollReveal'

<ScrollReveal direction="up" delay={0.3}>
  <YourContent />
</ScrollReveal>
```

**Directions:** `up`, `down`, `left`, `right`

### Change Splash Screen Duration

**File:** `src/App.tsx`

```typescript
// Around line 30
setTimeout(() => {
  setIsLoading(false)
}, 2000)  // ← Change this (milliseconds)
```

---

## 📦 Build for Production

### Build Command
```bash
npm run build
```

Output will be in `dist/` folder.

### Preview Production Build
```bash
npm run preview
```

### Deploy

**Popular Options:**

1. **Vercel** (Easiest)
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Netlify**
   - Drag & drop `dist/` folder to Netlify

3. **GitHub Pages**
   - Push `dist/` folder to `gh-pages` branch

4. **Your Server**
   - Upload `dist/` folder
   - Configure web server (Nginx, Apache)

---

## 🐛 Common Issues

### Port 5173 Already in Use
```bash
# Kill the process or use different port
npm run dev -- --port 3000
```

### Build Errors
```bash
# Clear cache and rebuild
rm -rf node_modules
rm package-lock.json
npm install
npm run build
```

### Images Not Loading
- Check file paths are correct
- Ensure images are in `public/` folder
- Use `/path/to/image.jpg` not `./path/to/image.jpg`

### Dark Mode Not Working
- Check `tailwind.config.js` has `darkMode: 'class'`
- Ensure `ThemeProvider` wraps app in `App.tsx`

---

## 📚 Need Help?

### Documentation
- **COMPONENTS_GUIDE.md** - Component details
- **FINISHING_TOUCHES.md** - Feature explanations
- **PROJECT_SUMMARY.md** - Complete overview

### Resources
- [React Docs](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [TypeScript](https://www.typescriptlang.org/)

---

## ✅ Checklist: Before Going Live

- [ ] Update all team member information
- [ ] Add team photos
- [ ] Update contact information
- [ ] Add real publications
- [ ] Update project details
- [ ] Add recent news items
- [ ] Connect contact form to backend
- [ ] Add Google Maps
- [ ] Update social media links
- [ ] Replace favicon with your logo
- [ ] Test on mobile devices
- [ ] Test dark mode
- [ ] Test all forms and links
- [ ] Run production build
- [ ] Test production build locally
- [ ] Deploy to hosting

---

## 🎉 You're Ready!

Your DRISHTI Lab website is now set up and ready to customize. Take it step by step, and refer to the documentation files for detailed information.

**Happy Coding! 🚀**

---

**Questions?** Check the documentation files or the inline code comments.
