import { Link } from 'react-router-dom'
import { useTranslation } from '../hooks/useTranslation'
import styles from './Hero.module.css'

function Hero({ dark = false }) {
  const t = useTranslation()
  
  return (
    <section className={`${styles.section} ${dark ? styles.dark : ''}`}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.copy}>
            <div className={styles.kicker}>
              <span className={styles.ping} />
              {t.hero.badge}
            </div>
            <div className={styles.titleBlock}>
              <h1>
                {t.hero.title}{' '}
                <span className={styles.highlight}>{t.hero.titleHighlight}</span> {t.hero.titleEnd}
              </h1>
              <p>
                {t.hero.subtitle}
              </p>
            </div>
            <div className={styles.ctaRow}>
              <Link to="/contact" className={styles.primary}>
                <span>{t.hero.ctaPrimary}</span>
                <span className="material-symbols-outlined">arrow_forward</span>
                <div className={styles.sheen} aria-hidden="true" />
              </Link>
              <Link to="/portofoliu" className={styles.secondary}>
                {t.hero.ctaSecondary}
              </Link>
            </div>
            <div className={styles.chips}>
              <span className={styles.chip}>
                <span className="material-symbols-outlined">rocket_launch</span>
                {t.hero.chip1}
              </span>
              <span className={styles.chip}>
                <span className="material-symbols-outlined">monitoring</span>
                {t.hero.chip2}
              </span>
              <span className={styles.chip}>
                <span className="material-symbols-outlined">paid</span>
                {t.hero.chip3}
              </span>
            </div>
          </div>
          <div className={styles.visual}>
            <div className={styles.visualWrapper}>
              <div className={styles.backPlate} />
              <div className={styles.card}>
                <img
                  src="/hero-card.webp"
                  alt=""
                  fetchPriority="high"
                  className={styles.cardBg}
                />
                <div className={styles.overlay} />
                <div className={styles.cardContent}>
                  <div className={styles.status}>
                    <div className={styles.statusIcon}>
                      <span className="material-symbols-outlined">
                        check_circle
                      </span>
                    </div>
                    <div>
                      <div className={styles.statusLabel}>Status</div>
                      <div className={styles.statusValue}>Live & Stable</div>
                    </div>
                  </div>
                  <div className={styles.metrics}>
                    <div className={styles.metricHeader}>
                      <span>Performance</span>
                      <span className={styles.metricBadge}>A+</span>
                    </div>
                    <div className={styles.metricBar}>
                      <span style={{ width: '98%' }} />
                    </div>
                    <div className={styles.metricRow}>
                      <span>Speed Index</span>
                      <span>98/100</span>
                    </div>
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

export default Hero
