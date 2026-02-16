import { useTranslation } from '../hooks/useTranslation'
import styles from './PortfolioHero.module.css'

function PortfolioHero() {
  const t = useTranslation()
  
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.copy}>
            <div className={styles.kicker}>
              <span className={styles.ping} />
              {t.portfolioHero.badge}
            </div>
            <h1>
              {t.portfolioHero.title} <br />
              <span className={styles.highlight}>{t.portfolioHero.titleHighlight}</span>
            </h1>
            <p>
              {t.portfolioHero.subtitle}
            </p>
          </div>
          <div className={styles.visual}>
            <div className={styles.visualWrapper}>
              <div className={styles.backPlate} />
              <div className={styles.card}>
                <div className={styles.overlay} />
                <div className={styles.cardContent}>
                  <div className={styles.badge}>
                    <span className="material-symbols-outlined">workspace_premium</span>
                  </div>
                  <div>
                    <p className={styles.badgeTitle}>{t.portfolioHero.badgeTitle}</p>
                    <p className={styles.badgeSubtitle}>
                      {t.portfolioHero.badgeSubtitle}
                    </p>
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

export default PortfolioHero
