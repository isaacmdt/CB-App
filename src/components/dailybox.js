import React from 'react'
import styles from './dailybox.module.css'

const DailyBox = ({ box }) => (
  <div className={styles.pageTitle}>
    <div className={styles.boxOfTheDayWrapper}>
      <div className={styles.boxOfTheDayCell}>
        <h1>{box}</h1>
      </div>
    </div>
  </div>
)

export default DailyBox
