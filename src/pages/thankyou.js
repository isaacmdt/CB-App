import React from 'react'
import Layout from '../components/layout'

import Img from 'gatsby-image'
import { graphql } from 'gatsby'

export default ({ data }) => (
  <Layout>
    <div style={{ textAlign: 'center' }}>
      <h1>Thank You</h1>

      <div
        style={{
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
        }}
      >
        <div style={{ flex: '1', maxWidth: '200px' }}>
          <p style={{ maxWidth: '200px' }}>
            We got your idea.
            <br />
            I'll let you know if we put it on the list.
          </p>
          <Img fluid={data.file.childImageSharp.fluid} />
        </div>
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "ThankYouIdeas.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
