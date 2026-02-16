import { Link } from 'react-router-dom'
import { useTranslation } from '../hooks/useTranslation'
import styles from './CTA.module.css'

function CTA() {
  const t = useTranslation()
  
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <div className={styles.dots} />
          <h2 className={styles.title}>{t.cta.title}</h2>
          <p className={styles.subtitle}>
            {t.cta.subtitle}
          </p>
          <div className={styles.buttons}>
            <Link to="/contact" className={styles.primary}>{t.cta.buttonPrimary}</Link>
            <a href="tel:+447367438601" className={styles.secondary}>{t.cta.buttonSecondary}</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
