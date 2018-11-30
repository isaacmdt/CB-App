import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import styles from './pastboxes.module.css'

const PastWord = ({ data }) => {
  var numCount = null

  var now = new Date()
  var countTo = new Date('Jan,01,2019,00:00:00')
  var difference = now - countTo
  numCount = Math.floor((difference / (60 * 60 * 1000 * 24)) * 1)

  if (numCount < 0) {
    numCount = 0
  }

  return (
    <Layout>
      <div className={styles.pastboxesWrapper}>
        <h2>Past Boxes</h2>
        <p>
          Here is where all the old Creative Boxes come to retire. Feel free to
          reuse these words.
        </p>

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
