# DevAgency - Web & SaaS Development

Modern, enterprise-level React application showcasing web development services. Built with React, Vite, and CSS Modules.

## 🚀 Features

- **Multi-page routing** with React Router
- **Responsive design** - Mobile-first approach
- **Dark/Light themes** - Flexible hero sections
- **CSS Modules** - Scoped, maintainable styling
- **Material Symbols** - Lightweight icon system
- **Enterprise structure** - Pages, hooks, utilities
- **Performance optimized** - Fast Vite builds & HMR

## 📦 Tech Stack

- **React 18.3** - Modern React with hooks
- **Vite 6.0** - Lightning-fast build tool
- **React Router 7** - Client-side navigation
- **CSS Modules** - Component-scoped styles
- **Material Symbols** - Google's icon font
- **Space Grotesk** - Display typography
- **Noto Sans** - Body text font

## 🏗️ Project Structure

```
src/
├── pages/          # Route-level pages
├── components/     # Reusable UI components
├── hooks/          # Custom React hooks
├── utils/          # Helper functions & constants
└── assets/         # Images, icons, static files
```

See [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) for detailed documentation.

## 🛠️ Development

### Prerequisites
- Node.js 18+ and npm/yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:5174
```

### Available Scripts

```bash
npm run dev      # Start dev server with HMR
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 📄 Pages

- **[Home](/)** - Main landing page with hero and trusted companies
- **[Servicii](/servicii)** - Services showcase with dark theme
- More pages coming soon (Portfolio, About, Blog, Contact)

## 🎨 Design System

### Colors
- **Primary**: `#0da6f2` - Vibrant blue
- **Dark BG**: `#101d23` - Deep navy
- **Text Muted**: `#64748b` / `#90b7cb` - Gray tones

### Typography
- **Display**: Space Grotesk (300-700)
- **Body**: Noto Sans (400-700)

### Breakpoints
- Mobile: < 640px
- Tablet: 768px
- Desktop: 1024px
- Wide: 1280px+

## 🧩 Custom Hooks

```javascript
import { useScrollPosition, useInView, useWindowSize, useMediaQuery } from './hooks/useUI'

// Track scroll position
const scrollY = useScrollPosition()

// Detect element visibility
const isVisible = useInView(ref, '100px')

// Get window dimensions
const { width, height } = useWindowSize()

// Media query matching
const isMobile = useMediaQuery('(max-width: 768px)')
```

## 🛠️ Utilities

```javascript
import { formatDate, generateSlug, isValidEmail } from './utils/helpers'
import { ROUTES, CONTACT_INFO } from './utils/constants'

// Format Romanian date
formatDate(new Date()) // "15 februarie 2026"

// Generate URL-safe slug
generateSlug('Despre Noi') // "despre-noi"

// Validate email
isValidEmail('test@example.com') // true
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

Output in `dist/` folder ready for deployment to:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting provider

### Environment Variables

Create `.env` file for environment-specific config:

```env
VITE_API_URL=https://api.devagency.ro
VITE_CONTACT_EMAIL=contact@devagency.ro
```

## 📝 Adding New Features

### Add a New Page

1. Create component in `src/pages/NewPage.jsx`
2. Add route in `src/App.jsx`:
   ```javascript
   <Route path="/new-page" element={<NewPage />} />
   ```
3. Add link in navigation

### Add a New Component

1. Create `src/components/NewComponent.jsx`
2. Create `src/components/NewComponent.module.css`
3. Import and use:
   ```javascript
   import NewComponent from './components/NewComponent'
   ```

## 🎯 Roadmap

- [ ] Portfolio page with project showcase
- [ ] About page with team info
- [ ] Blog with MDX support
- [ ] Contact form with validation
- [ ] Dark mode toggle
- [ ] Animations with Framer Motion
- [ ] SEO optimization
- [ ] Analytics integration
- [ ] i18n support (RO/EN)

## 📄 License

MIT License - feel free to use for your own projects!

## 🤝 Contributing

Contributions welcome! Please open an issue or submit a PR.

---

Built with ❤️ using React + Vite
