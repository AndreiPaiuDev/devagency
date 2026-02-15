import styles from './ServicesGrid.module.css'
import ServiceCard from './ServiceCard'

const services = [
  {
    icon: 'layers',
    title: 'Aplicații Web & SaaS',
    tagline: '"Software care muncește pentru tine"',
    description:
      'Automatizăm operațiuni complexe și construim sisteme cloud-native care scalează odată cu ambițiile tale, nu cu limitările serverului.',
    tags: ['Dashboard-uri', 'CRM', 'Automation'],
  },
  {
    icon: 'shopping_cart',
    title: 'Platforme E-commerce',
    tagline: '"Vinde în timp ce dormi"',
    description:
      'Experiențe de checkout fluide și sisteme de gestiune robuste. Integrăm plăți, curieri și stocuri pentru ca tu să te ocupi doar de marketing.',
    tags: ['Shopify', 'WooCommerce', 'Custom'],
  },
  {
    icon: 'devices',
    title: 'Website-uri Corporate',
    tagline: '"Prima impresie contează"',
    description:
      'Design-uri care nu doar arată bine, ci convertesc. Creăm landing pages optimizate pentru vânzare și site-uri de prezentare memorabile.',
    tags: ['UI/UX', 'SEO Ready', 'Responsive'],
  },
  {
    icon: 'rocket',
    title: 'MVP & Product Dev',
    tagline: '"De la idee la lansare, rapid"',
    description:
      'Validăm împreună piața cu un buget optimizat. Construim strictul necesar pentru a testa ideea, înainte să investești masiv în funcționalități "nice-to-have".',
    tags: ['Prototyping', 'User Testing'],
  },
  {
    icon: 'build',
    title: 'Mentenanță & Scalare',
    tagline: '"Fără bug-uri, fără stres"',
    description:
      'Noi ne ocupăm de securitate, update-uri și backup-uri. Tu te ocupi de creșterea afacerii. Suntem departamentul tău tehnic externalizat.',
    tags: ['SLA', 'Security', '24/7 Monitoring'],
  },
]

function ServicesGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <h2 className={styles.label}>Expertiza Noastră</h2>
            <h3 className={styles.title}>Servicii Complete pentru Era Digitală</h3>
            <p className={styles.subtitle}>
              Nu suntem doar executanți, suntem partenerii tăi strategici. Iată meniul nostru de soluții:
            </p>
          </div>
          <div className={styles.headerIcon}>
            <span className="material-symbols-outlined">hub</span>
          </div>
        </div>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
          <div className={styles.ctaCard}>
            <div className={styles.ctaIcon}>
              <span className="material-symbols-outlined">chat</span>
            </div>
            <div>
              <h4>Ai o provocare unică?</h4>
              <p>
                Hai să vorbim despre proiectul tău specific. Consultanța inițială e gratuită.
              </p>
            </div>
            <button className={styles.ctaButton}>
              Discută cu un expert
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesGrid
