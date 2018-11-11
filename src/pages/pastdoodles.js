import React from 'react'
import Layout from '../components/layout'
import styles from './pastdoodles.module.css'

const DailyDoodle = () => (
  <Layout>
    <div className={styles.pastDoodleWrapper}>
      <h2>Past Doodles Words</h2>
      <ul className={styles.pastList}>
        <li>Past Word</li>
        <li>Past Word</li>
        <li>Past Word</li>
        <li>Past Word</li>
      </ul>
    </div>
  </Layout>
)

export default DailyDoodle
