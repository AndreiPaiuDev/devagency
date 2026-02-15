import Hero from '../components/Hero'
import ServicesPreview from '../components/ServicesPreview'
import Stats from '../components/Stats'
import PortfolioPreview from '../components/PortfolioPreview'
import TestimonialsSection from '../components/TestimonialsSection'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

function HomePage() {
  return (
    <>
      <Hero dark />
      <ServicesPreview />
      <Stats />
      <PortfolioPreview />
      <TestimonialsSection />
      <CTA />
      <Footer />
    </>
  )
}

export default HomePage
