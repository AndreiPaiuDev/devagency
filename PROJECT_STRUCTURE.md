# DevAgency - Project Structure

## Overview
Enterprise-level React application built with Vite, featuring a modular architecture with pages, components, hooks, and utilities.

## Technology Stack
- **React 18.3** - UI library
- **Vite 6.0** - Build tool and dev server
- **React Router 7** - Client-side routing
- **CSS Modules** - Scoped styling
- **Material Symbols** - Icon library

## Folder Structure

```
src/
├── pages/              # Page-level components
│   ├── HomePage.jsx
│   └── ServicesPage.jsx
│
├── components/         # Reusable UI components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── ServicesHero.jsx
│   ├── ServicesGrid.jsx
│   ├── ServiceCard.jsx
│   ├── TechStack.jsx
│   ├── CTA.jsx
│   ├── TrustedBy.jsx
│   └── *.module.css    # Component-scoped styles
│
├── hooks/              # Custom React hooks
│   └── useUI.js        # UI-related hooks (scroll, viewport, media queries)
│
├── utils/              # Utility functions and constants
│   ├── helpers.js      # Helper functions (formatting, validation)
│   └── constants.js    # App-wide constants
│
├── assets/             # Static assets (images, icons)
│
├── App.jsx             # Root component with router setup
├── App.module.css      # App-level styles
├── index.css           # Global styles and CSS variables
└── main.jsx            # Application entry point
```

## Pages

### HomePage (`/`)
Main landing page featuring:
- Hero section with project availability badge
- Feature highlights and CTAs
- Trusted companies section

### ServicesPage (`/servicii`)
Services showcase page with:
- Dark-themed hero section
- Service cards grid (6 services)
- Technology stack display
- CTA section

## Components

### Layout Components
- **Navbar** - Sticky navigation header with routing
- **Hero** - Flexible hero section (supports light/dark themes)
- **TrustedBy** - Company logos section

### Services Components
- **ServicesHero** - Dark-themed hero for services page
- **ServicesGrid** - Grid layout for service cards
- **ServiceCard** - Individual service card with hover effects
- **TechStack** - Technology logos display
- **CTA** - Call-to-action section with gradient card

## Custom Hooks

### useUI.js
- `useScrollPosition()` - Track scroll position
- `useInView(ref, rootMargin)` - Detect element visibility
- `useWindowSize()` - Track window dimensions
- `useMediaQuery(query)` - Media query matching

## Utilities

### helpers.js
- `formatDate(date)` - Romanian date formatting
- `truncateText(text, maxLength)` - Text truncation
- `generateSlug(text)` - Romanian-aware slug generation
- `debounce(func, wait)` - Function debouncing
- `throttle(func, limit)` - Function throttling
- `isValidEmail(email)` - Email validation
- `formatPhoneNumber(phone)` - Romanian phone formatting

### constants.js
- Application name and contact info
- Social media links
- Route definitions
- Breakpoints and animation durations

## Styling System

### CSS Variables (index.css)
```css
--accent: #0da6f2       /* Primary brand color */
--ink: #111827          /* Dark text */
--muted: #64748b        /* Secondary text */
--card: #ffffff         /* Card background */
--font-display: Space Grotesk
--font-body: Noto Sans
```

### CSS Modules
Each component has its own `.module.css` file for scoped styling:
- BEM-like naming convention
- Responsive breakpoints
- Dark/light theme support
- Hover animations and transitions

## Routing

Routes defined in `App.jsx` using React Router:
- `/` - HomePage
- `/servicii` - ServicesPage
- Future routes: `/portofoliu`, `/despre-noi`, `/blog`, `/contact`

## Development

### Running the App
```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run preview      # Preview production build
```

### Adding New Pages
1. Create page component in `src/pages/`
2. Import and add route in `App.jsx`
3. Update navigation links in `Navbar.jsx`
4. Add route constant in `utils/constants.js`

### Adding New Components
1. Create component file in `src/components/`
2. Create companion `.module.css` file
3. Import and use in parent components
4. Follow existing naming conventions

## Performance Optimizations
- Lazy loading for routes (can be implemented)
- CSS Modules for minimal CSS bundle
- Material Symbols for lightweight icons
- Vite for fast HMR and optimized builds

## Accessibility
- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus management
- Alt text for images (Material Symbols for icons)

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES2020+ features
- CSS Grid and Flexbox
- CSS Custom Properties

## Future Enhancements
- [ ] Add Portfolio page
- [ ] Add About page
- [ ] Add Blog with MDX support
- [ ] Add Contact form with validation
- [ ] Implement lazy loading for routes
- [ ] Add loading states and skeletons
- [ ] Add error boundary components
- [ ] Implement dark mode toggle
- [ ] Add animations with Framer Motion
- [ ] SEO optimization with React Helmet
- [ ] Analytics integration
