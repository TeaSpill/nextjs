import Image from 'next/image.js' 
import Tile from './Tile'
import Header from './Header'
import styles from './TileImage.module.css'

export default function TileImage({ title, text, image }) {
  if (title == "") {
    return (
      <div className={styles.tileimage}>
        <Image alt="Image from a tile" className={styles.image} src={image} width={128} height={128} />

        <div className={styles.textcen}>
          <p>{text}</p>
        </div>
      </div>
    )
  } else {
    return (
     <div className={styles.tileimage}>
       <Image alt="Image from a tile" className={styles.image} src={image} width={128} height={128} />
         
       <div className={styles.text}>
         <Header title={title}></Header>  

          <p>{text}</p>
        </div>
     </div>
    )
  }
}
