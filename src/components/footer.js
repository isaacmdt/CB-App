import React from 'react'
import { Link } from 'gatsby'

const Footer = () => (
  <div
    style={{
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingTop: '2rem',
      paddingBottom: '1rem',
    }}
  >
    <hr />
    <p style={{ textAlign: 'center' }}>
      Created by{' '}
      <a href="http://www.isaacdeltoro.com" style={{ color: 'grey' }}>
        IsaacDT
      </a>
    </p>
  </div>
)

export default Footer
