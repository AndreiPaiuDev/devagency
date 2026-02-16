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
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDgOOxtNlpaIpdWS2ezFtco3iO4Ojvh-DaVzWzDAspJPcvuRdeJmJYSXE7uXAqB8ctGRAMbFx-ph4wJ69P_U4YLADO7rxVoKdEZz-bE6pqrn8HLX31Sa5q6IafoedJodZSwuecjJ4MV8dP51ybxkiCjbfpviNdlwh4XQtG_Sgtp0LgGLNOaF5v5NV8B0XvGJK3nQECcMEIegAN32fH6NY_KaWYYeuH7ipLOCYxE9H0WrRQ14AtkhxTzgZaWZK3x0sesaq5O5z9akw',
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
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAitt-p_BsU5pT6OXBP7-DO0qWPFoEay1s6BtqLsauAOnFK1uZaw7J3Hoxf2z3mnuvXiTaSmZ3TgdcRzVx6HBfNoX7TVyzXApep3Y0ZX6eDDrdusdhAyOBIDm3n2Yd_rWTZfeY-T-1rP7tq5p5ahB0G6oj6RvWYuu4_OAHImDAWyPmoLzVFh62E7cyCQasw6_-2sMS4ZXCOIrqD15WTf2BanIpmmsxHbXFfyxgsuQTdatn6lEvIjdRaJ5o8Z-i7MTDSe6VDUrcH3Q',
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
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDntecIY3-G_6oDhj0J55pcLKFyn-XqGRBXol6PiC87f14q6iwsC4SNlkNnUSLnFhQjyQr9USnlOCj7ASNPBwJXQ9e89De_yWr3KjLHhwtPv1GLi9KyVyHG6p7lqzAb-zaD_TlHrRSX2-McrMtf8lN5vPo9M17XOIk08M_KjgTbt5a8GYXEF3A6doPlqjUJyKDro7SB7nINHGeKguaMVCNx_z7wEWNqSgbw8rBbjb5-c09VkA8ekmQgBAJMA5MclSitC7ltUrvH4w',
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
