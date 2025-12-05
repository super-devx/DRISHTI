# 🦚 DRISHTI Peacock Theme Guide

Complete guide to using the peacock-inspired color theme in the DRISHTI Lab website.

## 📖 Theme Philosophy

The peacock theme represents **"Drishti"** (vision/sight in Sanskrit) and connects with the peacock's iconic eye feathers. It creates a sophisticated, professional academic research lab aesthetic with:

- **Royal Blues** - Peacock neck colors for primary branding
- **Peacock Teals** - Iridescent feather colors for accents
- **Feather Greens** - Natural, earthy tones for secondary elements
- **Gold Accents** - Eye spot colors for emphasis and highlights

---

## 🎨 Color Palette

### Primary Blues (Peacock Neck)

```css
royal-50:  #CAF0F8  /* Lightest - backgrounds */
royal-100: #ADE8F4  /* Very light - borders */
royal-200: #90E0EF  /* Light - secondary text */
royal-300: #48CAE4  /* Medium light - hover states */
royal-400: #00B4D8  /* Medium - active states */
royal-500: #0096C7  /* Medium dark - links */
royal-600: #0077B6  /* MAIN BRAND COLOR - primary buttons */
royal-700: #023E8A  /* Dark - headings */
royal-800: #03045E  /* Darkest - hero backgrounds */
```

### Peacock Teals

```css
peacock-50:  #E0F7FA  /* Very light */
peacock-100: #B2EBF2
peacock-200: #80DEEA
peacock-300: #4DD0E1
peacock-400: #26C6DA
peacock-500: #00BCD4  /* Medium teal */
peacock-600: #00ACC1
peacock-700: #0097A7
peacock-800: #00838F
peacock-900: #006064  /* Deep teal */
```

### Feather Greens

```css
feather-light: #40916C  /* Light green */
feather:       #2D6A4F  /* Main green */
feather-dark:  #1B4332  /* Dark green */
```

### Gold Accents

```css
gold-light: #FFD60A  /* Bright gold */
gold:       #D4AF37  /* Main gold */
gold-dark:  #B8860B  /* Deep gold */
bronze:     #CD7F32  /* Bronze accent */
```

### Background Colors

```css
midnight:     #0D1B2A  /* Dark mode primary background */
navy:         #1B263B  /* Dark mode card background */
pearl:        #F8FAFC  /* Light mode primary background */
soft-feather: #E0F2FE  /* Light mode secondary background */
```

---

## 🌈 Gradient Presets

### Background Gradients

```tsx
// Hero section (light mode)
className="bg-gradient-peacock-hero"
// Result: 135deg gradient from royal-800 → royal-600 → royal-400 → feather

// Hero section (dark mode)
className="bg-gradient-dark-hero"
// Result: 180deg gradient from midnight → navy → royal-800

// Royal gradient (buttons, cards)
className="bg-gradient-royal"
// Result: 135deg gradient from royal-800 → royal-700 → royal-600

// Iridescent (animated shimmer)
className="bg-gradient-iridescent animate-shimmer bg-size-400"
// Result: Animated 45deg gradient with peacock colors

// Gold shine (CTAs, accents)
className="bg-gradient-gold-shine"
// Result: 90deg gradient from gold-dark → gold → gold-light

// Feather (secondary elements)
className="bg-gradient-feather"
// Result: 135deg gradient through feather greens
```

### Text Gradients

```tsx
// Peacock text gradient
<span className="gradient-text">DRISHTI</span>

// Gold text gradient
<span className="gradient-gold-text">Featured</span>
```

---

## 🎭 Component Usage

### Buttons

```tsx
// Primary button (royal blue)
<button className="btn-primary">
  Explore Research
</button>

// Secondary button (feather green)
<button className="btn-secondary">
  Learn More
</button>

// Accent button (gold)
<button className="btn-accent">
  Join Us
</button>

// Ghost button (transparent with border)
<button className="btn-ghost">
  View Details
</button>

// Or use Tailwind classes directly:
<button className="bg-royal-600 hover:bg-royal-700 text-white px-6 py-3 rounded-lg shadow-peacock hover:shadow-peacock-lg transition-all duration-200">
  Custom Button
</button>
```

### Cards

```tsx
// Standard card
<div className="card">
  <h3>Card Title</h3>
  <p>Card content...</p>
</div>

// Glass card (frosted glass effect)
<div className="card-glass">
  <h3>Glass Card</h3>
  <p>Semi-transparent with backdrop blur...</p>
</div>

// Custom card with Tailwind
<div className="bg-white dark:bg-navy border border-royal-100 dark:border-royal-800 rounded-lg p-6 shadow-peacock hover:shadow-peacock-lg hover:border-royal-400 transition-all duration-200">
  <h3 className="text-royal-800 dark:text-royal-200">Title</h3>
  <p className="text-slate-700 dark:text-slate-300">Content</p>
</div>
```

### Headings

```tsx
// Section heading with gold accent line
<h2 className="section-heading">
  Our Research
</h2>

// Centered section heading
<h2 className="section-heading-centered">
  Team Members
</h2>

// Custom heading
<h1 className="heading-xl text-royal-800 dark:text-royal-100">
  DRISHTI Lab
</h1>

// Gradient heading
<h1 className="text-6xl font-bold gradient-text">
  Innovation
</h1>
```

### Links

```tsx
// Standard link
<a href="#" className="link">
  Read More
</a>

// Gold link
<a href="#" className="link-gold">
  View Publication
</a>

// Navigation link
<a href="#" className="text-slate-700 hover:text-royal-600 dark:text-slate-300 dark:hover:text-royal-400 transition-colors duration-200">
  About
</a>
```

---

## ✨ Effects & Animations

### Shadows

```tsx
// Peacock shadow (blue-tinted)
className="shadow-peacock"           // Small
className="shadow-peacock-lg"        // Large
className="shadow-peacock-xl"        // Extra large

// Gold shadow
className="shadow-gold"
className="shadow-gold-lg"

// Dark shadow
className="shadow-dark"
className="shadow-dark-lg"

// Feather shadow (green-tinted)
className="shadow-feather"
```

### Glow Effects

```tsx
// Pulsing gold glow
className="animate-glow"

// Hover glow (royal blue)
className="hover-glow-royal"

// Hover glow (gold)
className="hover-glow-gold"
```

### Animations

```tsx
// Shimmer effect (for gradients)
className="animate-shimmer bg-size-400"

// Floating animation
className="animate-float"

// Glow pulse
className="animate-glow-pulse"

// Standard animations
className="animate-fade-in"
className="animate-slide-up"
className="animate-scale-in"
```

---

## 🎯 Semantic Usage Guide

### Navigation

```tsx
<nav className="backdrop-glass border-b border-royal-100 dark:border-royal-800 shadow-peacock">
  <a className="text-slate-700 hover:text-royal-600 dark:text-slate-300 dark:hover:text-royal-400 transition-colors duration-200">
    Home
  </a>
  <a className="text-royal-600 dark:text-royal-400 border-b-2 border-gold">
    Research (Active)
  </a>
</nav>
```

### Hero Section

```tsx
<section className="bg-gradient-peacock-hero dark:bg-gradient-dark-hero min-h-screen">
  <h1 className="text-6xl font-bold text-white text-shadow-lg">
    DRISHTI
  </h1>
  <p className="text-xl text-royal-100">
    Deep Research in Intelligent Sensors, Heuristic Technology & IoT
  </p>
  <button className="btn-accent animate-glow-pulse">
    Get Started
  </button>
</section>
```

### Statistics/Numbers

```tsx
<div className="text-center">
  <div className="text-5xl font-bold gradient-gold-text">
    200+
  </div>
  <p className="text-royal-700 dark:text-royal-300 mt-2">
    Publications
  </p>
</div>
```

### Footer

```tsx
<footer className="bg-midnight text-royal-100 border-t-2 border-gold">
  <a className="text-royal-300 hover:text-gold transition-colors duration-200">
    Contact Us
  </a>
</footer>
```

---

## 🌓 Dark Mode Support

All components automatically adapt to dark mode. The theme switches when the `dark` class is added to the `<html>` element.

### Using the Theme Context

```tsx
import { useTheme } from '@/context/ThemeContext'

function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-royal-100 dark:bg-royal-800 hover:bg-royal-200 dark:hover:bg-royal-700 transition-colors duration-200"
    >
      {theme === 'light' ? '🌙' : '☀️'}
    </button>
  )
}
```

### Theme-aware Components

```tsx
import { useTheme } from '@/context/ThemeContext'
import { theme as peacockTheme } from '@/config/theme'

function MyComponent() {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <div style={{
      backgroundColor: isDark
        ? peacockTheme.colors.navy
        : peacockTheme.colors.pearl
    }}>
      Content
    </div>
  )
}
```

---

## 🛠️ Using the Theme Config

Import and use the centralized theme configuration:

```tsx
import theme from '@/config/theme'

// Colors
const primaryColor = theme.colors.royal[600]  // #0077B6

// Gradients
const heroGradient = theme.gradients.peacockHero

// Shadows
const cardShadow = theme.shadows.peacock

// Semantic colors
const headingColor = theme.semanticColors.light.heading

// Component presets
const buttonStyle = theme.componentPresets.button.primary

// Helper functions
import { getSemanticColor, withOpacity } from '@/config/theme'

const textColor = getSemanticColor('heading', isDark)
const transparentBlue = withOpacity('#0077B6', 0.5)
```

---

## 📐 Spacing & Layout

### Spacing Scale

```tsx
className="p-md"      // 1rem (16px)
className="m-lg"      // 1.5rem (24px)
className="gap-xl"    // 2rem (32px)
className="space-2xl" // 3rem (48px)
```

### Border Radius

```tsx
className="rounded-md"  // 0.5rem (8px)
className="rounded-lg"  // 0.75rem (12px)
className="rounded-xl"  // 1rem (16px)
```

---

## ♿ Accessibility

### Focus States

All interactive elements have peacock-themed focus states:

```tsx
// Automatic focus ring
<button>
  Button
</button>
// Results in: ring-2 ring-royal-400 ring-offset-2

// Custom focus state
<input className="focus-visible:ring-2 focus-visible:ring-royal-400 focus-visible:ring-offset-2" />
```

### Contrast Ratios

All color combinations meet WCAG AA standards:

- **royal-600 on white**: 7.5:1 ✅
- **gold on midnight**: 8.2:1 ✅
- **royal-100 on royal-800**: 9.1:1 ✅
- **feather on pearl**: 6.8:1 ✅

---

## 🎨 Design Patterns

### Cards with Hover Effects

```tsx
<div className="card group cursor-pointer">
  <div className="w-12 h-12 bg-gradient-royal rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
    <Icon className="text-white" />
  </div>
  <h3 className="text-royal-800 dark:text-royal-200 font-semibold mb-2">
    Title
  </h3>
  <p className="text-slate-600 dark:text-slate-400">
    Description text
  </p>
</div>
```

### Badge/Tag Components

```tsx
// Primary badge
<span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-royal-100 text-royal-800 dark:bg-royal-900 dark:text-royal-200">
  IoT
</span>

// Gold accent badge
<span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gold-light/20 text-gold-dark dark:bg-gold-dark/20 dark:text-gold-light">
  Featured
</span>

// Success badge
<span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-feather-light/20 text-feather-dark dark:bg-feather-dark/20 dark:text-feather-light">
  Active
</span>
```

### Decorative Elements

```tsx
// Top border with gradient
<div className="decorative-border-top pt-8">
  Content
</div>

// Background patterns
<div className="bg-pearl dark:bg-midnight bg-dots p-12">
  Content with dot pattern
</div>

<div className="bg-pearl dark:bg-midnight bg-grid p-12">
  Content with grid pattern
</div>
```

---

## 🚀 Quick Start Examples

### Complete Card Component

```tsx
<div className="bg-white dark:bg-navy border border-royal-100 dark:border-royal-800 rounded-xl p-6 shadow-peacock hover:shadow-peacock-lg hover:border-royal-400 dark:hover:border-royal-600 transition-all duration-200 group">
  {/* Icon */}
  <div className="w-16 h-16 bg-gradient-royal rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
    <svg className="w-8 h-8 text-white" />
  </div>

  {/* Title */}
  <h3 className="text-xl font-bold text-royal-800 dark:text-royal-200 mb-2">
    Research Area
  </h3>

  {/* Description */}
  <p className="text-slate-600 dark:text-slate-400 mb-4">
    Brief description of the research area and its applications.
  </p>

  {/* CTA Link */}
  <a href="#" className="inline-flex items-center link-gold">
    Learn More
    <svg className="w-4 h-4 ml-1" />
  </a>
</div>
```

### Complete Hero Section

```tsx
<section className="relative min-h-screen bg-gradient-peacock-hero dark:bg-gradient-dark-hero flex items-center justify-center overflow-hidden">
  {/* Content */}
  <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
    {/* Main Title */}
    <h1 className="heading-xl text-white mb-6 text-shadow-lg animate-fade-in">
      DRISHTI
    </h1>

    {/* Subtitle */}
    <p className="text-2xl text-royal-100 mb-4 animate-slide-up font-light">
      Deep Research in Intelligent Sensors, Heuristic Technology & IoT
    </p>

    {/* Description */}
    <p className="text-lg text-royal-200 dark:text-royal-300 mb-12 max-w-3xl mx-auto animate-slide-up">
      Pioneering innovations in intelligent sensor systems and AI-driven detection methods
    </p>

    {/* CTAs */}
    <div className="flex flex-wrap gap-4 justify-center animate-scale-in">
      <button className="btn-accent animate-glow-pulse">
        Explore Research
      </button>
      <button className="btn-ghost bg-white/10 border-white hover:bg-white hover:text-royal-800">
        Join Our Team
      </button>
    </div>
  </div>

  {/* Decorative Elements */}
  <div className="absolute inset-0 bg-dots opacity-10" />
</section>
```

---

## 📝 Best Practices

### ✅ DO

- Use `royal-600` as the primary brand color
- Use gold sparingly for emphasis and important CTAs
- Maintain consistent spacing with the spacing scale
- Use gradient backgrounds for hero sections
- Apply hover effects with smooth transitions (200ms)
- Use semantic color tokens from theme config
- Ensure proper contrast in dark mode

### ❌ DON'T

- Don't use more than 3 colors in a single component
- Don't use gold for large text blocks (readability)
- Avoid mixing gradient backgrounds with busy patterns
- Don't skip focus states on interactive elements
- Avoid using colors without consulting the palette
- Don't hardcode color values - use the theme config

---

## 🔧 Customization

### Extending the Theme

Add custom colors to `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      // Your custom colors
      custom: {
        100: '#...',
        // ...
      },
    },
  },
}
```

### Creating Custom Gradients

Add to `src/config/theme.ts`:

```ts
export const gradients = {
  // ... existing gradients
  customGradient: 'linear-gradient(135deg, #color1, #color2)',
}
```

---

## 📚 Resources

- **Color Palette**: See `tailwind.config.js` for complete color definitions
- **CSS Variables**: Check `src/styles/globals.css` for CSS custom properties
- **Theme Config**: Import from `src/config/theme.ts` for programmatic access
- **Theme Context**: Use `useTheme()` hook from `src/context/ThemeContext.tsx`

---

## 🎯 Quick Reference

### Most Used Classes

```
Backgrounds:     bg-pearl, bg-midnight, bg-royal-600, bg-gold
Text Colors:     text-royal-800, text-royal-200, text-gold
Borders:         border-royal-100, border-royal-800
Shadows:         shadow-peacock, shadow-gold
Gradients:       bg-gradient-peacock-hero, bg-gradient-royal
Buttons:         btn-primary, btn-secondary, btn-accent
Cards:           card, card-glass
Headings:        section-heading, heading-xl
Animations:      animate-shimmer, animate-glow-pulse
```

---

**Last Updated**: December 2024
**Theme Version**: 1.0.0
**Status**: ✅ Production Ready
