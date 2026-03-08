import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from '../hooks/useTranslation'
import Modal from './Modal'
import TermsAndConditions from './TermsAndConditions'
import PrivacyPolicy from './PrivacyPolicy'
import CookiesPolicy from './CookiesPolicy'
import styles from './Footer.module.css'

function Footer() {
  const [isTermsOpen, setIsTermsOpen] = useState(false)
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false)
  const [isCookiesOpen, setIsCookiesOpen] = useState(false)
  const t = useTranslation()

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.about}>
              <h3 className={styles.logo}>DevAgency</h3>
              <p className={styles.description}>
                {t.footer.description}
              </p>
              <div className={styles.social}>
                <a href="#" className={styles.socialLink} aria-label="Facebook">
                  <span className="material-symbols-outlined">language</span>
                </a>
                <a href="#" className={styles.socialLink} aria-label="Twitter">
                  <span className="material-symbols-outlined">chat</span>
                </a>
                <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                  <span className="material-symbols-outlined">work_outline</span>
                </a>
                <a href="#" className={styles.socialLink} aria-label="GitHub">
                  <span className="material-symbols-outlined">integration_instructions</span>
                </a>
              </div>
            </div>
            <div className={styles.links}>
              <h4 className={styles.heading}>{t.footer.navigation}</h4>
              <nav className={styles.nav}>
                <Link to="/">{t.navbar.home}</Link>
                <Link to="/servicii">{t.navbar.services}</Link>
                <Link to="/portofoliu">{t.navbar.portfolio}</Link>
                <Link to="/de-ce-noi">{t.navbar.whyUs}</Link>
                <Link to="/contact">{t.navbar.contact}</Link>
                <Link to="/faq">{t.navbar.faq}</Link>
              </nav>
            </div>
            <div className={styles.links}>
              <h4 className={styles.heading}>{t.footer.servicesTitle}</h4>
              <nav className={styles.nav}>
                <a href="#">{t.footer.services.webDev}</a>
                <a href="#">{t.footer.services.mobile}</a>
                <a href="#">{t.footer.services.design}</a>
                <a href="#">{t.footer.services.consulting}</a>
              </nav>
            </div>
            <div className={styles.links}>
              <h4 className={styles.heading}>{t.footer.contactTitle}</h4>
              <div className={styles.contact}>
                <a href="mailto:andreipaiudev@gmail.com">
                  <span className="material-symbols-outlined">mail</span>
                  andreipaiudev@gmail.com
                </a>
                <a href="tel:+447367438601">
                  <span className="material-symbols-outlined">call</span>
                  +44 7367 438 601
                </a>
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            <p className={styles.copyright}>
              © {new Date().getFullYear()} {t.footer.copyright}
            </p>
            <div className={styles.legal}>
              <button onClick={() => setIsTermsOpen(true)}>
                {t.footer.terms}
              </button>
              <button onClick={() => setIsPrivacyOpen(true)}>
                {t.footer.privacy}
              </button>
              <button onClick={() => setIsCookiesOpen(true)}>
                {t.footer.cookies}
              </button>
            </div>
          </div>
        </div>
      </footer>

      <Modal 
        isOpen={isTermsOpen} 
        onClose={() => setIsTermsOpen(false)}
        title={t.footer.terms}
      >
        <TermsAndConditions />
      </Modal>

      <Modal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
        title={t.footer.privacy}
      >
        <PrivacyPolicy />
      </Modal>

      <Modal
        isOpen={isCookiesOpen}
        onClose={() => setIsCookiesOpen(false)}
        title={t.footer.cookies}
      >
        <CookiesPolicy />
      </Modal>
    </>
  )
}

export default Footer
