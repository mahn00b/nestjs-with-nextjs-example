import React from 'react';
import { NextPage } from 'next';
import NextHead from 'next/head';
import Quote from '../components/Quote';
import styles from '../styles/home.module.css';

const quote = {
  "quote_id": 0,
  "quote": "Yes, I’d like to speak to your office manager, please. Yes, hello. This is Michael Scott. I am the Regional Manager of Dunder Mifflin Paper Products. Just wanted to talk to you manager-a-manger. All right. Done deal. Thank you very much, sir. You’re a gentleman and a scholar. Oh, I’m sorry. OK. I’m sorry. My mistake. That was a woman I was talking to, so… She had a very low voice. Probably a smoker, so… So that’s the way it’s done.",
  "character": "Michael"
};

const Home: NextPage = () => {
  return (
    <>
      <NextHead>
        <title>Random Office Quotes</title>
      </NextHead>
      <body className={styles.Home}>
        <main>
          <h1>Get a random Office Quote</h1>
          <section>
            <Quote quote={quote} />
            <div className={styles.buttonContainer}>
              <button className={styles.quoteButton}>
                Click here to get a random quote
              </button>
            </div>
          </section>
        </main>
      </body>
    </>
  )
};

export default Home;
