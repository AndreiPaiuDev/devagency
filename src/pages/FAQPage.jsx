import { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './FAQPage.module.css'
import Footer from '../components/Footer'

function FAQPage() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: 'Cât durează să dezvoltați o aplicație web de la zero?',
      answer: 'Depinde foarte mult de complexitate. Un MVP (Minimum Viable Product) funcțional poate fi gata în 4-8 săptămâni, timp în care ne concentrăm pe funcționalitățile core. Un produs complet, cu integrări complexe și scalare, poate dura câteva luni. Filozofia noastră e simplă: livrăm repede, testăm, și iterăm.'
    },
    {
      question: 'Oferiți mentenanță după lansare?',
      answer: 'Absolut. O aplicație vie are nevoie de grijă. Oferim pachete de mentenanță lunară care includ update-uri de securitate, optimizări de performanță și mici modificări. Nu te lăsăm singur cu serverele după ce am tăiat panglica virtuală.'
    },
    {
      question: 'Cum ne dați un preț estimativ?',
      answer: 'Transparența e cheie. Începem cu o discuție de "discovery" unde mapăm tot ce ai nevoie. Apoi, îți oferim o estimare bazată pe ore de dezvoltare sau un preț fix pentru proiecte bine definite. Fără costuri ascunse "apărute pe parcurs".'
    },
    {
      question: 'Pot să văd portofoliul vostru înainte să decid?',
      answer: 'Sigur că da! Avem o secțiune dedicată în meniu, dar putem să îți trimitem și studii de caz specifice industriei tale. Ne mândrim cu ce construim.'
    },
    {
      question: 'Ce tehnologii folosiți?',
      answer: 'Lucrăm cu stack-uri moderne și dovedite: React, Next.js, Node.js, Python, PostgreSQL, MongoDB. Alegem tehnologia în funcție de nevoile proiectului, nu invers. Prioritatea e să construim ceva rapid, scalabil și ușor de întreținut.'
    },
    {
      question: 'Lucrați cu clienți din afara României?',
      answer: 'Da, avem experiență cu clienți internaționali. Comunicăm fluent în română și engleză, iar procesele noastre de lucru remote sunt bine rodate. Fusurile orare diferite nu sunt o problemă - ne adaptăm programului tău.'
    },
    {
      question: 'Ce se întâmplă dacă nu sunt mulțumit de rezultat?',
      answer: 'Lucrăm iterativ și transparent. Vei vedea progresul săptămânal și vom face ajustări pe parcurs. Dacă totuși ceva nu e în regulă, avem politici clare de revizuire și modificări până când produsul se aliniază cu viziunea ta.'
    }
  ]

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
            FAQ
          </div>
          <h1 className={styles.title}>
            Întrebări pe care le auzim des <br className={styles.break} />
            <span className={styles.highlight}>(și răspunsuri sincere)</span>
          </h1>
          <p className={styles.subtitle}>
            Știm că dezvoltarea unui proiect software poate părea complicată. Iată câteva lămuriri ca să intrăm în subiect direct.
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
              <h2 className={styles.ctaTitle}>Nu ai găsit răspunsul?</h2>
              <p className={styles.ctaText}>
                Suntem aici să te ajutăm cu orice nelămurire tehnică sau administrativă. Hai să povestim despre ideea ta.
              </p>
              <Link to="/contact" className={styles.ctaButton}>
                <span>Hai să discutăm!</span>
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
