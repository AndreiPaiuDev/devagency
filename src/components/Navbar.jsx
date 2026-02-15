import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.brand}>
          <div className={styles.logoBox}>
            <span className="material-symbols-outlined">terminal</span>
          </div>
          <span className={styles.brandName}>DevAgency</span>
        </Link>
        <nav className={styles.links}>
          <Link to="/">Acasă</Link>
          <Link to="/servicii">Servicii</Link>
          <Link to="/portofoliu">Portofoliu</Link>
          <Link to="/de-ce-noi">De Ce Noi?</Link>
          <Link to="/faq">FAQ</Link>
        </nav>
        <div className={styles.actions}>
          <Link to="/contact" className={styles.contact}>
            Contact
          </Link>
        </div>
        <button className={styles.menu} type="button" aria-label="Meniu">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  )
}

export default Navbar
