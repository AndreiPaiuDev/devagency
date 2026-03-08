import { useTranslation } from '../hooks/useTranslation'
import styles from './TestimonialsSection.module.css'
import TestimonialCard from './TestimonialCard'

function TestimonialsSection() {
  const t = useTranslation()
  
  const testimonials = [
    {
      name: t.testimonials.items.velaris.name,
      role: t.testimonials.items.velaris.role,
      image:
        '/images/avatar-alex.jpg',
      problem: t.testimonials.items.velaris.problem,
      liked: t.testimonials.items.velaris.liked,
      result: t.testimonials.items.velaris.result,
      tags: [
        { icon: 'thumb_up', label: t.testimonials.items.velaris.tag1 },
        { icon: 'home', label: t.testimonials.items.velaris.tag2 },
      ],
    },
    {
      name: t.testimonials.items.chocolateWorld.name,
      role: t.testimonials.items.chocolateWorld.role,
      image:
        '/images/avatar-mihai.jpg',
      problem: t.testimonials.items.chocolateWorld.problem,
      liked: t.testimonials.items.chocolateWorld.liked,
      result: t.testimonials.items.chocolateWorld.result,
      tags: [
        { icon: 'thumb_up', label: t.testimonials.items.chocolateWorld.tag1 },
        { icon: 'shopping_cart', label: t.testimonials.items.chocolateWorld.tag2 },
      ],
    },
    {
      name: t.testimonials.items.dinails.name,
      role: t.testimonials.items.dinails.role,
      image:
        '/images/avatar-elena.jpg',
      problem: t.testimonials.items.dinails.problem,
      liked: t.testimonials.items.dinails.liked,
      result: t.testimonials.items.dinails.result,
      tags: [
        { icon: 'thumb_up', label: t.testimonials.items.dinails.tag1 },
        { icon: 'phone_iphone', label: t.testimonials.items.dinails.tag2 },
      ],
    },
  ]
  
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.badge}>
          <span className="material-symbols-outlined">verified</span>
          <span>{t.testimonials.badge}</span>
        </div>
        <h2 className={styles.title}>
          {t.testimonials.title} <br className={styles.break} />
          <span className={styles.highlight}>{t.testimonials.titleHighlight}</span>
        </h2>
        <p className={styles.subtitle}>
          {t.testimonials.subtitle}
        </p>
      </div>
      <div className={styles.container}>
        <div className={styles.grid}>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
