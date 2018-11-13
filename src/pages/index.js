import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import DailyDoodle from '../components/dailydoodle'

const IndexPage = ({ data }) => {
  var numCount = null

  var now = new Date()
  var countTo = new Date('nov,9,2018,08:55:00')
  var difference = now - countTo
  numCount = Math.floor((difference / (60 * 60 * 1000 * 24)) * 1)

  return (
    <Layout>
      <div
        style={{
          maxWidth: '300px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <DailyDoodle word={data.allWordsYaml.edges[numCount].node.word} />
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query WordsQuery {
    allWordsYaml {
      edges {
        node {
          word
        }
      }
    }
  }
`
