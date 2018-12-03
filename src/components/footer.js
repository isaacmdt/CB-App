import React from 'react'
import { Link } from 'gatsby'
import styles from './footer.module.css'

import icArchive from '../images/icArchiveBoxes.png'
import icBlog from '../images/icBlog.png'
import icAbout from '../images/icAbout.png'

const Footer = () => (
  <div className={styles.footerNavWrapper} style={{}}>
    <div className={styles.footerNav}>
      <Link to="/pastBoxes">
        <img
          src={icArchive}
          alt="Got to Past Box Archives"
          className={styles.icons}
        />
        <span className={styles.subtext}>Old Boxes</span>
      </Link>

      <Link to="/blog">
        <img src={icBlog} alt="Go to Blog Page" className={styles.icons} />
        <span className={styles.subtext}>Blog</span>
      </Link>

      <Link to="/about">
        <img src={icAbout} alt="Got to About Page" className={styles.icons} />
        <span className={styles.subtext}>About</span>
      </Link>
    </div>
  </div>
)

export default Footer
