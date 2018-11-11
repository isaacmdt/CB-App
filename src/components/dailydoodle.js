import React from 'react'
import styles from './dailydoodle.module.css'

const DailyDoodle = ({ word }) => (
  <div className={styles.pageTitle}>
    <div className={styles.doodleOfTheDayWrapper}>
      <div className={styles.doodleOfTheDayCell}>
        <h1>{word}</h1>
      </div>
    </div>
  </div>
)

export default DailyDoodle
