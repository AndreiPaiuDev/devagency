import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { useTranslation } from '../hooks/useTranslation'
import styles from './Navbar.module.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, toggleLanguage } = useLanguage()
  const t = useTranslation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.brand}>
          <div className={styles.logoBox}>
            <span className="material-symbols-outlined">terminal</span>
          </div>
          <span className={styles.brandName}>DevAgency</span>
        </Link>
        <nav className={styles.links}>
          <Link to="/">{t.navbar.home}</Link>
          <Link to="/servicii">{t.navbar.services}</Link>
          <Link to="/portofoliu">{t.navbar.portfolio}</Link>
          <Link to="/de-ce-noi">{t.navbar.whyUs}</Link>
          <Link to="/faq">{t.navbar.faq}</Link>
        </nav>
        <div className={styles.actions}>
          <button 
            className={styles.languageToggle}
            onClick={toggleLanguage}
            type="button"
            aria-label="Toggle language"
          >
            <span className={styles.langOption} data-active={language === 'ro'}>RO</span>
            <span className={styles.langSeparator}>|</span>
            <span className={styles.langOption} data-active={language === 'en'}>EN</span>
          </button>
          <Link to="/contact" className={styles.contact}>
            {t.navbar.contact}
          </Link>
        </div>
        <button 
          className={styles.menu} 
          type="button" 
          aria-label={t.navbar.menu}
          onClick={toggleMenu}
        >
          <span className="material-symbols-outlined">
            {isMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className={styles.mobileMenu}>
          <Link to="/" onClick={closeMenu}>{t.navbar.home}</Link>
          <Link to="/servicii" onClick={closeMenu}>{t.navbar.services}</Link>
          <Link to="/portofoliu" onClick={closeMenu}>{t.navbar.portfolio}</Link>
          <Link to="/de-ce-noi" onClick={closeMenu}>{t.navbar.whyUs}</Link>
          <Link to="/faq" onClick={closeMenu}>{t.navbar.faq}</Link>
          <div className={styles.mobileLanguage}>
            <button 
              className={styles.languageToggle}
              onClick={toggleLanguage}
              type="button"
            >
              <span className={styles.langOption} data-active={language === 'ro'}>RO</span>
              <span className={styles.langSeparator}>|</span>
              <span className={styles.langOption} data-active={language === 'en'}>EN</span>
            </button>
          </div>
          <Link to="/contact" className={styles.mobileContact} onClick={closeMenu}>
            {t.navbar.contact}
          </Link>
        </nav>
      )}
    </header>
  )
}

export default Navbar
