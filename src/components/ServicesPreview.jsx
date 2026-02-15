import { Link } from 'react-router-dom'
import styles from './ServicesPreview.module.css'

const services = [
  {
    icon: 'code',
    title: 'Dezvoltare Web',
    description:
      'Aplicații web scalabile cu React, Node.js și tehnologii moderne.',
    features: ['SaaS Platforms', 'E-commerce', 'Dashboards'],
  },
  {
    icon: 'phone_iphone',
    title: 'Aplicații Mobile',
    description:
      'Aplicații native și cross-platform pentru iOS și Android.',
    features: ['React Native', 'Flutter', 'Progressive Web Apps'],
  },
  {
    icon: 'palette',
    title: 'UI/UX Design',
    description:
      'Design modern, intuitiv și conversion-focused pentru produsul tău.',
    features: ['User Research', 'Prototyping', 'Design Systems'],
  },
  {
    icon: 'speed',
    title: 'Optimizare Performanță',
    description:
      'Îmbunătățim viteza și performanța aplicațiilor tale existente.',
    features: ['Performance Audit', 'SEO', 'Core Web Vitals'],
  },
]

function ServicesPreview() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>
            <span className="material-symbols-outlined">build</span>
            Servicii
          </div>
          <h2 className={styles.title}>
            Ce putem construi <span className={styles.highlight}>împreună</span>
          </h2>
          <p className={styles.subtitle}>
            De la idee la lansare, oferim servicii complete pentru transformarea
            viziunii tale în realitate digitală.
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
            Vezi Toate Serviciile
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesPreview
