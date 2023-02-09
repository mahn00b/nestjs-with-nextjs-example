import styles from './Loader.module.css'

export default function Loader() {
  return (
    <div
      className={styles.Loader}
      role="alert"
      aria-progress="busy"
    />
  )
}
