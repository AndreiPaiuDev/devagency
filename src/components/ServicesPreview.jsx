import { Link } from 'react-router-dom'
import { useTranslation } from '../hooks/useTranslation'
import styles from './ServicesPreview.module.css'

function ServicesPreview() {
  const t = useTranslation()
  
  const services = [
    {
      icon: 'code',
      title: t.servicesPreview.services.webDev.title,
      description: t.servicesPreview.services.webDev.description,
      features: t.servicesPreview.services.webDev.features,
    },
    {
      icon: 'phone_iphone',
      title: t.servicesPreview.services.mobile.title,
      description: t.servicesPreview.services.mobile.description,
      features: t.servicesPreview.services.mobile.features,
    },
    {
      icon: 'palette',
      title: t.servicesPreview.services.design.title,
      description: t.servicesPreview.services.design.description,
      features: t.servicesPreview.services.design.features,
    },
    {
      icon: 'speed',
      title: t.servicesPreview.services.performance.title,
      description: t.servicesPreview.services.performance.description,
      features: t.servicesPreview.services.performance.features,
    },
  ]
  
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>
            <span className="material-symbols-outlined">build</span>
            {t.servicesPreview.badge}
          </div>
          <h2 className={styles.title}>
            {t.servicesPreview.title} <span className={styles.highlight}>{t.servicesPreview.titleHighlight}</span>
          </h2>
          <p className={styles.subtitle}>
            {t.servicesPreview.subtitle}
          </p>
        </div>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                <span className="material-symbols-outlined">{service.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
              <ul className={styles.features}>
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="material-symbols-outlined">check_circle</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={styles.cta}>
          <Link to="/servicii" className={styles.button}>
            {t.servicesPreview.cta}
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesPreview
