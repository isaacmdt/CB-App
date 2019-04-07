import React from 'react'

import Layout from '../components/layout'
import styles from './ideas.module.css'

const Ideas = () => (
  <Layout>
    <div className={styles.ideaWrapper}>
      <h1>Tell me your Ideas!</h1>
      <h3>Do you have a word to put into the list?</h3>
      <div className={styles.ideaFormWrapper}>
        <form
          className={styles.ideaForm}
          name="CB Ideas"
          method="POST"
          data-netlify="true"
          netlify
          data-netlify-recaptcha="true"
          action="/thankyou"
        >
          <input type="hidden" name="form-name" value="CB Ideas" />
          <p>
            <label>
              <input
                type="text"
                name="eHandle"
                placeholder="@socialhandle or Name"
                require
              />
            </label>
          </p>
          <p>
            <label>
              <select name="channel" required>
                <option value="Name" disabled selected>
                  Links to...
                </option>
                <option value="Instagram">Instagram</option>
                <option value="Twitter">Twitter</option>
                <option value="Name">Name</option>
              </select>
            </label>
          </p>
          <p />

          <p>
            <label>
              <input
                type="text"
                name="wordIdea"
                placeholder="CreativeBox idea!"
                required
              />
            </label>
          </p>
          <div data-netlify-recaptcha="true" />
          <p>
            <button className={styles.formButton} type="submit">
              Send
            </button>
          </p>
        </form>
      </div>
    </div>
  </Layout>
)

export default Ideas
