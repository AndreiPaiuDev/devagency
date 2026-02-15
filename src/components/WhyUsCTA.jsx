import { Link } from 'react-router-dom'
import styles from './WhyUsCTA.module.css'

function WhyUsCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.blurTop} />
          <div className={styles.blurBottom} />
          <div className={styles.content}>
            <h2 className={styles.title}>Ai o idee genială?</h2>
            <h3 className={styles.subtitle}>Hai să o construim împreună.</h3>
            <p className={styles.description}>
              Nu lăsa proiectul tău să rămână doar o notiță în telefon.
              Contactează-ne și hai să vedem cum putem colabora pentru succesul
              tău.
            </p>
            <div className={styles.buttons}>
              <Link to="/contact" className={styles.primary}>
                <span>Cere Ofertă Gratuită</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <Link to="/portofoliu" className={styles.secondary}>Vezi Portofoliul</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyUsCTA
