import styles from './TrustedBy.module.css'

const logos = [
  { name: 'Acorn', icon: 'hexagon' },
  { name: 'GemTech', icon: 'diamond' },
  { name: 'Volter', icon: 'bolt' },
  { name: 'Flowbase', icon: 'waves' },
  { name: 'Stacked', icon: 'layers' },
]

function TrustedBy() {
  return (
    <section className={styles.section}>
      <div>
        <p>Trusted by 50+ tech companies globally</p>
        <div className={styles.logos}>
          {logos.map((logo) => (
            <div key={logo.name} className={styles.logo}>
              <span className="material-symbols-outlined">{logo.icon}</span>
              {logo.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustedBy
