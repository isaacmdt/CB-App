import React from 'react'

import Layout from '../components/layout'
import DailyDoodle from '../components/dailydoodle'

const IndexPage = () => (
  <Layout>
    <div
      style={{
        maxWidth: '300px',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <DailyDoodle />
    </div>
  </Layout>
)

export default IndexPage
