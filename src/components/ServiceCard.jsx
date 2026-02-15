import styles from './ServiceCard.module.css'

function ServiceCard({ icon, title, tagline, description, tags }) {
  return (
    <div className={styles.card}>
      <div className={styles.bgIcon}>
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <div className={styles.iconWrapper}>
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <div className={styles.content}>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.tagline}>{tagline}</p>
        <p className={styles.description}>{description}</p>
        <ul className={styles.tags}>
          {tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ServiceCard
