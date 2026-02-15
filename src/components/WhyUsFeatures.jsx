import styles from './WhyUsFeatures.module.css'

const features = [
  {
    icon: 'visibility',
    title: 'Transparență Totală',
    description:
      'Fără costuri ascunse sau "feature-uri" surpriză pe factură. Știi exact pe ce dai banii și unde ajung orele noastre de development.',
  },
  {
    icon: 'bolt',
    title: 'Viteză & Calitate',
    description:
      'Livrăm cod curat care se încarcă instant. Nu facem compromisuri la performanță doar ca să terminăm mai repede. Optimizat pentru SEO din start.',
  },
  {
    icon: 'support_agent',
    title: 'Suport Continuu',
    description:
      'Nu dispărem în ceață după lansare. Rămânem partenerii tăi tehnici pe termen lung pentru update-uri, mentenanță și scaling.',
  },
]

function WhyUsFeatures() {
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
