import { useTranslation } from '../hooks/useTranslation'
import styles from './PortfolioGrid.module.css'
import ProjectCard from './ProjectCard'

function PortfolioGrid() {
  const t = useTranslation()
  
  const projects = [
    {
      title: t.portfolioGrid.projects.scaleup.title,
      category: t.portfolioGrid.projects.scaleup.category,
      icon: 'rocket_launch',
      image:
        '/images/project-scaleup.jpg',
      challenge: t.portfolioGrid.projects.scaleup.challenge,
      solution: t.portfolioGrid.projects.scaleup.solution,
      metric: t.portfolioGrid.projects.scaleup.metric,
      metricLabel: t.portfolioGrid.projects.scaleup.metricLabel,
      color: 'primary',
    },
    {
      title: t.portfolioGrid.projects.fashion.title,
      category: t.portfolioGrid.projects.fashion.category,
      icon: 'shopping_bag',
      image:
        '/images/project-fashion.jpg',
      challenge: t.portfolioGrid.projects.fashion.challenge,
      solution: t.portfolioGrid.projects.fashion.solution,
      metric: t.portfolioGrid.projects.fashion.metric,
      metricLabel: t.portfolioGrid.projects.fashion.metricLabel,
      color: 'purple',
    },
    {
      title: t.portfolioGrid.projects.payfast.title,
      category: t.portfolioGrid.projects.payfast.category,
      icon: 'account_balance_wallet',
      image:
        '/images/project-payfast.jpg',
      challenge: t.portfolioGrid.projects.payfast.challenge,
      solution: t.portfolioGrid.projects.payfast.solution,
      metric: t.portfolioGrid.projects.payfast.metric,
      metricLabel: t.portfolioGrid.projects.payfast.metricLabel,
      color: 'emerald',
    },
  ]
  
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioGrid
