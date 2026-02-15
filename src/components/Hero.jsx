import { Link } from 'react-router-dom'
import styles from './Hero.module.css'

function Hero({ dark = false }) {
  return (
    <section className={`${styles.section} ${dark ? styles.dark : ''}`}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.copy}>
            <div className={styles.kicker}>
              <span className={styles.ping} />
              Acceptăm proiecte noi
            </div>
            <div className={styles.titleBlock}>
              <h1>
                Transformăm{' '}
                <span className={styles.highlight}>Idei Digitale</span> în
                Succes Măsurabil
              </h1>
              <p>
                De la SaaS-uri complexe la platforme e-commerce scalabile. Nu
                scriem doar cod, construim afaceri online care performează.
              </p>
            </div>
            <div className={styles.ctaRow}>
              <Link to="/contact" className={styles.primary}>
                <span>Hai să povestim despre proiectul tău!</span>
                <span className="material-symbols-outlined">arrow_forward</span>
                <div className={styles.sheen} aria-hidden="true" />
              </Link>
              <Link to="/portofoliu" className={styles.secondary}>
                Vezi Portofoliul
              </Link>
            </div>
            <div className={styles.chips}>
              <span className={styles.chip}>
                <span className="material-symbols-outlined">rocket_launch</span>
                Lansare Rapidă
              </span>
              <span className={styles.chip}>
                <span className="material-symbols-outlined">monitoring</span>
                Scalabilitate
              </span>
              <span className={styles.chip}>
                <span className="material-symbols-outlined">paid</span>
                ROI Focused
              </span>
            </div>
          </div>
          <div className={styles.visual}>
            <div className={styles.visualWrapper}>
              <div className={styles.backPlate} />
              <div className={styles.card}>
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
