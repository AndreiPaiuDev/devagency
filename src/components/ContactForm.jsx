import { useState } from 'react'
import styles from './ContactForm.module.css'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.formWrapper}>
          <div className={styles.header}>
            <h2 className={styles.title}>Scrie-ne un semn</h2>
            <p className={styles.subtitle}>
              Completează detaliile și revenim cât ai zice "deploy".
            </p>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.field}>
              <p className={styles.label}>Nume</p>
              <div className={styles.inputWrapper}>
                <div className={styles.icon}>
                  <span className="material-symbols-outlined">person</span>
                </div>
                <input
                  className={styles.input}
                  name="name"
                  onChange={handleChange}
                  placeholder="Cum să ne adresăm?"
                  type="text"
                  value={formData.name}
                />
              </div>
            </label>
            <label className={styles.field}>
              <p className={styles.label}>Email</p>
              <div className={styles.inputWrapper}>
                <div className={styles.icon}>
                  <span className="material-symbols-outlined">alternate_email</span>
                </div>
                <input
                  className={styles.input}
                  name="email"
                  onChange={handleChange}
                  placeholder="Unde îți putem răspunde?"
                  type="email"
                  value={formData.email}
                />
              </div>
            </label>
            <label className={styles.field}>
              <p className={styles.label}>Tip Proiect</p>
              <div className={styles.inputWrapper}>
                <div className={styles.icon}>
                  <span className="material-symbols-outlined">category</span>
                </div>
                <select
                  className={styles.select}
                  name="projectType"
                  onChange={handleChange}
                  value={formData.projectType}
                >
                  <option disabled value="">
                    Ce construim?
                  </option>
                  <option value="saas">Platformă SaaS</option>
                  <option value="ecommerce">E-commerce</option>
                  <option value="website">Website Prezentare</option>
                  <option value="custom">Aplicație Custom</option>
                </select>
                <div className={styles.iconRight}>
                  <span className="material-symbols-outlined">expand_more</span>
                </div>
              </div>
            </label>
            <label className={styles.field}>
              <p className={styles.label}>Mesaj</p>
              <textarea
                className={styles.textarea}
                name="message"
                onChange={handleChange}
                placeholder="Povestește-ne pe scurt despre proiectul tău..."
                value={formData.message}
              />
            </label>
            <button className={styles.button} type="submit">
              Trimite-ne un semn!
              <span className="material-symbols-outlined">send</span>
            </button>
            <p className={styles.disclaimer}>
              Prin trimiterea acestui formular ești de acord cu{' '}
              <a href="#">politica noastră de confidențialitate</a>.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
