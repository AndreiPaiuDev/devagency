import styles from './TestimonialsSection.module.css'
import TestimonialCard from './TestimonialCard'

const testimonials = [
  {
    name: 'Alex Popescu',
    role: 'CEO @ TechFlow',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCTU8V8ZgfZHLj91mS4NrOx8ETr6AQ2jSz0TrrAekDQQ0oMr9TumweCXk8JTxZAGsSV2kBGX8Q2wFNZKceGeR03mMFdAB4Nvt4HrJNCva-SAImFW0cJ5cOUlADdnEeyoQ7TZ6O6vzCYSUWa_dJDVRSn4rKajU8zpvq8olWMYx05qsD_AzZJ2FPUuWPxH0E1D103HrmzLRWoOPs3ySqkNPbuaSXK_THk45Bd4eQaff4bTaM5h-crXurP-8Sn2J_tnfwsIRwpItLAiA',
    problem: 'Cod vechi (legacy) care ne încetinea dezvoltarea de noi feature-uri.',
    liked: 'Transparența totală și sprint-urile agile săptămânale.',
    result: 'MVP complet lansat pe piață în doar 3 luni.',
    tags: [
      { icon: 'thumb_up', label: 'MVP Lansat' },
      { icon: 'domain', label: 'SaaS' },
    ],
  },
  {
    name: 'Elena Radu',
    role: 'Manager @ ShopSmart',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAKGUUVkfynqscNOVUUuHAJyDDrIBiDVI2BWVheVzrCMvSktBgcbyIBkCqN8UasUwyUXYbuG6gfAeD3vG2FXDEGg1piUhgt7dHi-b62wbL7zbn68-McJ8zHt1sp7RcBcIXLuEQ8anLJIaV88bvElT5VSaCvL9IMDGgorioBlWaT1ayS9LEiQSVWOdk5qGWzICUNaoAXlAaDLJrCfPbpIXHf4ptTNUjqA14auhFETW-h9qv95Qk3oAAxWdZ_adimHmpomo-lZvNzqg',
    problem: 'Rată mică de conversie pe dispozitivele mobile.',
    liked: 'Focusul obsesiv pe UX și soluțiile creative propuse.',
    result: '+40% la checkout pe mobil în prima lună.',
    tags: [
      { icon: 'thumb_up', label: '+40% Conversie' },
      { icon: 'shopping_cart', label: 'E-commerce' },
    ],
  },
  {
    name: 'Mihai Ionescu',
    role: 'Director @ AdVantage',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDHgZwVUiWc-_XFn1u2mobmy11hFfFJE74neMsdqv-2yswjKE8dqtDvqohg9sblB5uFWEN5pzivTy581IlSqM047HR42Bniwh8AmHnRLTsgosAhcrKP8nxf5PzJ3-AMZLRYYx_g6JFPoRe3JGbpTA9foad98736RcYuZJmpV_ASp0N5NPozbbAPN7G96GwVUqnq3ouolUPJauktCCCoqFWQ09TPhQuxuj1pUu1OG9QmV1IzY14bDZCU3yW0T2xXydPBOUxekhki7g',
    problem:
      'Nevoia urgentă a unui tool intern custom pentru raportare.',
    liked: 'Comunicarea directă, fără bla-bla corporatist.',
    result: 'Peste 20 ore/săptămână economisite prin automatizare.',
    tags: [
      { icon: 'thumb_up', label: '20h Salvate' },
      { icon: 'build', label: 'Internal Tool' },
    ],
  },
]

function TestimonialsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <div className={styles.badge}>
          <span className="material-symbols-outlined">verified</span>
          <span>Rezultate reale</span>
        </div>
        <h2 className={styles.title}>
          Nu ne crede pe cuvânt. <br className={styles.break} />
          <span className={styles.highlight}>Ascultă-i pe ei.</span>
        </h2>
        <p className={styles.subtitle}>
          Oamenii din spatele companiilor cu care lucrăm sunt cea mai bună
          carte de vizită a noastră. Fără corporate speak, doar povești despre
          probleme rezolvate.
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
