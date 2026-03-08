import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { LanguageProvider } from './contexts/LanguageContext'
import styles from './App.module.css'
import Navbar from './components/Navbar'
import CookieBanner from './components/CookieBanner'

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const PortfolioPage = lazy(() => import('./pages/PortfolioPage'))
const WhyUsPage = lazy(() => import('./pages/WhyUsPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const FAQPage = lazy(() => import('./pages/FAQPage'))

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className={styles.page}>
          <Navbar />
          <CookieBanner />
          <main className={styles.main}>
            <Suspense fallback={<div className={styles.loading}>Loading...</div>}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/servicii" element={<ServicesPage />} />
                <Route path="/portofoliu" element={<PortfolioPage />} />
                <Route path="/de-ce-noi" element={<WhyUsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/faq" element={<FAQPage />} />
              </Routes>
            </Suspense>
          </main>
        </div>
      </Router>
    </LanguageProvider>
  )
}

export default App
