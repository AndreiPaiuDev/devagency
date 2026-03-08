import { Link } from 'react-router-dom'
import { useTranslation } from '../hooks/useTranslation'
import styles from './PortfolioPreview.module.css'

function PortfolioPreview() {
  const t = useTranslation()
  
  const projects = [
    {
      title: t.portfolioPreview.projects.scaleup.title,
      category: t.portfolioPreview.projects.scaleup.category,
      image: '/projects/velarishome.png',
      url: 'https://velarishome.vercel.app/',
      description: t.portfolioPreview.projects.scaleup.description,
      tags: t.portfolioPreview.projects.scaleup.tags,
      stats: {
        metric1: t.portfolioPreview.projects.scaleup.metric1,
        metric2: t.portfolioPreview.projects.scaleup.metric2
      }
    },
    {
      title: t.portfolioPreview.projects.fashion.title,
      category: t.portfolioPreview.projects.fashion.category,
      image: '/projects/weatherpro.png',
      url: 'https://weatherpro-ro.vercel.app/',
      description: t.portfolioPreview.projects.fashion.description,
      tags: t.portfolioPreview.projects.fashion.tags,
      stats: {
        metric1: t.portfolioPreview.projects.fashion.metric1,
        metric2: t.portfolioPreview.projects.fashion.metric2
      }
    },
    {
      title: t.portfolioPreview.projects.chocolateWorld.title,
      category: t.portfolioPreview.projects.chocolateWorld.category,
      image: '/projects/chocolateworld.png',
      description: t.portfolioPreview.projects.chocolateWorld.description,
      tags: t.portfolioPreview.projects.chocolateWorld.tags,
      stats: {
        metric1: t.portfolioPreview.projects.chocolateWorld.metric1,
        metric2: t.portfolioPreview.projects.chocolateWorld.metric2
      }
    }
  ]
  
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>
            <span className="material-symbols-outlined">work</span>
            {t.portfolioPreview.badge}
          </div>
          <h2 className={styles.title}>
            {t.portfolioPreview.title}{' '}
            <span className={styles.highlight}>{t.portfolioPreview.titleHighlight}</span>
          </h2>
          <p className={styles.subtitle}>
            {t.portfolioPreview.subtitle}
          </p>
        </div>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={project.image} alt={project.title} loading="lazy" className={styles.cardImg} />
                <div className={styles.overlay} />
                <div className={styles.stats}>
                  <div className={styles.statItem}>
                    <span className={styles.statValue}>{project.stats.metric1}</span>
                    <span className={styles.statLabel}>{t.portfolioPreview.growth}</span>
                  </div>
                  <div className={styles.statItem}>
                    <span className={styles.statValue}>{project.stats.metric2}</span>
                    <span className={styles.statLabel}>{t.portfolioPreview.users}</span>
                  </div>
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.category}>{project.category}</div>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDescription}>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.cta}>
          <Link to="/portofoliu" className={styles.button}>
            {t.portfolioPreview.cta}
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default PortfolioPreview
