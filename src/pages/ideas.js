import React from 'react'

import Layout from '../components/layout'
import styles from './ideas.module.css'

const Ideas = () => (
  <Layout>
    <div>
      <h1>Tell me your Ideas!</h1>
      <h3>Do you have a word to put into the list?</h3>
      <form
        className={styles.ideaForm}
        name="CBideas"
        method="POST"
        data-netlify-recaptcha="true"
        data-netlify="true"
        netlify
      >
        <input type="hidden" name="form-name" value="CBideas" />
        <p>
          <label>
            <input
              type="text"
              name="eHandle"
              placeholder="@socialhandle"
              require
            />
          </label>
        </p>
        <p>
          <label>
            <select name="channel">
              <option value="Instagram">Instagram</option>
              <option value="Twitter">Twitter</option>
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
            />
          </label>
        </p>
        <p>
          <button className={styles.formButton} type="submit">
            Send
          </button>
        </p>
      </form>
    </div>
  </Layout>
)

export default Ideas
