import { Link } from 'react-router-dom'
import { useTranslation } from '../hooks/useTranslation'
import styles from './ServicesGrid.module.css'
import ServiceCard from './ServiceCard'

function ServicesGrid() {
  const t = useTranslation()
  
  const services = [
    {
      icon: 'layers',
      title: t.servicesGrid.services.webApps.title,
      tagline: t.servicesGrid.services.webApps.tagline,
      description: t.servicesGrid.services.webApps.description,
      tags: t.servicesGrid.services.webApps.tags,
    },
    {
      icon: 'shopping_cart',
      title: t.servicesGrid.services.ecommerce.title,
      tagline: t.servicesGrid.services.ecommerce.tagline,
      description: t.servicesGrid.services.ecommerce.description,
      tags: t.servicesGrid.services.ecommerce.tags,
    },
    {
      icon: 'devices',
      title: t.servicesGrid.services.corporate.title,
      tagline: t.servicesGrid.services.corporate.tagline,
      description: t.servicesGrid.services.corporate.description,
      tags: t.servicesGrid.services.corporate.tags,
    },
    {
      icon: 'rocket',
      title: t.servicesGrid.services.mvp.title,
      tagline: t.servicesGrid.services.mvp.tagline,
      description: t.servicesGrid.services.mvp.description,
      tags: t.servicesGrid.services.mvp.tags,
    },
    {
      icon: 'build',
      title: t.servicesGrid.services.maintenance.title,
      tagline: t.servicesGrid.services.maintenance.tagline,
      description: t.servicesGrid.services.maintenance.description,
      tags: t.servicesGrid.services.maintenance.tags,
    },
  ]
  
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.headerContent}>
            <h2 className={styles.label}>{t.servicesGrid.label}</h2>
            <h3 className={styles.title}>{t.servicesGrid.title}</h3>
            <p className={styles.subtitle}>
              {t.servicesGrid.subtitle}
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
              <h4>{t.servicesGrid.ctaCardTitle}</h4>
              <p>
                {t.servicesGrid.ctaCardText}
              </p>
            </div>
            <Link to="/contact" className={styles.ctaButton}>
              {t.servicesGrid.ctaCardButton}
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesGrid
