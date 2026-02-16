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
        'https://lh3.googleusercontent.com/aida-public/AB6AXuCTU8V8ZgfZHLj91mS4NrOx8ETr6AQ2jSz0TrrAekDQQ0oMr9TumweCXk8JTxZAGsSV2kBGX8Q2wFNZKceGeR03mMFdAB4Nvt4HrJNCva-SAImFW0cJ5cOUlADdnEeyoQ7TZ6O6vzCYSUWa_dJDVRSn4rKajU8zpvq8olWMYx05qsD_AzZJ2FPUuWPxH0E1D103HrmzLRWoOPs3ySqkNPbuaSXK_THk45Bd4eQaff4bTaM5h-crXurP-8Sn2J_tnfwsIRwpItLAiA',
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
        'https://lh3.googleusercontent.com/aida-public/AB6AXuAKGUUVkfynqscNOVUUuHAJyDDrIBiDVI2BWVheVzrCMvSktBgcbyIBkCqN8UasUwyUXYbuG6gfAeD3vG2FXDEGg1piUhgt7dHi-b62wbL7zbn68-McJ8zHt1sp7RcBcIXLuEQ8anLJIaV88bvElT5VSaCvL9IMDGgorioBlWaT1ayS9LEiQSVWOdk5qGWzICUNaoAXlAaDLJrCfPbpIXHf4ptTNUjqA14auhFETW-h9qv95Qk3oAAxWdZ_adimHmpomo-lZvNzqg',
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
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDHgZwVUiWc-_XFn1u2mobmy11hFfFJE74neMsdqv-2yswjKE8dqtDvqohg9sblB5uFWEN5pzivTy581IlSqM047HR42Bniwh8AmHnRLTsgosAhcrKP8nxf5PzJ3-AMZLRYYx_g6JFPoRe3JGbpTA9foad98736RcYuZJmpV_ASp0N5NPozbbAPN7G96GwVUqnq3ouolUPJauktCCCoqFWQ09TPhQuxuj1pUu1OG9QmV1IzY14bDZCU3yW0T2xXydPBOUxekhki7g',
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
