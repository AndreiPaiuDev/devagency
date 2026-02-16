import { useTranslation } from '../hooks/useTranslation'
import styles from './TechStack.module.css'

const technologies = [
  { name: 'React', icon: 'code', color: '#61DAFB' },
  { name: 'Node.js', icon: 'dns', color: '#339933' },
  { name: 'Python', icon: 'terminal', color: '#3776AB' },
  { name: 'AWS', icon: 'cloud', color: '#FF9900' },
  { name: 'Next.js', icon: 'layers', color: '#ffffff' },
  { name: 'Tailwind', icon: 'style', color: '#38B2AC' },
]

function TechStack() {
  const t = useTranslation()
  
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h3 className={styles.title}>{t.techStack.title}</h3>
        <div className={styles.grid}>
          {technologies.map((tech, index) => (
            <div key={index} className={styles.tech}>
              <span
                className="material-symbols-outlined"
                style={{ color: tech.color }}
              >
                {tech.icon}
              </span>
              <span className={styles.name}>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack
