import Loader from '../Loader';
import styles from './Quote.module.css';

interface QuoteProps {
  /** A quote definition */
  quote: Quote;
}

export default function QuoteDisplay({
  quote,
}: QuoteProps) {
  return (
    <div className={styles.Quote}>
      {
      quote
        ?
      (
      <>
      <blockquote cite={quote.character}>
        {quote.quote}
      </blockquote>
      <span>
        by {quote.character}
      </span>
     </>
      )
        :
      (<Loader />)
      }

    </div>
  )
}
