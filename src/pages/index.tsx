import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import Main from "../components/Main";
import Meta from "../components/Meta";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Meta />
      <main className={styles.main}>
        <Main param="start" />
      </main>
    </div>
  );
};

export default Home;
/* teste coment */