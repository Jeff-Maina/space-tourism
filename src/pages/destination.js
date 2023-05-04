import Head from "next/head";
import styles from "@/styles/Destination.module.css";

const Destination = () => {
  return (
    <>
      <Head>
        <title>Space Tourism | Destination</title>
      </Head>
      <section id={styles.dest_section}>
        <div id={styles.image_col}  className={styles.dest_col}>
          <div className={styles.img_container}>
            <span><h1>01</h1><h2>PICK YOUR DESTINATION</h2></span>
            <img src="./image-mars.png" />
          </div>
        </div>
        <div id={styles.info_col}  className={styles.dest_col}>

        </div>
      </section>
    </>
  );
};

export default Destination;
