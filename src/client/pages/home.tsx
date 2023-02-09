import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';
import NextHead from 'next/head';
import Quote from '../components/Quote';
import { getARandomQuote } from '../data/quotes';
import styles from '../styles/home.module.css';

const quote = {
  "quote_id": 0,
  "quote": "Yes, I’d like to speak to your office manager, please. Yes, hello. This is Michael Scott. I am the Regional Manager of Dunder Mifflin Paper Products. Just wanted to talk to you manager-a-manger. All right. Done deal. Thank you very much, sir. You’re a gentleman and a scholar. Oh, I’m sorry. OK. I’m sorry. My mistake. That was a woman I was talking to, so… She had a very low voice. Probably a smoker, so… So that’s the way it’s done.",
  "character": "Michael"
};

const Home: NextPage = () => {
  const [currentQuote, setCurrentQuote] = useState<Quote>()

  const handleClick = async () => {
    const quote = await getARandomQuote();

    setCurrentQuote(quote);
  }

  useEffect(() => {
    getARandomQuote()
      .then((quote) => {
        setCurrentQuote(quote);
      })
  }, [])

  return (
    <>
      <NextHead>
        <title>Random Office Quotes</title>
        <meta name="description" content="An app that provides answers to life's greatest mysteries." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </NextHead>
      <h1 className={styles.title}>Get a Random Office Quote</h1>
      <main className={styles.Home}>
        <section>
          <Quote quote={currentQuote} />
          <div className={styles.buttonContainer}>
            <button onClick={handleClick} className={styles.quoteButton}>
              Click here to get a random quote
            </button>
          </div>
        </section>
      </main>
    </>
  )
};

export default Home;
