import React from 'react'
import PostLink from '../components/post-link'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Layout from '../components/layout'

const Blog = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
      <h1>theBLOG</h1>
      {Posts}
    </Layout>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
          edges {
            node {
              id
              excerpt(pruneLength: 120)
              frontmatter {
                date(formatString: "MMM DD, YYYY")
                path
                title
              }
            }
          }
        }
      }
    `}
    render={data => <Blog data={data} {...props} />}
  />
)

Blog.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }).isRequired,
          }).isRequired,
        })
      ).isRequired,
    }).isRequired,
  }).isRequired,
}
