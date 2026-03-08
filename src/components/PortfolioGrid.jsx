import { useTranslation } from '../hooks/useTranslation'
import styles from './PortfolioGrid.module.css'
import ProjectCard from './ProjectCard'

function PortfolioGrid() {
  const t = useTranslation()
  
  const projects = [
    {
      title: t.portfolioGrid.projects.scaleup.title,
      category: t.portfolioGrid.projects.scaleup.category,
      icon: 'domain',
      image: '/projects/velarishome.png',
      url: 'https://velarishome.vercel.app/',
      challenge: t.portfolioGrid.projects.scaleup.challenge,
      solution: t.portfolioGrid.projects.scaleup.solution,
      metric: t.portfolioGrid.projects.scaleup.metric,
      metricLabel: t.portfolioGrid.projects.scaleup.metricLabel,
      color: 'primary',
    },
    {
      title: t.portfolioGrid.projects.fashion.title,
      category: t.portfolioGrid.projects.fashion.category,
      icon: 'cloud',
      image: '/projects/weatherpro.png',
      url: 'https://weatherpro-ro.vercel.app/',
      challenge: t.portfolioGrid.projects.fashion.challenge,
      solution: t.portfolioGrid.projects.fashion.solution,
      metric: t.portfolioGrid.projects.fashion.metric,
      metricLabel: t.portfolioGrid.projects.fashion.metricLabel,
      color: 'purple',
    },
    {
      title: t.portfolioGrid.projects.chocolateWorld.title,
      category: t.portfolioGrid.projects.chocolateWorld.category,
      icon: 'cookie',
      image: '/projects/chocolateworld.png',
      challenge: t.portfolioGrid.projects.chocolateWorld.challenge,
      solution: t.portfolioGrid.projects.chocolateWorld.solution,
      metric: t.portfolioGrid.projects.chocolateWorld.metric,
      metricLabel: t.portfolioGrid.projects.chocolateWorld.metricLabel,
      color: 'emerald',
    },
    {
      title: t.portfolioGrid.projects.dinails.title,
      category: t.portfolioGrid.projects.dinails.category,
      icon: 'spa',
      image: '/projects/dinailsuk.png',
      url: 'https://dinailsuk.vercel.app/',
      challenge: t.portfolioGrid.projects.dinails.challenge,
      solution: t.portfolioGrid.projects.dinails.solution,
      metric: t.portfolioGrid.projects.dinails.metric,
      metricLabel: t.portfolioGrid.projects.dinails.metricLabel,
      color: 'primary',
    },
    {
      title: t.portfolioGrid.projects.barbershop.title,
      category: t.portfolioGrid.projects.barbershop.category,
      icon: 'content_cut',
      image: '/projects/barbershop-seven-kappa.png',
      url: 'https://barbershop-seven-kappa.vercel.app/',
      challenge: t.portfolioGrid.projects.barbershop.challenge,
      solution: t.portfolioGrid.projects.barbershop.solution,
      metric: t.portfolioGrid.projects.barbershop.metric,
      metricLabel: t.portfolioGrid.projects.barbershop.metricLabel,
      color: 'purple',
    },
    {
      title: t.portfolioGrid.projects.webstudio.title,
      category: t.portfolioGrid.projects.webstudio.category,
      icon: 'code',
      image: '/projects/webstudio.png',
      url: 'https://webstudio-flame.vercel.app/',
      challenge: t.portfolioGrid.projects.webstudio.challenge,
      solution: t.portfolioGrid.projects.webstudio.solution,
      metric: t.portfolioGrid.projects.webstudio.metric,
      metricLabel: t.portfolioGrid.projects.webstudio.metricLabel,
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
