import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // moving explore arrow;

  let handleMouseEnter = () => {
    let arrow = document.querySelector(".arrow-box");
    arrow.style.scale = 2;
    arrow.style.opacity = 1;
    arrow.style.transform = "rotate(-10deg)";
  };

  let handleMouseLeave = () => {
    let arrow = document.querySelector(".arrow-box");
    arrow.style.scale = 0;
    arrow.style.opacity = 0;
    arrow.style.transform = "rotate(0deg)";
  };

  let handleMouseMove = (e) => {
    let arrow = document.querySelector(".arrow-box");
    let x = e.clientX - 48;
    let y = e.clientY - 48;
    arrow.style.left = x + "px";
    arrow.style.top = y + "px";
  };

  let handleClick = () => {
    let arrow = document.querySelector(".arrow-box");
    arrow.style.scale = 2.5;
    setTimeout(() => {
      arrow.style.scale = 2;
    }, 100);
  };

  return (
    <>
      <Head>
        <title>Space Tourism | Home</title>
      </Head>
      <main id={styles.main}>
        <div className={styles.body_col} id={styles.info_col}>
          <div className={styles.info_box}>
            <h2>SO, YOU WANT TO TRAVEL TO</h2>
            <h1>SPACE</h1>
            <p>
              So, you want to travel to Space Let’s face it; if you want to go
              to space, you might as well genuinely go to outer space and not
              hover kind of on the edge of it. Well sit back, and relax because
              we’ll give you a truly out of this world experience! Explore
            </p>
          </div>
        </div>
        <div className={styles.body_col} id={styles.explore_col}>
          <div
            onMouseEnter={() => {
              handleMouseEnter();
            }}
            onMouseLeave={() => {
              handleMouseLeave();
            }}
            onMouseMove={(e) => {
              handleMouseMove(e);
            }}
            onClick={() => {
              handleClick();
            }}
            className="explore_btn"
            id={styles.explore_btn}
          >
            <h1>EXPLORE</h1>
            <div className="arrow-box" id={styles.arrow_box}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                id="arrow"
              >
                <path fill="none" d="M0 0h48v48H0z"></path>
                <path d="m24 8-2.83 2.83L32.34 22H8v4h24.34L21.17 37.17 24 40l16-16z"></path>
              </svg>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
