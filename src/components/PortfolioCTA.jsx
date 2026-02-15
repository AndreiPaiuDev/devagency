import { Link } from 'react-router-dom'
import styles from './PortfolioCTA.module.css'

function PortfolioCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.gradient} />
          <div className={styles.blob} />
          <div className={styles.content}>
            <h2 className={styles.title}>Ai o provocare similară?</h2>
            <p className={styles.subtitle}>
              Hai să transformăm ideea ta în următorul nostru studiu de caz de
              succes.
            </p>
          </div>
          <Link to="/contact" className={styles.button}>
            <span>Discută Proiectul Tău</span>
            <span className="material-symbols-outlined">chat</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PortfolioCTA
