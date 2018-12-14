import React from 'react'
import { Link } from 'gatsby'

const PostLink = ({ post }) => (
  <div style={{ marginBottom: '1em' }}>
    <h3 style={{ marginBottom: '1px' }}>
      <Link
        to={post.frontmatter.path}
        style={{ textDecoration: 'none', color: 'black' }}
      >
        {post.frontmatter.title}
      </Link>
    </h3>

    <Link
      to={post.frontmatter.path}
      style={{ textDecoration: 'none', color: 'black' }}
    >
      <p
        style={{
          color: 'Grey',
          marginTop: '.5em',
          marginBottom: '.2em',
        }}
      >
        {post.excerpt}
      </p>
    </Link>
    <sup style={{ color: 'lightGrey', marginTop: '.5em' }}>
      {post.frontmatter.date}
    </sup>
  </div>
)

export default PostLink
