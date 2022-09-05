import Link from 'next/link'
import Image from 'next/image'
import styles from './Sidebar.module.css'

function Spacer({  }) {
  return (
    <li className={styles.li}>
      <h2> | </h2>
    </li>
  )
}

function SideLink({ text, link }) {
  return (
    <li className={styles.li}>
      <Link href={link}>
        <a>
          <h2>{text}</h2>
        </a>
      </Link>
    </li>
  )
}

export default function Sidebar({  }) {
  return (
    <div className={styles.sidebarmain}>
      <ul className={styles.ul}>
        <Image className={styles.image} src="/icon.png" alt="Sidebar icon" width={64} height={64}></Image>
        <Spacer />
        <SideLink text="Home" link="/"></SideLink>
        <Spacer />
        <SideLink text="Projects" link="/projects"></SideLink>
        <Spacer />
      </ul>
    </div>
  )
}
