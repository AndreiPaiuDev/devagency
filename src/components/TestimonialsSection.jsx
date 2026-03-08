import { useTranslation } from '../hooks/useTranslation'
import styles from './TestimonialsSection.module.css'
import TestimonialCard from './TestimonialCard'

function TestimonialsSection() {
  const t = useTranslation()
  
  const testimonials = [
    {
      name: t.testimonials.items.alex.name,
      role: t.testimonials.items.alex.role,
      image:
        '/images/avatar-alex.jpg',
      problem: t.testimonials.items.alex.problem,
      liked: t.testimonials.items.alex.liked,
      result: t.testimonials.items.alex.result,
      tags: [
        { icon: 'thumb_up', label: t.testimonials.items.alex.tag1 },
        { icon: 'domain', label: t.testimonials.items.alex.tag2 },
      ],
    },
    {
      name: t.testimonials.items.elena.name,
      role: t.testimonials.items.elena.role,
      image:
        '/images/avatar-elena.jpg',
      problem: t.testimonials.items.elena.problem,
      liked: t.testimonials.items.elena.liked,
      result: t.testimonials.items.elena.result,
      tags: [
        { icon: 'thumb_up', label: t.testimonials.items.elena.tag1 },
        { icon: 'shopping_cart', label: t.testimonials.items.elena.tag2 },
      ],
    },
    {
      name: t.testimonials.items.mihai.name,
      role: t.testimonials.items.mihai.role,
      image:
        '/images/avatar-mihai.jpg',
      problem: t.testimonials.items.mihai.problem,
      liked: t.testimonials.items.mihai.liked,
      result: t.testimonials.items.mihai.result,
      tags: [
        { icon: 'thumb_up', label: t.testimonials.items.mihai.tag1 },
        { icon: 'build', label: t.testimonials.items.mihai.tag2 },
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
