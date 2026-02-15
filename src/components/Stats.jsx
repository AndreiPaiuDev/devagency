import styles from './Stats.module.css'

const stats = [
  {
    number: '20+',
    label: 'Proiecte Livrate',
    icon: 'rocket_launch',
  },
  {
    number: '98%',
    label: 'Clienți Mulțumiți',
    icon: 'sentiment_satisfied',
  },
  {
    number: '2+',
    label: 'Ani Experiență',
    icon: 'workspace_premium',
  },
  {
    number: '24h',
    label: 'Timp de Răspuns',
    icon: 'schedule',
  },
]

function Stats() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {stats.map((stat, index) => (
            <div key={index} className={styles.stat}>
              <div className={styles.iconWrapper}>
                <span className="material-symbols-outlined">{stat.icon}</span>
              </div>
              <div className={styles.number}>{stat.number}</div>
              <div className={styles.label}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
