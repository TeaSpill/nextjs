//import { Fragment } from 'react/cjs/react.production.min'
import styles from './Tile.module.css'

export default function Tile({ title, link, description }) {
  return <a href={link} className={styles.tile}>{title} <br/> {description} </a>
}
