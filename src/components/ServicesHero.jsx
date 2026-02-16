import { Link } from 'react-router-dom'
import { useTranslation } from '../hooks/useTranslation'
import styles from './ServicesHero.module.css'

function ServicesHero() {
  const t = useTranslation()
  
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.copy}>
            <div className={styles.kicker}>
              <span className={styles.ping} />
              {t.servicesHero.badge}
            </div>
            <h1>
              {t.servicesHero.title}{' '}
              <span className={styles.highlight}>{t.servicesHero.titleHighlight}</span>.
            </h1>
            <p>
              {t.servicesHero.subtitle}
            </p>
            <div className={styles.ctaRow}>
              <button className={styles.primary} type="button">
                {t.servicesHero.ctaPrimary}
                <span className="material-symbols-outlined">arrow_downward</span>
              </button>
              <Link to="/portofoliu" className={styles.secondary}>
                {t.servicesHero.ctaSecondary}
              </Link>
            </div>
          </div>
          <div className={styles.visual}>
            <div className={styles.visualWrapper}>
              <div className={styles.backPlate} />
              <div className={styles.card}>
                <div className={styles.overlay} />
                <div className={styles.cardContent}>
                  <div className={styles.badge}>
                    <span className="material-symbols-outlined">rocket_launch</span>
                  </div>
                  <div>
                    <p className={styles.badgeTitle}>Lansare Rapidă</p>
                    <p className={styles.badgeSubtitle}>De la concept la piață în timp record</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesHero
