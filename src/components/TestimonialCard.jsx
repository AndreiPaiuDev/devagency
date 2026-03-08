import styles from './TestimonialCard.module.css'

function TestimonialCard({ name, role, image, problem, liked, result, tags }) {
  return (
    <div className={styles.card}>
      <div className={styles.quoteIcon}>
        <span className="material-symbols-outlined">format_quote</span>
      </div>
      <div className={styles.profile}>
        <img
          src={image}
          alt={name}
          loading="lazy"
          className={styles.avatar}
        />
        <div>
          <p className={styles.name}>{name}</p>
          <p className={styles.role}>{role}</p>
        </div>
      </div>
      <div className={styles.stars}>
        <span className="material-symbols-outlined">star</span>
        <span className="material-symbols-outlined">star</span>
        <span className="material-symbols-outlined">star</span>
        <span className="material-symbols-outlined">star</span>
        <span className="material-symbols-outlined">star</span>
      </div>
      <div className={styles.content}>
        <div className={styles.box + ' ' + styles.problem}>
          <div className={styles.boxHeader}>
            <span className="material-symbols-outlined">error</span>
            Problemă
          </div>
          <p className={styles.boxText}>{problem}</p>
        </div>
        <div className={styles.box + ' ' + styles.liked}>
          <div className={styles.boxHeader}>
            <span className="material-symbols-outlined">favorite</span>
            Ce mi-a plăcut
          </div>
          <p className={styles.boxText}>{liked}</p>
        </div>
        <div className={styles.box + ' ' + styles.resultBox}>
          <div className={styles.boxHeader}>
            <span className="material-symbols-outlined">rocket_launch</span>
            Rezultat
          </div>
          <p className={styles.boxTextBold}>{result}</p>
        </div>
      </div>
      <div className={styles.tags}>
        {tags.map((tag, index) => (
          <span key={index} className={styles.tag}>
            <span className="material-symbols-outlined">{tag.icon}</span>{' '}
            {tag.label}
          </span>
        ))}
      </div>
    </div>
  )
}

export default TestimonialCard
