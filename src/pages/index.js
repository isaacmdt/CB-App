import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import DailyBox from '../components/dailybox'

const IndexPage = ({ data }) => {
  var numCount = null

  var now = new Date()
  var countTo = new Date('Nov,26,2018,00:00:00')
  var difference = now - countTo
  numCount = Math.floor((difference / (60 * 60 * 1000 * 24)) * 1)
  console.log(data.allWordsYaml.edges)
  console.log(numCount)
  return (
    <Layout>
      <div
        style={{
          maxWidth: '300px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <DailyBox box={data.allWordsYaml.edges[numCount].node.word} />
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
