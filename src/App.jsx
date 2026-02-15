import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styles from './App.module.css'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import PortfolioPage from './pages/PortfolioPage'
import WhyUsPage from './pages/WhyUsPage'
import ContactPage from './pages/ContactPage'
import FAQPage from './pages/FAQPage'

function App() {
  return (
    <Router>
      <div className={styles.page}>
        <Navbar />
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/servicii" element={<ServicesPage />} />
            <Route path="/portofoliu" element={<PortfolioPage />} />
            <Route path="/de-ce-noi" element={<WhyUsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
