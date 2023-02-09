import Loader from '../Loader';
import styles from './Quote.module.css';

interface QuoteProps {
  /** A quote definition */
  quote: Quote;
  /** An identifier use to select the element during testing. */
  dataTestid?: string
}

export default function QuoteDisplay({
  quote,
  dataTestid
}: QuoteProps) {
  return (
    <div className={styles.Quote} data-testid={dataTestid}>
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
