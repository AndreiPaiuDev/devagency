import { useState } from 'react'
import Modal from './Modal'
import PrivacyPolicy from './PrivacyPolicy'
import { useTranslation } from '../hooks/useTranslation'
import styles from './ContactForm.module.css'

function ContactForm() {
  const t = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  })
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false)
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
    // Clear error for this field when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: '',
      })
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = t.contactForm.name.error
    }
    
    if (!formData.email.trim()) {
      newErrors.email = t.contactForm.email.errorRequired
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t.contactForm.email.errorInvalid
    }
    
    if (!formData.projectType) {
      newErrors.projectType = t.contactForm.projectType.error
    }
    
    if (!formData.message.trim()) {
      newErrors.message = t.contactForm.message.errorRequired
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t.contactForm.message.errorMinLength
    }
    
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
      
      console.log('Access Key check:', accessKey ? 'Found' : 'Missing', accessKey?.substring(0, 8) + '...') // Debug
      
      // Check if access key is configured
      if (!accessKey || accessKey === 'YOUR_WEB3FORMS_ACCESS_KEY') {
        console.error('Web3Forms access key is not configured')
        throw new Error(t.contactForm.errorNotConfigured)
      }
      
      // Prepare form data for Web3Forms
      const formPayload = {
        access_key: accessKey,
        name: formData.name,
        email: formData.email,
        subject: `Cerere Proiect DevAgency - ${formData.projectType}`,
        message: `
Tip Proiect: ${formData.projectType}

Mesaj de la ${formData.name} (${formData.email}):

${formData.message}
        `.trim(),
        from_name: formData.name,
        to_email: "andreipaiudev@gmail.com"
      }
      
      // Send email using Web3Forms API
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formPayload)
      })
      
      const result = await response.json()
      
      if (response.ok && result.success) {
        // Show success message
        setSubmitStatus('success')
        
        // Reset form after a delay
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            projectType: '',
            message: '',
          })
          setSubmitStatus(null)
        }, 5000)
      } else {
        throw new Error(result.message || 'Failed to send email')
      }
      
    } catch (error) {
      console.error('Error:', error)
      setSubmitStatus('error')
      setErrorMessage(error.message || t.contactForm.errorGeneric)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.formWrapper}>
            <div className={styles.header}>
              <h2 className={styles.title}>{t.contactForm.title}</h2>
              <p className={styles.subtitle}>
                {t.contactForm.subtitle}
              </p>
            </div>
            <form className={styles.form} onSubmit={handleSubmit}>
              <label className={styles.field}>
                <p className={styles.label}>{t.contactForm.name.label}</p>
                <div className={styles.inputWrapper}>
                  <div className={styles.icon}>
                    <span className="material-symbols-outlined">person</span>
                  </div>
                  <input
                    className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                    name="name"
                    onChange={handleChange}
                    placeholder={t.contactForm.name.placeholder}
                    type="text"
                    value={formData.name}
                  />
                </div>
                {errors.name && <p className={styles.error}>{errors.name}</p>}
              </label>
              <label className={styles.field}>
                <p className={styles.label}>{t.contactForm.email.label}</p>
                <div className={styles.inputWrapper}>
                  <div className={styles.icon}>
                    <span className="material-symbols-outlined">alternate_email</span>
                  </div>
                  <input
                    className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                    name="email"
                    onChange={handleChange}
                    placeholder={t.contactForm.email.placeholder}
                    type="email"
                    value={formData.email}
                  />
                </div>
                {errors.email && <p className={styles.error}>{errors.email}</p>}
              </label>
              <label className={styles.field}>
                <p className={styles.label}>{t.contactForm.projectType.label}</p>
                <div className={styles.inputWrapper}>
                  <div className={styles.icon}>
                    <span className="material-symbols-outlined">category</span>
                  </div>
                  <select
                    className={`${styles.select} ${errors.projectType ? styles.inputError : ''}`}
                    name="projectType"
                    onChange={handleChange}
                    value={formData.projectType}
                  >
                    <option disabled value="">
                      {t.contactForm.projectType.placeholder}
                    </option>
                    <option value="webApp">{t.contactForm.projectType.options.webApp}</option>
                    <option value="ecommerce">{t.contactForm.projectType.options.ecommerce}</option>
                    <option value="corporate">{t.contactForm.projectType.options.corporate}</option>
                    <option value="mvp">{t.contactForm.projectType.options.mvp}</option>
                    <option value="maintenance">{t.contactForm.projectType.options.maintenance}</option>
                    <option value="other">{t.contactForm.projectType.options.other}</option>
                  </select>
                  <div className={styles.iconRight}>
                    <span className="material-symbols-outlined">expand_more</span>
                  </div>
                </div>
                {errors.projectType && <p className={styles.error}>{errors.projectType}</p>}
              </label>
              <label className={styles.field}>
                <p className={styles.label}>{t.contactForm.message.label}</p>
                <textarea
                  className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                  name="message"
                  onChange={handleChange}
                  placeholder={t.contactForm.message.placeholder}
                  value={formData.message}
                />
                {errors.message && <p className={styles.error}>{errors.message}</p>}
              </label>
              
              {submitStatus === 'success' && (
                <div className={styles.successMessage}>
                  <span className="material-symbols-outlined">check_circle</span>
                  {t.contactForm.success}
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className={styles.errorMessage}>
                  <span className="material-symbols-outlined">error</span>
                  {errorMessage || t.contactForm.errorGeneric}
                </div>
              )}
              
              <button 
                className={styles.button} 
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? t.contactForm.submitting : t.contactForm.submit}
                <span className="material-symbols-outlined">send</span>
              </button>
              <p className={styles.disclaimer}>
                {t.contactForm.privacy}{' '}
                <button 
                  type="button"
                  onClick={() => setIsPrivacyOpen(true)}
                  className={styles.privacyLink}
                >
                  {t.contactForm.privacyLink}
                </button>.
              </p>
            </form>
          </div>
        </div>
      </section>

      <Modal 
        isOpen={isPrivacyOpen} 
        onClose={() => setIsPrivacyOpen(false)}
        title={t.contactForm.privacyLink}
      >
        <PrivacyPolicy />
      </Modal>
    </>
  )
}

export default ContactForm
