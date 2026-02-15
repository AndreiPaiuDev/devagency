import styles from './PortfolioHero.module.css'

function PortfolioHero() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.copy}>
            <div className={styles.kicker}>
              <span className={styles.ping} />
              20+ Proiecte Livrate
            </div>
            <h1>
              Proiectele Noastre: <br />
              <span className={styles.highlight}>Rezultate Concrete</span>
            </h1>
            <p>
              Nu scriem doar cod, creștem afaceri. Iată cum am transformat
              provocările tehnice ale clienților în victorii reale de business,
              fără bullshit corporatist.
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
                    <p className={styles.badgeTitle}>Rezultate Măsurabile</p>
                    <p className={styles.badgeSubtitle}>
                      Fiecare proiect cu impact real de business
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
