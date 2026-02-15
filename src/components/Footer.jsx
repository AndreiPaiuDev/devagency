import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.about}>
            <h3 className={styles.logo}>DevAgency</h3>
            <p className={styles.description}>
              Transformăm idei în cod curat, scalabil și gata de lansare.
            </p>
            <div className={styles.social}>
              <a href="#" className={styles.socialLink} aria-label="Facebook">
                <span className="material-symbols-outlined">language</span>
              </a>
              <a href="#" className={styles.socialLink} aria-label="Twitter">
                <span className="material-symbols-outlined">chat</span>
              </a>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                <span className="material-symbols-outlined">work_outline</span>
              </a>
              <a href="#" className={styles.socialLink} aria-label="GitHub">
                <span className="material-symbols-outlined">integration_instructions</span>
              </a>
            </div>
          </div>
          <div className={styles.links}>
            <h4 className={styles.heading}>Navigare</h4>
            <nav className={styles.nav}>
              <Link to="/">Acasă</Link>
              <Link to="/servicii">Servicii</Link>
              <Link to="/portofoliu">Portofoliu</Link>
              <Link to="/de-ce-noi">De Ce Noi?</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/faq">FAQ</Link>
            </nav>
          </div>
          <div className={styles.links}>
            <h4 className={styles.heading}>Servicii</h4>
            <nav className={styles.nav}>
              <a href="#">Dezvoltare Web</a>
              <a href="#">Aplicații Mobile</a>
              <a href="#">UI/UX Design</a>
              <a href="#">Consultanță IT</a>
            </nav>
          </div>
          <div className={styles.links}>
            <h4 className={styles.heading}>Contact</h4>
            <div className={styles.contact}>
              <a href="mailto:andreipaiudev@gmail.com">
                <span className="material-symbols-outlined">mail</span>
                andreipaiudev@gmail.com
              </a>
              <a href="tel:+447367438601">
                <span className="material-symbols-outlined">call</span>
                +44 7367 438 601
              </a>
            </div>
          </div>
        </div>
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} DevAgency. Toate drepturile rezervate.
          </p>
          <div className={styles.legal}>
            <a href="#">Termeni și Condiții</a>
            <a href="#">Politica de Confidențialitate</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
