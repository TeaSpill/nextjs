import Image from 'next/image.js' 
import Link from 'next/link'
import Header from './Header'
import styles from './ClickableTileImage.module.css'

export default function TileImage({ title, text, link, image }) {
  if (title == "") {
    return (
      <Link href={link}>
        <a>
          <div className={styles.tileimage}>
           <Image alt="Image from a tile" className={styles.image} src={image} width={128} height={128} />

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
            <Image alt="Image from a tile" className={styles.image} src={image} width={128} height={128} />
       
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
