import styles from './WhyUsHero.module.css'

function WhyUsHero() {
  return (
    <section className={styles.section}>
      <div className={styles.blurTop} />
      <div className={styles.blurBottom} />
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.kicker}>
            <span className={styles.dot} />
            Avantajele Noastre
          </div>
          <h1 className={styles.title}>
            De ce să{' '}
            <span className={styles.highlight}>
              nu
              <svg
                className={styles.underline}
                preserveAspectRatio="none"
                viewBox="0 0 100 10"
              >
                <path
                  d="M0 5 Q 50 10 100 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                />
              </svg>
            </span>{' '}
            ne alegi pe noi?
          </h1>
          <p className={styles.subtitle}>
            (Glumim. Iată de ce suntem, de fapt, alegerea potrivită pentru
            proiectul tău.)
          </p>
        </div>
      </div>
    </section>
  )
}

export default WhyUsHero
