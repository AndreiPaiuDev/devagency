import styles from './ServicesHero.module.css'

function ServicesHero() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <div className={styles.copy}>
            <div className={styles.kicker}>
              <span className={styles.ping} />
              Disponibili pentru proiecte noi
            </div>
            <h1>
              Nu scriem doar cod,{' '}
              <span className={styles.highlight}>construim afaceri</span>.
            </h1>
            <p>
              Soluții tech pentru dureri de cap non-tech. Transformăm ideile tale îndrăznețe în produse digitale scalabile și profitabile, fără jargon corporatist inutil.
            </p>
            <div className={styles.ctaRow}>
              <button className={styles.primary} type="button">
                Vezi cum te putem ajuta
                <span className="material-symbols-outlined">arrow_downward</span>
              </button>
              <button className={styles.secondary} type="button">
                Portofoliu Recent
              </button>
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
