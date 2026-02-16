import { Link } from 'react-router-dom'
import { useTranslation } from '../hooks/useTranslation'
import styles from './WhyUsCTA.module.css'

function WhyUsCTA() {
  const t = useTranslation()
  
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.blurTop} />
          <div className={styles.blurBottom} />
          <div className={styles.content}>
            <h2 className={styles.title}>{t.whyUsCTA.title}</h2>
            <h3 className={styles.subtitle}>{t.whyUsCTA.subtitle}</h3>
            <p className={styles.description}>
              {t.whyUsCTA.description}
            </p>
            <div className={styles.buttons}>
              <Link to="/contact" className={styles.primary}>
                <span>{t.whyUsCTA.buttonPrimary}</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <Link to="/portofoliu" className={styles.secondary}>{t.whyUsCTA.buttonSecondary}</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUsCTA
