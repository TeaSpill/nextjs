import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head />
      <Sidebar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
