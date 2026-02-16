<div align="center">

# 📐 DevAgency - Project Structure Documentation

**Comprehensive Technical Architecture and Implementation Guide**

Version 1.0 | Last Updated: February 16, 2026

</div>

---

## 📋 Table of Contents

1. [Overview](#-overview)
2. [Technology Stack](#-technology-stack)
3. [Directory Structure](#-directory-structure)
4. [Core Architecture](#-core-architecture)
5. [Components Guide](#-components-guide)
6. [Hooks Documentation](#-hooks-documentation)
7. [Utilities Reference](#-utilities-reference)
8. [Styling System](#-styling-system)
9. [Routing Configuration](#-routing-configuration)
10. [State Management](#-state-management)
11. [Development Guidelines](#-development-guidelines)
12. [Performance Optimization](#-performance-optimization)

---

## 🎯 Overview

DevAgency follows an enterprise-grade architecture designed for scalability, maintainability, and performance. The project implements modern React best practices with a clear separation of concerns, modular component design, and comprehensive utility infrastructure.

### **Core Principles**

- **Modularity**: Components are self-contained and reusable
- **Separation of Concerns**: Clear boundaries between UI, logic, and data
- **DRY (Don't Repeat Yourself)**: Shared logic in hooks and utilities
- **Progressive Enhancement**: Mobile-first, responsive design
- **Accessibility First**: WCAG 2.1 AA compliance
- **Performance Focused**: Optimized bundles and lazy loading

---

## 🛠️ Technology Stack

### **Production Dependencies**

```json
{
  "react": "19.2.0",              // UI library with modern features
  "react-dom": "19.2.0",          // React rendering for web
  "react-router-dom": "7.13.0"    // Client-side routing with data loading
}
```

### **Development Dependencies**

```json
{
  "vite": "7.3.1",                      // Build tool and dev server
  "@vitejs/plugin-react": "5.1.1",     // Fast Refresh for React
  "eslint": "9.39.1",                  // Code linting
  "eslint-plugin-react-hooks": "7.0.1" // React hooks linting rules
}
```

### **External Services**

- **Web3Forms**: Contact form email delivery (serverless)
- **Google Fonts**: Typography (Space Grotesk, Noto Sans)
- **Material Symbols**: Icon library (self-hosted or CDN)

---

## 📁 Directory Structure

```
devagency/
│
├── public/                          # Static assets (served as-is)
│   └── favicon files
│
├── src/                             # Source code
│   │
│   ├── assets/                      # Images, icons, static resources
│   │   └── (future image assets)
│   │
│   ├── components/                  # Reusable UI components
│   │   ├── ContactForm.jsx          # Contact form with validation
│   │   ├── ContactForm.module.css
│   │   ├── ContactHero.jsx          # Contact page hero section
│   │   ├── ContactHero.module.css
│   │   ├── CTA.jsx                  # Call-to-action component
│   │   ├── CTA.module.css
│   │   ├── FeatureGrid.jsx          # Features grid layout
│   │   ├── FeatureGrid.module.css
│   │   ├── Footer.jsx               # Site footer with links
│   │   ├── Footer.module.css
│   │   ├── Hero.jsx                 # Homepage hero section
│   │   ├── Hero.module.css
│   │   ├── LegalModal.module.css    # Legal content styling
│   │   ├── Modal.jsx                # Reusable modal component
│   │   ├── Modal.module.css
│   │   ├── Navbar.jsx               # Navigation header
│   │   ├── Navbar.module.css
│   │   ├── PortfolioCTA.jsx         # Portfolio call-to-action
│   │   ├── PortfolioCTA.module.css
│   │   ├── PortfolioGrid.jsx        # Portfolio projects grid
│   │   ├── PortfolioGrid.module.css
│   │   ├── PortfolioHero.jsx        # Portfolio hero section
│   │   ├── PortfolioHero.module.css
│   │   ├── PortfolioPreview.jsx     # Homepage portfolio preview
│   │   ├── PortfolioPreview.module.css
│   │   ├── PrivacyPolicy.jsx        # GDPR privacy policy
│   │   ├── ProcessSteps.jsx         # Development process steps
│   │   ├── ProcessSteps.module.css
│   │   ├── ProjectCard.jsx          # Individual project card
│   │   ├── ProjectCard.module.css
│   │   ├── ServiceCard.jsx          # Service offering card
│   │   ├── ServiceCard.module.css
│   │   ├── ServicesGrid.jsx         # Services grid layout
│   │   ├── ServicesGrid.module.css
│   │   ├── ServicesHero.jsx         # Services page hero
│   │   ├── ServicesHero.module.css
│   │   ├── ServicesPreview.jsx      # Homepage services preview
│   │   ├── ServicesPreview.module.css
│   │   ├── Stats.jsx                # Statistics section
│   │   ├── Stats.module.css
│   │   ├── TechStack.jsx            # Technology stack display
│   │   ├── TechStack.module.css
│   │   ├── TermsAndConditions.jsx   # Legal terms of service
│   │   ├── TestimonialCard.jsx      # Client testimonial card
│   │   ├── TestimonialCard.module.css
│   │   ├── TestimonialsSection.jsx  # Testimonials section
│   │   ├── TestimonialsSection.module.css
│   │   ├── TrustedBy.jsx            # Client logos section
│   │   ├── TrustedBy.module.css
│   │   ├── WhyUsCTA.jsx             # Why Us call-to-action
│   │   ├── WhyUsCTA.module.css
│   │   ├── WhyUsFeatures.jsx        # Why Us features grid
│   │   ├── WhyUsFeatures.module.css
│   │   ├── WhyUsHero.jsx            # Why Us hero section
│   │   └── WhyUsHero.module.css
│   │
│   ├── hooks/                       # Custom React hooks
│   │   └── useUI.js                 # UI-related hooks (scroll, viewport, etc.)
│   │
│   ├── pages/                       # Route-level page components
│   │   ├── ContactPage.jsx          # /contact route
│   │   ├── FAQPage.jsx              # /faq route
│   │   ├── FAQPage.module.css
│   │   ├── HomePage.jsx             # / route (landing page)
│   │   ├── PortfolioPage.jsx        # /portofoliu route
│   │   ├── ServicesPage.jsx         # /servicii route
│   │   └── WhyUsPage.jsx            # /de-ce-noi route
│   │
│   ├── utils/                       # Utility functions and constants
│   │   ├── constants.js             # App-wide constants
│   │   └── helpers.js               # Helper functions
│   │
│   ├── App.jsx                      # Root application component
│   ├── App.module.css               # App-level styling
│   ├── index.css                    # Global styles and CSS variables
│   └── main.jsx                     # Application entry point
│
├── .env                             # Environment variables (gitignored)
├── .env.example                     # Environment template
├── .gitignore                       # Git ignore rules
├── eslint.config.js                 # ESLint configuration
├── index.html                       # HTML entry point
├── package.json                     # Project metadata and dependencies
├── vite.config.js                   # Vite configuration
├── README.md                        # Project documentation
├── PROJECT_STRUCTURE.md             # This file
└── WEB3FORMS_SETUP.md              # Web3Forms integration guide

```

---

## 🏛️ Core Architecture

### **Application Entry Flow**

```
index.html
    │
    ├─> main.jsx (React DOM render)
    │       │
    │       └─> App.jsx (Router setup)
    │               │
    │               ├─> Navbar (persistent)
    │               │
    │               ├─> Routes
    │               │   ├─> HomePage
    │               │   ├─> ServicesPage
    │               │   ├─> PortfolioPage
    │               │   ├─> ContactPage
    │               │   ├─> FAQPage
    │               │   └─> WhyUsPage
    │               │
    │               └─> Footer (persistent)
    │
    └─> index.css (Global styles)
```

### **Component Hierarchy**

```
Page Component
├── Hero Section (page-specific)
├── Content Sections
│   ├── Feature/Service/Project Cards
│   ├── Statistics/Testimonials
│   └── Process Steps
└── CTA Section (call-to-action)
```

### **Data Flow**

1. **Props Down**: Parent passes data to children
2. **Events Up**: Children communicate via callbacks
3. **Context (if needed)**: Shared state across tree
4. **URL State**: Route parameters for navigation

---

## 📦 Components Guide

### **Layout Components**

#### **Navbar** (`components/Navbar.jsx`)
Sticky navigation header with mobile hamburger menu.

**Features:**
- Responsive mobile menu
- Active route highlighting
- Smooth scroll behavior
- Logo and navigation links

**Props:** None (uses React Router)

**Usage:**
```jsx
<Navbar />
```

---

#### **Footer** (`components/Footer.jsx`)
Site footer with navigation, contact info, and legal links.

**Features:**
- Multi-column layout
- Social media links
- Legal modals (Terms & Privacy Policy)
- Responsive grid

**Props:** None

**Usage:**
```jsx
<Footer />
```

---

#### **Modal** (`components/Modal.jsx`)
Reusable modal dialog for displaying content overlays.

**Props:**
- `isOpen` (boolean): Controls visibility
- `onClose` (function): Close handler
- `title` (string): Modal header title
- `children` (ReactNode): Modal content

**Features:**
- ESC key to close
- Click outside to close
- Scroll lock on body
- Smooth animations

**Usage:**
```jsx
<Modal 
  isOpen={isModalOpen} 
  onClose={() => setIsModalOpen(false)}
  title="Modal Title"
>
  <p>Modal content here</p>
</Modal>
```

---

### **Hero Sections**

#### **Hero** (`components/Hero.jsx`)
Main homepage hero section.

**Features:**
- Availability badge
- Large heading with gradient text
- CTA buttons
- Background effects

---

#### **ServicesHero** (`components/ServicesHero.jsx`)
Services page hero with dark theme.

**Features:**
- Dark background
- Service highlights
- Icon-based features

---

#### **ContactHero** (`components/ContactHero.jsx`)
Contact page hero with benefits and contact cards.

**Features:**
- Benefits cards
- Direct contact information
- Mailto and tel links

---

#### **PortfolioHero** (`components/PortfolioHero.jsx`)
Portfolio page hero section.

---

#### **WhyUsHero** (`components/WhyUsHero.jsx`)
Why Us page hero section.

---

### **Content Components**

#### **ServiceCard** (`components/ServiceCard.jsx`)
Individual service offering card.

**Props:**
- `icon` (string): Material Symbol icon name
- `title` (string): Service name
- `description` (string): Service description

**Usage:**
```jsx
<ServiceCard 
  icon="code" 
  title="Web Development" 
  description="..." 
/>
```

---

#### **ProjectCard** (`components/ProjectCard.jsx`)
Portfolio project card with image and details.

**Props:**
- `title` (string): Project name
- `description` (string): Project description
- `image` (string): Project screenshot URL
- `tags` (array): Technology tags
- `link` (string): Project URL

---

#### **TestimonialCard** (`components/TestimonialCard.jsx`)
Client testimonial card.

**Props:**
- `name` (string): Client name
- `role` (string): Client position
- `company` (string): Company name
- `content` (string): Testimonial text
- `rating` (number): Star rating

---

#### **FeatureGrid** (`components/FeatureGrid.jsx`)
Grid layout for features or benefits.

---

#### **ServicesGrid** (`components/ServicesGrid.jsx`)
Grid layout for service cards.

---

#### **PortfolioGrid** (`components/PortfolioGrid.jsx`)
Grid layout for portfolio projects.

---

#### **Stats** (`components/Stats.jsx`)
Statistics section with numbers and labels.

**Features:**
- Animated counters
- Responsive grid
- Icon support

---

#### **ProcessSteps** (`components/ProcessStep.jsx`)
Development process visualization.

**Features:**
- Numbered steps
- Icons for each step
- Vertical/horizontal layout

---

#### **TechStack** (`components/TechStack.jsx`)
Technology stack logo display.

**Features:**
- Company/technology logos
- Grayscale hover effect
- Responsive grid

---

### **Interactive Components**

#### **ContactForm** (`components/ContactForm.jsx`)
Contact form with validation and Web3Forms integration.

**Features:**
- Field validation
- Error messages
- Success/error states
- Web3Forms API integration
- Privacy policy link

**Environment Variables:**
- `VITE_WEB3FORMS_ACCESS_KEY`

**Validation Rules:**
- Name: Required
- Email: Required, valid format
- Project Type: Required selection
- Message: Required, minimum 10 characters

---

#### **CTA** (`components/CTA.jsx`)
Call-to-action section with button.

**Props:**
- `title` (string): CTA heading
- `description` (string): CTA text
- `buttonText` (string): Button label
- `buttonLink` (string): Button URL

---

### **Legal Components**

#### **TermsAndConditions** (`components/TermsAndConditions.jsx`)
Complete terms of service compliant with Romanian law.

**Compliance:**
- Codul Civil român
- Legea 365/2002 (comerț electronic)
- Legea 8/1996 (drepturi de autor)
- Codul Fiscal (TVA, facturare)
- OUG 34/2014 (drepturi consumatori)

---

#### **PrivacyPolicy** (`components/PrivacyPolicy.jsx`)
GDPR-compliant privacy policy.

**Compliance:**
- Regulamentul (UE) 2016/679 (GDPR)
- Legea 190/2018
- Legea 677/2001
- ANSPDCP guidelines

**Covers:**
- Data collection and processing
- User rights (access, rectification, erasure)
- Cookie policy
- Data retention periods
- Contact information

---

## 🎣 Hooks Documentation

### **useUI.js** (`hooks/useUI.js`)

Custom hooks for UI interactions and responsive design.

#### **useScrollPosition()**

Track window scroll position.

**Returns:** `number` - Current Y scroll position

**Usage:**
```jsx
const scrollY = useScrollPosition()

useEffect(() => {
  if (scrollY > 100) {
    // User has scrolled down
  }
}, [scrollY])
```

---

#### **useInView(ref, rootMargin)**

Detect when element enters viewport using Intersection Observer.

**Parameters:**
- `ref` (React.RefObject): Element ref
- `rootMargin` (string, optional): Margin offset (default: '0px')

**Returns:** `boolean` - Whether element is in viewport

**Usage:**
```jsx
const ref = useRef(null)
const isInView = useInView(ref, '100px')

return <div ref={ref} className={isInView ? 'visible' : 'hidden'} />
```

---

#### **useWindowSize()**

Track window dimensions with resize listener.

**Returns:** `{ width: number, height: number }`

**Usage:**
```jsx
const { width, height } = useWindowSize()

if (width < 768) {
  // Mobile view
}
```

---

#### **useMediaQuery(query)**

Match CSS media queries in JavaScript.

**Parameters:**
- `query` (string): CSS media query string

**Returns:** `boolean` - Whether query matches

**Usage:**
```jsx
const isMobile = useMediaQuery('(max-width: 768px)')
const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1024px)')
const isDark = useMediaQuery('(prefers-color-scheme: dark)')

return isMobile ? <MobileView /> : <DesktopView />
```

---

## 🛠️ Utilities Reference

### **helpers.js** (`utils/helpers.js`)

Utility functions for common operations.

#### **formatDate(date)**

Format date to Romanian locale.

**Parameters:** `date` (Date)

**Returns:** `string` - "15 februarie 2026"

**Example:**
```javascript
formatDate(new Date()) // "16 februarie 2026"
```

---

#### **truncateText(text, maxLength)**

Truncate text with ellipsis.

**Parameters:**
- `text` (string): Text to truncate
- `maxLength` (number): Maximum length

**Returns:** `string`

**Example:**
```javascript
truncateText("Long text here", 10) // "Long te..."
```

---

#### **generateSlug(text)**

Generate URL-safe slug from Romanian text.

**Parameters:** `text` (string)

**Returns:** `string` - "despre-noi"

**Features:**
- Handles Romanian diacritics (ă, â, î, ș, ț)
- Converts to lowercase
- Replaces spaces with hyphens
- Removes special characters

**Example:**
```javascript
generateSlug("Despre Noi Șî România") // "despre-noi-si-romania"
```

---

#### **debounce(func, wait)**

Debounce function execution.

**Parameters:**
- `func` (function): Function to debounce
- `wait` (number): Delay in milliseconds

**Returns:** `function` - Debounced function

**Usage:**
```javascript
const handleSearch = debounce((query) => {
  // API call
}, 300)

<input onChange={(e) => handleSearch(e.target.value)} />
```

---

#### **throttle(func, limit)**

Throttle function execution.

**Parameters:**
- `func` (function): Function to throttle
- `limit` (number): Minimum interval in milliseconds

**Returns:** `function` - Throttled function

**Usage:**
```javascript
const handleScroll = throttle(() => {
  // Scroll handler
}, 100)

window.addEventListener('scroll', handleScroll)
```

---

#### **isValidEmail(email)**

Validate email format.

**Parameters:** `email` (string)

**Returns:** `boolean`

**Example:**
```javascript
isValidEmail("test@example.com") // true
isValidEmail("invalid-email") // false
```

---

#### **formatPhoneNumber(phone)**

Format Romanian phone number.

**Parameters:** `phone` (string)

**Returns:** `string` - "+40 712 345 678"

**Example:**
```javascript
formatPhoneNumber("0712345678") // "+40 712 345 678"
formatPhoneNumber("+40712345678") // "+40 712 345 678"
```

---

### **constants.js** (`utils/constants.js`)

Application-wide constants.

```javascript
export const APP_NAME = 'DevAgency'

export const CONTACT_INFO = {
  email: 'andreipaiudev@gmail.com',
  phone: '+44 7367 438 601',
}

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/company/devagency',
  github: 'https://github.com/devagency',
  twitter: 'https://twitter.com/devagency',
}

export const ROUTES = {
  HOME: '/',
  SERVICES: '/servicii',
  PORTFOLIO: '/portofoliu',
  WHY_US: '/de-ce-noi',
  FAQ: '/faq',
  CONTACT: '/contact',
}

export const BREAKPOINTS = {
  mobile: 0,
  tablet: 768,
  desktop: 1024,
  wide: 1280,
}

export const ANIMATION_DURATION = {
  fast: 200,
  normal: 300,
  slow: 500,
}
```

---

## 🎨 Styling System

### **Global Styles** (`index.css`)

#### **CSS Custom Properties**

```css
:root {
  /* Colors */
  --accent: #0da6f2;
  --accent-hover: #38bdf8;
  --dark-bg: #101d23;
  --dark-secondary: #0c1618;
  --border: #315668;
  --text-primary: #0f172a;
  --text-secondary: #64748b;
  --text-light: #90b7cb;
  --bg-light: #f8fafc;
  --bg-white: #ffffff;

  /* Typography */
  --font-display: 'Space Grotesk', sans-serif;
  --font-body: 'Noto Sans', sans-serif;

  /* Spacing */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 64px;

  /* Transitions */
  --transition-fast: 200ms;
  --transition-normal: 300ms;
  --transition-slow: 500ms;
}
```

---

### **CSS Modules Naming Convention**

Each component follows a consistent naming pattern:

```css
/* Component root */
.component { }

/* Elements */
.componentHeader { }
.componentBody { }
.componentFooter { }

/* Modifiers */
.componentLarge { }
.componentDark { }

/* States */
.componentActive { }
.componentDisabled { }
```

---

### **Responsive Breakpoints**

```css
/* Mobile First Approach */

/* Default: Mobile (0px+) */
.component {
  padding: 16px;
}

/* Tablet (768px+) */
@media (min-width: 768px) {
  .component {
    padding: 24px;
  }
}

/* Desktop (1024px+) */
@media (min-width: 1024px) {
  .component {
    padding: 32px;
  }
}

/* Wide (1280px+) */
@media (min-width: 1280px) {
  .component {
    padding: 48px;
  }
}
```

---

## 🗺️ Routing Configuration

### **Routes** (`App.jsx`)

```jsx
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/servicii" element={<ServicesPage />} />
  <Route path="/portofoliu" element={<PortfolioPage />} />
  <Route path="/de-ce-noi" element={<WhyUsPage />} />
  <Route path="/faq" element={<FAQPage />} />
  <Route path="/contact" element={<ContactPage />} />
</Routes>
```

### **Adding New Routes**

1. Create page component in `src/pages/NewPage.jsx`
2. Import in `App.jsx`
3. Add route: `<Route path="/new-page" element={<NewPage />} />`
4. Add to navigation in `Navbar.jsx`
5. Add constant in `utils/constants.js`

---

## 🔄 State Management

### **Local State**
- `useState` for component-specific state
- Form inputs, UI toggles, modal visibility

### **URL State**
- React Router for navigation
- Route parameters for dynamic content
- Search params for filters

### **Environment Variables**
- Vite `.env` files for configuration
- Prefixed with `VITE_` for client-side access

**Example:**
```env
VITE_WEB3FORMS_ACCESS_KEY=your_key
```

**Usage:**
```javascript
const apiKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
```

---

## 📝 Development Guidelines

### **Component Creation Checklist**

- [ ] Create `.jsx` component file
- [ ] Create `.module.css` stylesheet
- [ ] Add PropTypes or TypeScript types
- [ ] Write JSDoc comments
- [ ] Implement responsive design
- [ ] Add accessibility attributes
- [ ] Test on multiple devices
- [ ] Optimize performance

### **Code Style**

**File Naming:**
- Components: `PascalCase.jsx`
- Hooks: `useCamelCase.js`
- Utilities: `camelCase.js`
- Styles: `Component.module.css`

**Component Structure:**
```jsx
import React from 'react'
import styles from './Component.module.css'

/**
 * Component description
 * @param {Object} props - Component props
 * @param {string} props.title - Title text
 */
function Component({ title }) {
  // Hooks
  const [state, setState] = useState(null)
  
  // Handlers
  const handleClick = () => { }
  
  // Effects
  useEffect(() => { }, [])
  
  // Render
  return (
    <div className={styles.component}>
      <h2>{title}</h2>
    </div>
  )
}

export default Component
```

### **Best Practices**

✅ **Do:**
- Use functional components with hooks
- Keep components small and focused
- Extract reusable logic into custom hooks
- Use CSS Modules for styling
- Write descriptive prop names
- Add comments for complex logic
- Test on mobile devices
- Optimize images and assets

❌ **Don't:**
- Use inline styles (except for dynamic values)
- Create deeply nested components
- Inline complex logic in JSX
- Forget accessibility attributes
- Ignore console warnings
- Commit `.env` files
- Skip responsive testing

---

## ⚡ Performance Optimization

### **Build Optimization**

```bash
# Analyze bundle size
npm run build
```

**Vite automatically:**
- Tree-shakes unused code
- Minifies JavaScript and CSS
- Optimizes assets
- Generates source maps

### **Code Splitting**

Implement lazy loading for routes:

```jsx
import { lazy, Suspense } from 'react'

const HomePage = lazy(() => import('./pages/HomePage'))

<Suspense fallback={<Loading />}>
  <Routes>
    <Route path="/" element={<HomePage />} />
  </Routes>
</Suspense>
```

### **Image Optimization**

- Use WebP format
- Lazy load below-the-fold images
- Provide width/height attributes
- Use responsive images with srcset

### **CSS Optimization**

- CSS Modules prevent global scope pollution
- Vite automatically removes unused CSS
- Use shorthand properties
- Minimize animation complexity

---

## 📚 Additional Resources

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [React Router Documentation](https://reactrouter.com/)
- [CSS Modules Documentation](https://github.com/css-modules/css-modules)
- [Material Symbols](https://fonts.google.com/icons)
- [Web3Forms API](https://web3forms.com/docs)

---

## 🔄 Version History

- **v1.0** (February 16, 2026) - Initial enterprise documentation

---

<div align="center">

**Built with ❤️ by DevAgency**

For questions or support, contact: [andreipaiudev@gmail.com](mailto:andreipaiudev@gmail.com)

</div>
