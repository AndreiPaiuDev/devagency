import { useTranslation } from '../hooks/useTranslation'
import styles from './WhyUsFeatures.module.css'

function WhyUsFeatures() {
  const t = useTranslation()
  
  const features = [
    {
      icon: 'visibility',
      title: t.whyUsFeatures.features.transparency.title,
      description: t.whyUsFeatures.features.transparency.description,
    },
    {
      icon: 'bolt',
      title: t.whyUsFeatures.features.speed.title,
      description: t.whyUsFeatures.features.speed.description,
    },
    {
      icon: 'support_agent',
      title: t.whyUsFeatures.features.support.title,
      description: t.whyUsFeatures.features.support.description,
    },
  ]
  
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.iconWrapper}>
                <span className="material-symbols-outlined">{feature.icon}</span>
              </div>
              <h3 className={styles.title}>{feature.title}</h3>
              <p className={styles.description}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUsFeatures
