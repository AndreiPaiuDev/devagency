import { useTranslation } from '../hooks/useTranslation'
import styles from './ProcessSteps.module.css'

function ProcessSteps() {
  const t = useTranslation()
  
  const steps = [
    {
      number: t.processSteps.steps.analyze.number,
      icon: 'coffee',
      title: t.processSteps.steps.analyze.title,
      description: t.processSteps.steps.analyze.description,
    },
    {
      number: t.processSteps.steps.develop.number,
      icon: 'terminal',
      title: t.processSteps.steps.develop.title,
      description: t.processSteps.steps.develop.description,
    },
    {
      number: t.processSteps.steps.launch.number,
      icon: 'rocket_launch',
      title: t.processSteps.steps.launch.title,
      description: t.processSteps.steps.launch.description,
    },
  ]
  
  return (
    <section className={styles.section}>
      <div className={styles.pattern} />
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t.processSteps.title}</h2>
          <p className={styles.subtitle}>{t.processSteps.subtitle}</p>
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
