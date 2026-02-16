import { useTranslation } from '../hooks/useTranslation'
import styles from './Stats.module.css'

function Stats() {
  const t = useTranslation()
  
  const stats = [
    {
      number: t.stats.projects.number,
      label: t.stats.projects.label,
      icon: 'rocket_launch',
    },
    {
      number: t.stats.clients.number,
      label: t.stats.clients.label,
      icon: 'sentiment_satisfied',
    },
    {
      number: t.stats.experience.number,
      label: t.stats.experience.label,
      icon: 'workspace_premium',
    },
    {
      number: t.stats.response.number,
      label: t.stats.response.label,
      icon: 'schedule',
    },
  ]
  
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
