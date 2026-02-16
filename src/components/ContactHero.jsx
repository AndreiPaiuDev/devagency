import { useTranslation } from '../hooks/useTranslation'
import styles from './ContactHero.module.css'

function ContactHero() {
  const t = useTranslation()
  
  const benefits = [
    {
      icon: 'chat_bubble',
      title: t.contactHero.benefits.consultation.title,
      description: t.contactHero.benefits.consultation.description,
    },
    {
      icon: 'lightbulb',
      title: t.contactHero.benefits.innovation.title,
      description: t.contactHero.benefits.innovation.description,
    },
    {
      icon: 'bolt',
      title: t.contactHero.benefits.response.title,
      description: t.contactHero.benefits.response.description,
    },
  ]
  
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.kicker}>
            <span className="material-symbols-outlined">waving_hand</span>
            {t.contactHero.badge}
          </div>
          <h1 className={styles.title}>
            {t.contactHero.title} <br className={styles.break} /> {t.contactHero.titleBreak}{' '}
            <span className={styles.highlight}>{t.contactHero.titleHighlight}</span>
          </h1>
          <p className={styles.subtitle}>
            {t.contactHero.subtitle}
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
              <div className={styles.contactItem}>
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
