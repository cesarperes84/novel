import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Main from '../components/Main';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Novell App</title>
        <meta name="description" content="Novel é uma aplicação web onde diariamente..." />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
      </Head>

      <main className={styles.main}>
        <Header />
        <Main />
      </main>
    </div>
  )
}

export default Home
