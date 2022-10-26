import type { NextPage } from "next";
import React, { useEffect } from "react";

import styles from "../styles/Home.module.css";
import Main from "../components/Main";
import Meta from "../components/Meta";
import ReactGA from 'react-ga';

const Home: NextPage = () => {

  useEffect(() => {
    ReactGA.initialize('G-YL86TQ1N49');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className={styles.container}>
      <Meta />
      <main className={styles.main}>
        <Main param="random" />
      </main>
    </div>
  );
};

export default Home;
