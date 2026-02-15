import styles from './FeatureGrid.module.css'
import chatIcon from '../assets/icon-chat.svg'
import bulbIcon from '../assets/icon-bulb.svg'
import boltIcon from '../assets/icon-bolt.svg'
import mailIcon from '../assets/icon-mail.svg'
import phoneIcon from '../assets/icon-phone.svg'

const features = [
  {
    title: 'Consultare Gratuită',
    description:
      'Discutăm ideea ta fără nicio obligație. Cafeaua e din partea noastră.',
    icon: chatIcon,
    delay: '0.05s',
  },
  {
    title: 'Idei inovatoare',
    description:
      'Găsim soluții tehnice creative la care poate nu te-ai gândit.',
    icon: bulbIcon,
    delay: '0.12s',
  },
  {
    title: 'Răspuns Rapid',
    description: 'Promitem să răspundem la solicitări în maxim 24h.',
    icon: boltIcon,
    delay: '0.19s',
  },
]

function FeatureGrid() {
  return (
    <div className={styles.grid}>
      {features.map((feature) => (
        <article
          key={feature.title}
          className={styles.card}
          style={{ '--delay': feature.delay }}
        >
          <span className={styles.iconWrap}>
            <img src={feature.icon} alt="" aria-hidden="true" />
          </span>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </article>
      ))}
      <article
        className={`${styles.card} ${styles.contactCard}`}
        style={{ '--delay': '0.26s' }}
      >
        <div className={styles.contactRow}>
          <span className={styles.iconSoft}>
            <img src={mailIcon} alt="" aria-hidden="true" />
          </span>
          <span>andreipaiudev@gmail.com</span>
        </div>
        <div className={styles.contactRow}>
          <span className={styles.iconSoft}>
            <img src={phoneIcon} alt="" aria-hidden="true" />
          </span>
          <span>+44 7367 438 601</span>
        </div>
      </article>
    </div>
  )
}

export default FeatureGrid
