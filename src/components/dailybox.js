import React from 'react'
import styles from './dailybox.module.css'
import icIG from '../images/icIG.png'

const LanuchInfo = props => {
  if (props.box === '2019') {
    return (
      <div>
        <h1>Starting January 2019</h1>
        <p>
          Follow us on Instagram
          <br />
          <a
            href="https://www.instagram.com/creativebox.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={icIG}
              style={{ height: '14px' }}
              alt="Instagram glyph icon"
            />{' '}
            creativebox.app
          </a>
        </p>
      </div>
    )
  } else {
    return <h1>{props.box}</h1>
  }
}

const DailyBox = ({ box }) => (
  <div className={styles.pageTitle}>
    <div className={styles.boxOfTheDayWrapper}>
      <div className={styles.boxOfTheDayCell}>
        <LanuchInfo box={box} />
      </div>
    </div>
  </div>
)

export default DailyBox
