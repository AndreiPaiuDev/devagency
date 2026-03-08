import styles from './ProjectCard.module.css'

function ProjectCard({
  title,
  category,
  icon,
  image,
  challenge,
  solution,
  metric,
  metricLabel,
  color = 'primary',
}) {
  return (
    <div className={`${styles.card} ${styles[color]}`}>
      <div className={styles.imageWrapper}>
        <img
          src={image}
          alt={title}
          loading="lazy"
          className={styles.image}
        />
        <div className={styles.overlay} />
        <div className={styles.badge}>
          <span>{category}</span>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.iconWrapper}>
            <span className="material-symbols-outlined">{icon}</span>
          </div>
          <h3 className={styles.title}>{title}</h3>
        </div>
        <div className={styles.details}>
          <div className={styles.item}>
            <span className="material-symbols-outlined">error</span>
            <div>
              <span className={styles.label}>Provocarea</span>
              <span className={styles.text}>{challenge}</span>
            </div>
          </div>
          <div className={styles.item}>
            <span className="material-symbols-outlined">check_circle</span>
            <div>
              <span className={styles.label}>Soluția</span>
              <span className={styles.text}>{solution}</span>
            </div>
          </div>
        </div>
        <div className={styles.impact}>
          <p className={styles.impactLabel}>Impact Business</p>
          <p className={styles.metric}>
            {metric} <span className={styles.metricLabel}>{metricLabel}</span>
          </p>
        </div>
      </div>
      <div className={styles.arrow}>
        <button className={styles.arrowButton}>
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </div>
  )
}

export default ProjectCard
