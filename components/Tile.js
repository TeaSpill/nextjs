import hStyles from './hStyles.module.css'
import styles from './Tile.module.css'

function Header({ title }) {
  return (
    <h1 className={hStyles.header}>{title}</h1>
  )
}

export default function Tile({ title, text }) {
  if (title == "") {
    return (
      <div className={styles.textcen}>
        <p>{text}</p>
      </div>
    )
  } else {
    return (
     <div className={styles.tileimage}>
       <div className={styles.text}>
         <Header title={title}></Header>  

          <p>{text}</p>
        </div>
     </div>
    )
  }
}
