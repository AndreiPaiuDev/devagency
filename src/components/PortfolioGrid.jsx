import styles from './PortfolioGrid.module.css'
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'ScaleUp App',
    category: 'SaaS Startup',
    icon: 'rocket_launch',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDgOOxtNlpaIpdWS2ezFtco3iO4Ojvh-DaVzWzDAspJPcvuRdeJmJYSXE7uXAqB8ctGRAMbFx-ph4wJ69P_U4YLADO7rxVoKdEZz-bE6pqrn8HLX31Sa5q6IafoedJodZSwuecjJ4MV8dP51ybxkiCjbfpviNdlwh4XQtG_Sgtp0LgGLNOaF5v5NV8B0XvGJK3nQECcMEIegAN32fH6NY_KaWYYeuH7ipLOCYxE9H0WrRQ14AtkhxTzgZaWZK3x0sesaq5O5z9akw',
    challenge:
      'Onboarding manual ineficient care bloca creșterea și frustra utilizatorii.',
    solution:
      'Portal self-service automatizat complet, cu tutoriale interactive.',
    metric: '40%',
    metricLabel: 'Lower Churn',
    color: 'primary',
  },
  {
    title: 'FashionHub',
    category: 'E-commerce',
    icon: 'shopping_bag',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAitt-p_BsU5pT6OXBP7-DO0qWPFoEay1s6BtqLsauAOnFK1uZaw7J3Hoxf2z3mnuvXiTaSmZ3TgdcRzVx6HBfNoX7TVyzXApep3Y0ZX6eDDrdusdhAyOBIDm3n2Yd_rWTZfeY-T-1rP7tq5p5ahB0G6oj6RvWYuu4_OAHImDAWyPmoLzVFh62E7cyCQasw6_-2sMS4ZXCOIrqD15WTf2BanIpmmsxHbXFfyxgsuQTdatn6lEvIjdRaJ5o8Z-i7MTDSe6VDUrcH3Q',
    challenge:
      'Site picat de Black Friday din cauza traficului imens neanticipat.',
    solution:
      'Migrare pe arhitectură cloud scalabilă (AWS) cu auto-scaling.',
    metric: '99.99%',
    metricLabel: 'Uptime',
    color: 'purple',
  },
  {
    title: 'PayFast Ro',
    category: 'FinTech',
    icon: 'account_balance_wallet',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDntecIY3-G_6oDhj0J55pcLKFyn-XqGRBXol6PiC87f14q6iwsC4SNlkNnUSLnFhQjyQr9USnlOCj7ASNPBwJXQ9e89De_yWr3KjLHhwtPv1GLi9KyVyHG6p7lqzAb-zaD_TlHrRSX2-McrMtf8lN5vPo9M17XOIk08M_KjgTbt5a8GYXEF3A6doPlqjUJyKDro7SB7nINHGeKguaMVCNx_z7wEWNqSgbw8rBbjb5-c09VkA8ekmQgBAJMA5MclSitC7ltUrvH4w',
    challenge:
      'Cod legacy lent, greu de întreținut, cu bug-uri frecvente la plăți.',
    solution: 'Refactorizare completă React & Node.js, microservicii.',
    metric: '2x',
    metricLabel: 'Viteză Dev',
    color: 'emerald',
  },
]

function PortfolioGrid() {
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
