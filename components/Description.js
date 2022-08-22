import styles from './Description.module.css'

export default function Description({ description }) {
  return <p className={styles.description}>{description}</p>
}
