import { useTranslation } from '../hooks/useTranslation'
import styles from './WhyUsHero.module.css'

function WhyUsHero() {
  const t = useTranslation()
  
  return (
    <section className={styles.section}>
      <div className={styles.blurTop} />
      <div className={styles.blurBottom} />
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.kicker}>
            <span className={styles.dot} />
            {t.whyUsHero.badge}
          </div>
          <h1 className={styles.title}>
            {t.whyUsHero.title}{' '}
            <span className={styles.highlight}>
              {t.whyUsHero.titleHighlight}
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
            {t.whyUsHero.titleEnd}
          </h1>
          <p className={styles.subtitle}>
            {t.whyUsHero.subtitle}
          </p>
        </div>
      </div>
    </section>
  )
}

export default WhyUsHero
