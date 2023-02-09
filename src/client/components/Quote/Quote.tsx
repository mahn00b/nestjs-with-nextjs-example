import styles from './Quote.module.css';

interface QuoteProps {
  /** A quote definition */
  quote: Quote;
}

export default function QuoteDisplay({
  quote: {
    quote,
    character
  }
}: QuoteProps) {
  return (
    <div className={styles.Quote}>
      <blockquote cite={character}>
        {quote}
      </blockquote>
      <span>
        by {character}
      </span>
    </div>
  )
}
