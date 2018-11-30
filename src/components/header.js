import React from 'react'
import { Link } from 'gatsby'
import styles from './header.module.css'
import { Helmet } from 'react-helmet'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#212121',
      marginBottom: '1.45rem',
    }}
  >
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <title>Creative Box</title>
      <link rel="canonical" href="http://mysite.com/example" />
      <link rel="apple-touch-icon" href="/icons/icon-512x512.png" />
    </Helmet>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0, display: 'inline', fontSize: '1.5rem' }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <div className={styles.nav}>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/pastboxes">Old Boxes</Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default Header
