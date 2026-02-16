import { Link } from 'react-router-dom'
import { useTranslation } from '../hooks/useTranslation'
import styles from './PortfolioPreview.module.css'

function PortfolioPreview() {
  const t = useTranslation()
  
  const projects = [
    {
      title: t.portfolioPreview.projects.scaleup.title,
      category: t.portfolioPreview.projects.scaleup.category,
      description: t.portfolioPreview.projects.scaleup.description,
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDgOOxtNlpaIpdWS2ezFtco3iO4Ojvh-DaVzWzDAspJPcvuRdeJmJYSXE7uXAqB8ctGRAMbFx-ph4wJ69P_U4YLADO7rxVoKdEZz-bE6pqrn8HLX31Sa5q6IafoedJodZSwuecjJ4MV8dP51ybxkiCjbfpviNdlwh4XQtG_Sgtp0LgGLNOaF5v5NV8B0XvGJK3nQECcMEIegAN32fH6NY_KaWYYeuH7ipLOCYxE9H0WrRQ14AtkhxTzgZaWZK3x0sesaq5O5z9akw',
      tags: t.portfolioPreview.projects.scaleup.tags,
      stats: { 
        metric1: t.portfolioPreview.projects.scaleup.metric1, 
        metric2: t.portfolioPreview.projects.scaleup.metric2 
      },
    },
    {
      title: t.portfolioPreview.projects.fashion.title,
      category: t.portfolioPreview.projects.fashion.category,
      description: t.portfolioPreview.projects.fashion.description,
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAitt-p_BsU5pT6OXBP7-DO0qWPFoEay1s6BtqLsauAOnFK1uZaw7J3Hoxf2z3mnuvXiTaSmZ3TgdcRzVx6HBfNoX7TVyzXApep3Y0ZX6eDDrdusdhAyOBIDm3n2Yd_rWTZfeY-T-1rP7tq5p5ahB0G6oj6RvWYuu4_OAHImDAWyPmoLzVFh62E7cyCQasw6_-2sMS4ZXCOIrqD15WTf2BanIpmmsxHbXFfyxgsuQTdatn6lEvIjdRaJ5o8Z-i7MTDSe6VDUrcH3Q',
      tags: t.portfolioPreview.projects.fashion.tags,
      stats: { 
        metric1: t.portfolioPreview.projects.fashion.metric1, 
        metric2: t.portfolioPreview.projects.fashion.metric2 
      },
    },
    {
      title: t.portfolioPreview.projects.payfast.title,
      category: t.portfolioPreview.projects.payfast.category,
      description: t.portfolioPreview.projects.payfast.description,
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDntecIY3-G_6oDhj0J55pcLKFyn-XqGRBXol6PiC87f14q6iwsC4SNlkNnUSLnFhQjyQr9USnlOCj7ASNPBwJXQ9e89De_yWr3KjLHhwtPv1GLi9KyVyHG6p7lqzAb-zaD_TlHrRSX2-McrMtf8lN5vPo9M17XOIk08M_KjgTbt5a8GYXEF3A6doPlqjUJyKDro7SB7nINHGeKguaMVCNx_z7wEWNqSgbw8rBbjb5-c09VkA8ekmQgBAJMA5MclSitC7ltUrvH4w',
      tags: t.portfolioPreview.projects.payfast.tags,
      stats: { 
        metric1: t.portfolioPreview.projects.payfast.metric1, 
        metric2: t.portfolioPreview.projects.payfast.metric2 
      },
    },
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
              <div
                className={styles.imageWrapper}
                style={{ backgroundImage: `url(${project.image})` }}
              >
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
