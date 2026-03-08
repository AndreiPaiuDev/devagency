import { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import Modal from './Modal'
import CookiesPolicy from './CookiesPolicy'
import styles from './CookieBanner.module.css'

const CONSENT_KEY = 'cookie_consent'

function CookieBanner() {
  const { language } = useLanguage()
  const [visible, setVisible] = useState(false)
  const [isPolicyOpen, setIsPolicyOpen] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY)
    if (!consent) {
      setVisible(true)
    }
  }, [])

  const acceptAll = () => {
    localStorage.setItem(CONSENT_KEY, 'all')
    setVisible(false)
  }

  const acceptEssential = () => {
    localStorage.setItem(CONSENT_KEY, 'essential')
    setVisible(false)
  }

  const isEN = language === 'en'

  const text = {
    title: isEN ? 'We use cookies' : 'Utilizăm cookie-uri',
    description: isEN
      ? 'We use cookies to improve your browsing experience, analyse site traffic and personalise content. Essential cookies are always active. You can choose whether to accept optional cookies.'
      : 'Utilizăm cookie-uri pentru a îmbunătăți experiența de navigare, a analiza traficul site-ului și a personaliza conținutul. Cookie-urile esențiale sunt întotdeauna active. Puteți alege dacă acceptați cookie-urile opționale.',
    acceptAll: isEN ? 'Accept All' : 'Acceptă Toate',
    acceptEssential: isEN ? 'Essential Only' : 'Doar Esențiale',
    learnMore: isEN ? 'Cookie Policy' : 'Politica Cookie-uri',
    gdprNote: isEN
      ? 'In accordance with GDPR (Regulation EU 2016/679), we need your consent before placing non-essential cookies.'
      : 'Conform GDPR (Regulamentul UE 2016/679), avem nevoie de consimțământul dumneavoastră înainte de a plasa cookie-uri non-esențiale.',
    policyTitle: isEN ? 'Cookies Policy' : 'Politica de Cookie-uri',
  }

  if (!visible) return null

  return (
    <>
      <div className={styles.banner} role="dialog" aria-label={text.title} aria-modal="false">
        <div className={styles.inner}>
          <div className={styles.content}>
            <div className={styles.icon}>
              <span className="material-symbols-outlined">cookie</span>
            </div>
            <div className={styles.text}>
              <h3 className={styles.title}>{text.title}</h3>
              <p className={styles.description}>{text.description}</p>
              <p className={styles.gdprNote}>{text.gdprNote}</p>
            </div>
          </div>
          <div className={styles.actions}>
            <button className={styles.btnSecondary} onClick={acceptEssential}>
              {text.acceptEssential}
            </button>
            <button
              className={styles.btnSecondary}
              onClick={() => setIsPolicyOpen(true)}
            >
              {text.learnMore}
            </button>
            <button className={styles.btnPrimary} onClick={acceptAll}>
              {text.acceptAll}
            </button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isPolicyOpen}
        onClose={() => setIsPolicyOpen(false)}
        title={text.policyTitle}
      >
        <CookiesPolicy />
      </Modal>
    </>
  )
}

export default CookieBanner
