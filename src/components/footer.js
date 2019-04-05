import React from 'react'
import { Link } from 'gatsby'
import styles from './footer.module.css'

import icIdeas from '../images/icIdeas.png'
import icBlog from '../images/icBlog.png'
import icAbout from '../images/icAbout.png'
import icHome from '../images/icHome.png'

const Footer = () => (
  <div className={styles.footerNavWrapper} style={{}}>
    <div className={styles.footerNav}>
      <Link to="/">
        <img src={icHome} alt="Go Home" className={styles.icons} />
        <span className={styles.subtext}>Home</span>
      </Link>
      <Link to="/ideas">
        <img src={icIdeas} alt="Send in Ideas" className={styles.icons} />
        <span className={styles.subtext}>Ideas</span>
      </Link>

      <Link to="/blog">
        <img src={icBlog} alt="Go to Blog Page" className={styles.icons} />
        <span className={styles.subtext}>Blog</span>
      </Link>

      <Link to="/about">
        <img src={icAbout} alt="Go to About Page" className={styles.icons} />
        <span className={styles.subtext}>About</span>
      </Link>
    </div>
  </div>
)

export default Footer
