import styles from './ProcessSteps.module.css'

const steps = [
  {
    number: '01',
    icon: 'coffee',
    title: 'Analiză & Strategie',
    description:
      'Ne bem cafeaua împreună, te ascultăm și transformăm ideea ta vagă într-un plan tehnic concret și o strategie de lansare.',
  },
  {
    number: '02',
    icon: 'terminal',
    title: 'Dezvoltare & Design',
    description:
      'Scriem cod curat, scalabil și implementăm un design modern. Te ținem la curent cu demo-uri săptămânale interactive.',
  },
  {
    number: '03',
    icon: 'rocket_launch',
    title: 'Lansare & Creștere',
    description:
      'Testăm totul riguros, apăsăm butonul de lansare și monitorizăm performanța. Suntem gata de scale-up când ești și tu!',
  },
]

function ProcessSteps() {
  return (
    <section className={styles.section}>
      <div className={styles.pattern} />
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Cum lucrăm? Simplu, în 3 Pași.</h2>
          <p className={styles.subtitle}>Procesul nostru fără dureri de cap.</p>
        </div>
        <div className={styles.stepsWrapper}>
          <div className={styles.line} />
          <div className={styles.grid}>
            {steps.map((step, index) => (
              <div key={index} className={styles.step}>
                <div className={styles.iconCircle}>
                  <span className="material-symbols-outlined">{step.icon}</span>
                  <div className={styles.badge}>{step.number}</div>
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProcessSteps
