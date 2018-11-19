import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import styles from './pastBoxes.module.css'

const PastWord = ({ data }) => (
  <Layout>
    <div className={styles.pastBoxesWrapper}>
      <h2>Past Boxes</h2>

      <ul className={styles.pastList}>
        {data.allWordsYaml.edges.map(({ node }, index) => (
          <li key={index}>{node.word}</li>
        ))}
      </ul>
    </div>
  </Layout>
)

export default PastWord

export const query = graphql`
  query PastWordQuery {
    allWordsYaml {
      edges {
        node {
          word
        }
      }
    }
  }
`
