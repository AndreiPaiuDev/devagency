import { Link } from 'react-router-dom'
import { useTranslation } from '../hooks/useTranslation'
import styles from './PortfolioCTA.module.css'

function PortfolioCTA() {
  const t = useTranslation()
  
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.gradient} />
          <div className={styles.blob} />
          <div className={styles.content}>
            <h2 className={styles.title}>{t.portfolioCTA.title}</h2>
            <p className={styles.subtitle}>
              {t.portfolioCTA.subtitle}
            </p>
          </div>
          <Link to="/contact" className={styles.button}>
            <span>{t.portfolioCTA.button}</span>
            <span className="material-symbols-outlined">chat</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PortfolioCTA
