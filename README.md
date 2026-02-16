<div align="center">

# 🚀 DevAgency - Enterprise Web Development Platform

[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.3.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![React Router](https://img.shields.io/badge/React_Router-7.13.0-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

**A modern, scalable, and fully responsive web application showcasing professional web development services with enterprise-grade architecture and best practices.**

[Live Demo](#) • [Documentation](PROJECT_STRUCTURE.md) • [Report Bug](#) • [Request Feature](#)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Technology Stack](#-technology-stack)
- [Architecture](#-architecture)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Development](#-development)
- [Deployment](#-deployment)
- [Best Practices](#-best-practices)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🎯 Overview

DevAgency is a production-ready, enterprise-level single-page application (SPA) built with modern web technologies. The platform showcases a professional web development agency's services, portfolio, and contact information while demonstrating industry best practices in frontend development.

### Key Objectives

- ✅ **Performance First**: Achieve optimal load times and smooth user experience
- ✅ **Scalable Architecture**: Modular component structure for easy maintenance and growth
- ✅ **Type Safety**: ESLint configuration for code quality and consistency
- ✅ **Accessibility**: WCAG 2.1 compliant for inclusive user experience
- ✅ **SEO Optimized**: Meta tags and semantic HTML for better discoverability
- ✅ **Mobile Responsive**: Fluid layouts across all device sizes

---

## ✨ Key Features

### 🎨 **Modern UI/UX Design**
- Clean, professional interface with smooth animations
- Dark and light theme support
- Glassmorphism effects and gradient accents
- Mobile-first responsive design (320px - 4K)

### 🏗️ **Enterprise Architecture**
- **Component-Based**: Reusable, isolated components
- **Custom Hooks**: Shared logic for scroll, viewport detection, and window sizing
- **Utility Functions**: Centralized helpers for formatting, validation, and data manipulation
- **CSS Modules**: Scoped styling preventing style conflicts

### ⚡ **Performance Optimized**
- **Vite Build Tool**: Lightning-fast HMR and optimized builds
- **Code Splitting**: Lazy loading for improved initial load times
- **Optimized Assets**: Compressed images and minified bundles
- **Bundle Analysis**: Tree-shaking for minimal bundle size

### 🔒 **Security & Compliance**
- **GDPR Compliant**: Privacy policy and terms of service modals
- **Content Security**: Secure form handling with validation
- **Romanian Legal Framework**: Compliant with local regulations (ANSPDCP)

### 📧 **Contact Management**
- **Web3Forms Integration**: Email delivery without backend
- **Form Validation**: Client-side validation with user-friendly error messages
- **Success/Error States**: Clear feedback for user actions
- **Privacy Awareness**: GDPR consent integration

---

## 🛠️ Technology Stack

### **Frontend Core**
| Technology | Version | Purpose |
|-----------|---------|---------|
| React | 19.2.0 | UI library with hooks and concurrent features |
| React DOM | 19.2.0 | DOM rendering optimizations |
| React Router | 7.13.0 | Client-side routing with data loading |
| Vite | 7.3.1 | Next-generation frontend tooling |

### **Development Tools**
| Tool | Version | Purpose |
|------|---------|---------|
| ESLint | 9.39.1 | Code linting and quality enforcement |
| @vitejs/plugin-react | 5.1.1 | React Fast Refresh for Vite |
| PostCSS | Built-in | CSS transformations |

### **Additional Libraries**
- **Material Symbols**: Google's icon font for consistent iconography
- **Web3Forms**: Serverless form submission service
- **Google Fonts**: Space Grotesk (display) and Noto Sans (body)

---

## 🏛️ Architecture

### **Design Patterns**
- **Presentational/Container Pattern**: Separation of concerns between UI and logic
- **Custom Hooks Pattern**: Reusable stateful logic
- **Composition Pattern**: Building complex UIs from simple components
- **Module Pattern**: Isolated CSS with CSS Modules

### **State Management**
- **Local State**: React useState for component-specific state
- **URL State**: React Router for navigation and route parameters
- **Environment Variables**: Vite env for configuration

### **File Organization**
```
devagency/
├── public/                      # Static assets
├── src/
│   ├── assets/                  # Images, fonts, icons
│   ├── components/              # Reusable UI components
│   │   ├── [Component].jsx
│   │   └── [Component].module.css
│   ├── hooks/                   # Custom React hooks
│   │   └── useUI.js
│   ├── pages/                   # Route-level pages
│   │   ├── HomePage.jsx
│   │   ├── ServicesPage.jsx
│   │   ├── PortfolioPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── FAQPage.jsx
│   │   └── WhyUsPage.jsx
│   ├── utils/                   # Utility functions
│   │   ├── constants.js
│   │   └── helpers.js
│   ├── App.jsx                  # Root component
│   ├── App.module.css
│   ├── index.css                # Global styles
│   └── main.jsx                 # Entry point
├── .env                         # Environment variables (gitignored)
├── .env.example                 # Environment template
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
├── README.md
└── PROJECT_STRUCTURE.md

```

---

## 🚀 Getting Started

### **Prerequisites**

Ensure you have the following installed:

- **Node.js**: v18.0.0 or higher ([Download](https://nodejs.org/))
- **npm**: v9.0.0 or higher (comes with Node.js)
- **Git**: For version control ([Download](https://git-scm.com/))

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/devagency.git
   cd devagency
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your configuration:
   ```env
   VITE_CONTACT_EMAIL=andreipaiudev@gmail.com
   VITE_CONTACT_PHONE=+44 7367 438 601
   VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```
   
   Open [http://localhost:5173](http://localhost:5173) in your browser.

### **Quick Start with Docker** (Optional)

```bash
# Build image
docker build -t devagency .

# Run container
docker run -p 5173:5173 devagency
```

---

## 📂 Project Structure

### **Page Components** (`/src/pages`)
- `HomePage.jsx` - Landing page with hero, features, and CTA
- `ServicesPage.jsx` - Services showcase with detailed descriptions
- `PortfolioPage.jsx` - Project portfolio grid with case studies
- `ContactPage.jsx` - Contact form with Web3Forms integration
- `FAQPage.jsx` - Frequently asked questions
- `WhyUsPage.jsx` - Company values and differentiators

### **Reusable Components** (`/src/components`)
- **Layout**: `Navbar`, `Footer`, `Modal`
- **Hero Sections**: `Hero`, `ServicesHero`, `ContactHero`, etc.
- **Content**: `FeatureGrid`, `ServiceCard`, `ProjectCard`, `TestimonialCard`
- **Interactive**: `ContactForm`, `CTA`, `Stats`
- **Legal**: `TermsAndConditions`, `PrivacyPolicy`

### **Custom Hooks** (`/src/hooks`)
- `useScrollPosition()` - Track window scroll position
- `useInView(ref, options)` - Detect element visibility in viewport
- `useWindowSize()` - Track window dimensions
- `useMediaQuery(query)` - Match media queries in JavaScript

### **Utilities** (`/src/utils`)
- `helpers.js` - Date formatting, text manipulation, validation
- `constants.js` - App-wide constants, routes, contact info

For detailed documentation, see [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md).

---

## 💻 Development

### **Available Scripts**

```bash
# Development
npm run dev          # Start Vite dev server with HMR on http://localhost:5173

# Production Build
npm run build        # Build optimized production bundle to /dist

# Preview Production
npm run preview      # Serve production build locally for testing

# Code Quality
npm run lint         # Run ESLint to check code quality
npm run lint:fix     # Auto-fix linting issues

# Type Checking
npm run type-check   # Run TypeScript type checking (if applicable)
```

### **Development Workflow**

1. **Create a new branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Follow existing code style and conventions
   - Write meaningful commit messages
   - Test thoroughly on multiple devices

3. **Run quality checks**
   ```bash
   npm run lint
   npm run build
   ```

4. **Commit and push**
   ```bash
   git add .
   git commit -m "feat: add new feature"
   git push origin feature/your-feature-name
   ```

5. **Create pull request**
   - Provide clear description
   - Reference relevant issues
   - Wait for review

---

## 🎨 Design System

### **Color Palette**

```css
/* Primary Colors */
--accent: #0da6f2;              /* Brand Blue */
--accent-hover: #38bdf8;        /* Light Blue */

/* Neutral Colors */
--dark-bg: #101d23;             /* Dark Navy */
--dark-secondary: #0c1618;      /* Darker Navy */
--border: #315668;              /* Border Gray */

/* Text Colors */
--text-primary: #0f172a;        /* Dark Slate */
--text-secondary: #64748b;      /* Slate Gray */
--text-light: #90b7cb;          /* Light Blue Gray */

/* Background Colors */
--bg-light: #f8fafc;            /* Light Gray */
--bg-white: #ffffff;            /* Pure White */
```

### **Typography**

**Display Font: Space Grotesk**
- Weights: 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
- Use for: Headings, titles, hero text

**Body Font: Noto Sans**
- Weights: 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)
- Use for: Paragraphs, UI text, buttons

### **Spacing Scale**
```css
--space-xs: 4px;
--space-sm: 8px;
--space-md: 16px;
--space-lg: 24px;
--space-xl: 32px;
--space-2xl: 48px;
--space-3xl: 64px;
--space-4xl: 96px;
```

### **Breakpoints**
```css
/* Mobile First Approach */
--mobile: 0px;          /* Default */
--tablet: 768px;        /* @media (min-width: 768px) */
--desktop: 1024px;      /* @media (min-width: 1024px) */
--wide: 1280px;         /* @media (min-width: 1280px) */
```

---

## 🚀 Deployment

### **Build for Production**

```bash
npm run build
```

This creates an optimized production build in the `/dist` folder:
- Minified JavaScript and CSS
- Optimized images
- Tree-shaken dependencies
- Source maps for debugging

### **Deployment Platforms**

#### **Vercel** (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### **Netlify**
```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

#### **GitHub Pages**
```bash
# Add to package.json
"homepage": "https://yourusername.github.io/devagency",

# Install gh-pages
npm install gh-pages --save-dev

# Add deploy script
"deploy": "npm run build && gh-pages -d dist"

# Deploy
npm run deploy
```

#### **Docker Deployment**
```dockerfile
# Dockerfile
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### **Environment Variables for Production**

Ensure these are set in your deployment platform:
```env
VITE_CONTACT_EMAIL=andreipaiudev@gmail.com
VITE_CONTACT_PHONE=+447367438601
VITE_WEB3FORMS_ACCESS_KEY=your_production_key
VITE_GA_ID=G-XXXXXXXXXX  # Google Analytics
```

---

## 📋 Best Practices

### **Code Quality**
- ✅ Follow React best practices and hooks rules
- ✅ Use ESLint for code consistency
- ✅ Write semantic HTML for accessibility
- ✅ Implement responsive design from mobile-first
- ✅ Use CSS Modules for style isolation
- ✅ Keep components small and focused
- ✅ Document complex logic with comments

### **Performance**
- ✅ Lazy load routes and heavy components
- ✅ Optimize images (WebP format, proper sizing)
- ✅ Minimize bundle size with tree-shaking
- ✅ Use production build for deployment
- ✅ Implement caching strategies
- ✅ Monitor Core Web Vitals

### **Security**
- ✅ Never commit `.env` files
- ✅ Validate all user inputs
- ✅ Sanitize data before rendering
- ✅ Use HTTPS in production
- ✅ Keep dependencies updated
- ✅ Implement CSRF protection

### **Accessibility**
- ✅ Use semantic HTML elements
- ✅ Provide alt text for images
- ✅ Ensure keyboard navigation
- ✅ Maintain color contrast ratios
- ✅ Add ARIA labels where needed
- ✅ Test with screen readers

---

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

### **How to Contribute**

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'feat: add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### **Commit Convention**

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add new feature
fix: bug fix
docs: documentation changes
style: formatting, missing semi-colons, etc
refactor: code restructuring
test: adding tests
chore: maintenance tasks
```

### **Code Review Process**

1. All submissions require review
2. Automated tests must pass
3. Code must follow style guidelines
4. Changes must be documented

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 Contact

**DevAgency**

- 📧 Email: [andreipaiudev@gmail.com](mailto:andreipaiudev@gmail.com)
- 📱 Phone: [+44 7367 438 601](tel:+447367438601)
- 🌐 Website: [devagency.ro](#)
- 💼 LinkedIn: [linkedin.com/company/devagency](#)
- 🐙 GitHub: [github.com/devagency](#)

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
