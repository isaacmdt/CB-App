import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import DailyBox from '../components/dailybox'

const IndexPage = ({ data }) => {
  var numCount = null
  var word = null

  var now = new Date()
  var countTo = new Date('Apr,4,2019,00:00:00')
  var difference = now - countTo
  numCount = Math.floor((difference / (60 * 60 * 1000 * 24)) * 1)

  if (numCount < 0) {
    word = '2019'
  } else if (numCount > data.allWordsYaml.edges.length) {
    word = 'Say What! We Ran out of words!'
  } else {
    word = data.allWordsYaml.edges[numCount].node.word
  }

  return (
    <Layout>
      <div
        style={{
          maxWidth: '450px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <DailyBox box={word} />
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
