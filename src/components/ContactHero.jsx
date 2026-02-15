import styles from './ContactHero.module.css'

const benefits = [
  {
    icon: 'chat_bubble',
    title: 'Consultare Gratuită',
    description:
      'Discutăm ideea ta fără nicio obligație. Cafeaua e din partea noastră.',
  },
  {
    icon: 'lightbulb',
    title: 'Idei Inovatoare',
    description:
      'Găsim soluții tehnice creative la care poate nu te-ai gândit.',
  },
  {
    icon: 'bolt',
    title: 'Răspuns Rapid',
    description: 'Promitem să răspundem la solicitări în maxim 24h.',
  },
]

function ContactHero() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.kicker}>
            <span className="material-symbols-outlined">waving_hand</span>
            Salutare
          </div>
          <h1 className={styles.title}>
            Hai să Facem <br className={styles.break} /> Lucruri Mărețe{' '}
            <span className={styles.highlight}>Împreună!</span>
          </h1>
          <p className={styles.subtitle}>
            Nu-ți face griji, nu mușcăm. Suntem aici să transformăm ideea ta în
            cod curat, scalabil și gata de lansare.
          </p>
          <div className={styles.grid}>
            {benefits.map((benefit, index) => (
              <div key={index} className={styles.card}>
                <div className={styles.iconWrapper}>
                  <span className="material-symbols-outlined">{benefit.icon}</span>
                </div>
                <div>
                  <h3 className={styles.cardTitle}>{benefit.title}</h3>
                  <p className={styles.cardDescription}>{benefit.description}</p>
                </div>
              </div>
            ))}
            <div className={styles.contactCard}>
              <div className={styles.contactItem}>
                <span className="material-symbols-outlined">mail</span>
                <a href="mailto:andreipaiudev@gmail.com">andreipaiudev@gmail.com</a>
              </div>
              <div className={styles.contactInfo}>
                <span className="material-symbols-outlined">call</span>
                <a href="tel:+447367438601">+44 7367 438 601</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactHero
