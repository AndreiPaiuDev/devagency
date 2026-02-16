import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from '../hooks/useTranslation'
import styles from './FAQPage.module.css'
import Footer from '../components/Footer'

function FAQPage() {
  const t = useTranslation()
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = t.faqPage.questions.map(item => ({
    question: item.q,
    answer: item.a
  }))

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={styles.badge}>
            <span className="material-symbols-outlined">help</span>
            {t.faqPage.badge}
          </div>
          <h1 className={styles.title}>
            {t.faqPage.title} <br className={styles.break} />
            <span className={styles.highlight}>{t.faqPage.titleHighlight}</span>
          </h1>
          <p className={styles.subtitle}>
            {t.faqPage.subtitle}
          </p>
        </div>
      </section>

      <main className={styles.main}>
        <div className={styles.container}>

          <div className={styles.faqList}>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`${styles.faqItem} ${openIndex === index ? styles.open : ''}`}
              >
                <button
                  className={styles.question}
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openIndex === index}
                >
                  <h3>{faq.question}</h3>
                  <div className={styles.icon}>
                    <span className="material-symbols-outlined">expand_more</span>
                  </div>
                </button>
                <div className={styles.answer}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className={styles.cta}>
            <div className={styles.ctaCard}>
              <div className={styles.ctaIcon}>
                <span className="material-symbols-outlined">chat_bubble</span>
              </div>
              <h2 className={styles.ctaTitle}>{t.faqPage.cta.title}</h2>
              <p className={styles.ctaText}>
                {t.faqPage.cta.description}
              </p>
              <Link to="/contact" className={styles.ctaButton}>
                <span>{t.faqPage.cta.button}</span>
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default FAQPage
