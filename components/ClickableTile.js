import Link from 'next/link'
import Header from './Header'
import styles from './ClickableTile.module.css'

export default function TileImage({ title, text, link }) {
  if (title == "") {
    return (
      <Link href={link}>
        <a>
          <div className={styles.tileimage}>
            <div className={styles.textcen}>
              <p>{text}</p>
            </div>
          </div>
        </a>
      </Link>
    )
  } else {
    return (
      <Link href={link}>
        <a>
          <div className={styles.tileimage}>
            <div className={styles.text}>
              <Header title={title}></Header>  

              <p>{text}</p>
            </div>
          </div>
        </a>
      </Link>
    )
  }
}
