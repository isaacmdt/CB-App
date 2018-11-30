import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import styles from './pastBoxes.module.css'

const PastWord = ({ data }) => {
  var numCount = null

  var now = new Date()
  var countTo = new Date('Nov,26,2018,00:00:00')
  var difference = now - countTo
  numCount = Math.floor((difference / (60 * 60 * 1000 * 24)) * 1)
  return (
    <Layout>
      <div className={styles.pastBoxesWrapper}>
        <h2>Past Boxes</h2>

        <ul className={styles.pastList}>
          {data.allWordsYaml.edges.slice(0, numCount).map(({ node }, index) => (
            <li key={index}>{node.word}</li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

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
