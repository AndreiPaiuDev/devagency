import { Link } from 'react-router-dom'
import styles from './CTA.module.css'

function CTA() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.card}>
          <div className={styles.dots} />
          <h2 className={styles.title}>Gata să începem?</h2>
          <p className={styles.subtitle}>
            Spune-ne ce vrei să construiești. Noi venim cu cafeaua, strategia și codul. Răspundem în maximum 24h.
          </p>
          <div className={styles.buttons}>
            <Link to="/contact" className={styles.primary}>Cere Ofertă Gratuită</Link>
            <a href="tel:+447367438601" className={styles.secondary}>Sună-ne: +44 7367 438 601</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
