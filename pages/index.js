import Head from 'next/head'
import Image from 'next/image'
import Tile from '../components/Tile.js'
import Header from '../components/Header.js'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>TeaSpillStudios</title>
        <meta name="description" content="TeaSpillStudio's website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header title = "TeaSpillStudios"></Header>

        <p className={styles.description}>
          A place to show information of projects and things going on.
        </p>

        <h1 className={styles.title}>
          Projects
        </h1><h1></h1>

        <div className={styles.grid}>
          <Tile title="TeaEngine" link="https://github.com/TeaSpillStudios/TeaEngine" description="A Nelua and C game engine"></Tile>
          <Tile title="TeaFS" link="https://github.com/TeaSpillStudios/TeaFS" description="A C library to modify the file system"></Tile>
          <Tile title="Teamviewer ARM Installer" link="https://github.com/TeaSpillStudios/teamviewer-installer-for-pi" description="A quick way to install teamviewer on ARM, used in Pi Apps"></Tile>
          <Tile title="Bread" link="https://github.com/TeaSpillStudios/Bread" description="A program so you can finally type sudo make bread nad it prints bread"></Tile>
          <Tile title="Proto pong" link="https://github.com/TeaSpillStudios/Proto-Pong-Game" description="A little C++ game"></Tile>
          <Tile title="Nelua UI Manager" link="https://github.com/TeaSpillStudios/nelua-ui-manager" description="A way to make UI in Nelua"></Tile>
          <Tile title="Nelua Event Manager" link="https://github.com/nelua-event-manager" description="A way to handle events in Nelua"></Tile>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>TeaSpillStudios</p>

        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>

        <p>TeaSpillStudios</p>
      </footer>
    </div>
  )
}
