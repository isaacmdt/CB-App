import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import DailyDoodle from '../components/dailydoodle'

const IndexPage = ({ data }) => {
  console.log(data.allDataYaml.edges)
  return (
    <Layout>
      <div
        style={{
          maxWidth: '300px',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        {/*<p>{data.allDataYaml.edges.node.words.map(,1)}</p>*/}
        <DailyDoodle word={'Cheese'} />
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query WordsQuery {
    allDataYaml {
      edges {
        node {
          words {
            word
          }
        }
      }
    }
  }
`
