import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // moving explore arrow;

  let handleMouseEnter = () => {
    let arrow = document.querySelector(".arrow-box");
    arrow.style.opacity = 1;
  };
  let handleMouseLeave = () => {
    let arrow = document.querySelector(".arrow-box");
    arrow.style.opacity = 0;
  };
  let handleMouseOver = () => {
    let arrow = document.querySelector(".arrow-box");

  };

  return (
    <>
      <Head>
        <title>Space Tourism | Home</title>
      </Head>
      <main id={styles.main}>
        <div className={styles.body_col} id={styles.into_col}></div>
        <div className={styles.body_col} id={styles.explore_col}>
          <div
            onMouseEnter={() => {
              handleMouseEnter();
            }}
            onMouseLeave={() => {
              handleMouseLeave();
            }}
            onMouseOver={() => {}}
            className="explore_btn"
            id={styles.explore_btn}
          >
            <h1>EXPLORE</h1>
            <div className="arrow-box" id={styles.arrow_box}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                id="arrow"
              >
                <path d="M1 26h43.586l-6.293 6.293 1.414 1.414L48.414 25l-8.707-8.707-1.414 1.414L44.586 24H1z"></path>
              </svg>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
