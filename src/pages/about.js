import React from 'react'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <div
      style={{
        maxWidth: '300px',
        marginBottom: '1.45rem',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <h1>Hello!</h1>
      <p>Thank you for using Creative Box.</p>
      <h1>How to use CreaveBox</h1>
      <p>When you open the app you will see one single describing word.</p>
      <p>
        Now what you do with this word totaly up to you. Write a poem. Start of
        a mind map. Draw a doodle. Film as 15 second movie. Create a Jingle.
        Paint that canvas. Design a logo. Find a color that discribes that word.
        What ever it is just create something.
      </p>
      <p>
        Now trash it, put it on the wall, save it in a book, post it online.
        Reavel in the fact that today you creative something.
      </p>
      <p>
        If you posted it here tag{' '}
        <a href src="https://www.instagram.com/creativebox.app/">
          @creativebox.app
        </a>{' '}
        on IG and use the hashtag #mycreativebox
      </p>
    </div>
  </Layout>
)

export default SecondPage
