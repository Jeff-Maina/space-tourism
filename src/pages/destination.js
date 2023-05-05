import Head from "next/head";
import styles from "@/styles/Destination.module.css";
import { useState } from "react";

const Destination = () => {
  const [moonActive, setMoonActive] = useState(false);
  const [marsActive, setMarsActive] = useState(true);
  const [europaActive, setEuropaActive] = useState(false);
  const [titanActive, setTitanActive] = useState(false);

  let viewMoon = () => {
    setMoonActive(true);
    setMarsActive(false);
    setEuropaActive(false);
    setTitanActive(false);
  };
  let viewMars = () => {
    setMoonActive(false);
    setMarsActive(true);
    setEuropaActive(false);
    setTitanActive(false);
  };
  let viewTitan = () => {
    setMoonActive(false);
    setMarsActive(false);
    setEuropaActive(false);
    setTitanActive(true);
  };
  let viewEuropa = () => {
    setMoonActive(false);
    setMarsActive(false);
    setEuropaActive(true);
    setTitanActive(false);
  };

  return (
    <>
      <Head>
        <title>Space Tourism | Destination</title>
      </Head>
      <section
        className={
          marsActive === true ? styles.layer_active : styles.layer_inactive
        }
        id={styles.dest_section}
      >
        <div id={styles.image_col} className={styles.dest_col}>
          <div className={styles.img_container}>
            <span id={styles.destination_span}>
              <h1>01</h1>
              <h2>PICK YOUR DESTINATION</h2>
            </span>
            <img src="./image-mars.png" />
          </div>
        </div>
        <div id={styles.info_col} className={styles.dest_col}>
          <div id={styles.info_box}>
            <div id={styles.info_header}>
              <span
                onClick={() => {
                  viewMoon();
                }}
              >
                <h2>MOON</h2>
              </span>
              <span
                onClick={() => {
                  viewMars();
                }}
                className={styles.active_destination}
              >
                <h2>MARS</h2>
              </span>
              <span
                onClick={() => {
                  viewEuropa();
                }}
              >
                <h2>EUROPA</h2>
              </span>
              <span
                onClick={() => {
                  viewTitan();
                }}
              >
                <h2>TITAN</h2>
              </span>
            </div>
            <h1 id={styles.info_title}>MARS</h1>
            <p id={styles.info_desc}>
              Don’t forget to pack your hiking boots. You’ll need them to tackle
              Olympus Mons, the tallest planetary mountain in our solar system.
              It’s two and a half times the size of Everest! Avg. distance 225
              mil. km Est. travel time 9 months
            </p>
            <hr />
            <div id={styles.info_footer}>
              <div>
                <h2>AVG. DISTANCE</h2>
                <h1>225 MIL. KM</h1>
              </div>
              <div>
                <h2>EST. TRAVEL TIME</h2>
                <h1>9 MONTHS</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className={
          moonActive === true ? styles.layer_active : styles.layer_inactive
        }
        id={styles.dest_section}
      >
        <div id={styles.image_col} className={styles.dest_col}>
          <div className={styles.img_container}>
            <span id={styles.destination_span}>
              <h1>00</h1>
              <h2>PICK YOUR DESTINATION</h2>
            </span>
            <img src="./image-moon.png" />
          </div>
        </div>
        <div id={styles.info_col} className={styles.dest_col}>
          <div id={styles.info_box}>
            <div id={styles.info_header}>
              <span
                onClick={() => {
                  viewMoon();
                }}
                className={styles.active_destination}
              >
                <h2>MOON</h2>
              </span>
              <span
                onClick={() => {
                  viewMars();
                }}
              >
                <h2>MARS</h2>
              </span>
              <span
                onClick={() => {
                  viewEuropa();
                }}
              >
                <h2>EUROPA</h2>
              </span>
              <span
                onClick={() => {
                  viewTitan();
                }}
              >
                <h2>TITAN</h2>
              </span>
            </div>
            <h1 id={styles.info_title}>MOON</h1>
            <p id={styles.info_desc}>
              See our planet as you’ve never seen it before. A perfect relaxing
              trip away to help regain perspective and come back refreshed.
              While you’re there, take in some history by visiting the Luna 2
              and Apollo 11 landing sites.
            </p>
            <hr />
            <div id={styles.info_footer}>
              <div>
                <h2>AVG. DISTANCE</h2>
                <h1>384,400 km</h1>
              </div>
              <div>
                <h2>EST. TRAVEL TIME</h2>
                <h1>3 days</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className={
          europaActive === true ? styles.layer_active : styles.layer_inactive
        }
        id={styles.dest_section}
      >
        <div id={styles.image_col} className={styles.dest_col}>
          <div className={styles.img_container}>
            <span id={styles.destination_span}>
              <h1>02</h1>
              <h2>PICK YOUR DESTINATION</h2>
            </span>
            <img src="./image-europa.webp" />
          </div>
        </div>
        <div id={styles.info_col} className={styles.dest_col}>
          <div id={styles.info_box}>
            <div id={styles.info_header}>
              <span
                onClick={() => {
                  viewMoon();
                }}
              >
                <h2>MOON</h2>
              </span>
              <span
                onClick={() => {
                  viewMars();
                }}
              >
                <h2>MARS</h2>
              </span>
              <span
                onClick={() => {
                  viewEuropa();
                }}
                className={styles.active_destination}
              >
                <h2>EUROPA</h2>
              </span>
              <span
                onClick={() => {
                  viewTitan();
                }}
              >
                <h2>TITAN</h2>
              </span>
            </div>
            <h1 id={styles.info_title}>EUROPA</h1>
            <p id={styles.info_desc}>
              Europa The smallest of the four Galilean moons orbiting Jupiter,
              Europa is a winter lover’s dream. With an icy surface, it’s
              perfect for a bit of ice skating, curling, hockey, or simple
              relaxation in your snug wintery cabin.
            </p>
            <hr />
            <div id={styles.info_footer}>
              <div>
                <h2>AVG. DISTANCE</h2>
                <h1>628 mil. km</h1>
              </div>
              <div>
                <h2>EST. TRAVEL TIME</h2>
                <h1>3 years</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className={
          titanActive === true ? styles.layer_active : styles.layer_inactive
        }
        id={styles.dest_section}
      >
        <div id={styles.image_col} className={styles.dest_col}>
          <div className={styles.img_container}>
            <span id={styles.destination_span}>
              <h1>03</h1>
              <h2>PICK YOUR DESTINATION</h2>
            </span>
            <img src="./image-titan.webp" />
          </div>
        </div>
        <div id={styles.info_col} className={styles.dest_col}>
          <div id={styles.info_box}>
            <div id={styles.info_header}>
              <span
                onClick={() => {
                  viewMoon();
                }}
              >
                <h2>MOON</h2>
              </span>
              <span
                onClick={() => {
                  viewMars();
                }}
              >
                <h2>MARS</h2>
              </span>
              <span
                onClick={() => {
                  viewEuropa();
                }}
              >
                <h2>EUROPA</h2>
              </span>
              <span
                onClick={() => {
                  viewTitan();
                }}
                className={styles.active_destination}
              >
                <h2>TITAN</h2>
              </span>
            </div>
            <h1 id={styles.info_title}>TITAN</h1>
            <p id={styles.info_desc}>
              The only moon known to have a dense atmosphere other than Earth,
              Titan is a home away from home (just a few hundred degrees
              colder!). As a bonus, you get striking views of the Rings of
              Saturn.
            </p>
            <hr />
            <div id={styles.info_footer}>
              <div>
                <h2>AVG. DISTANCE</h2>
                <h1>1.6 bil. km</h1>
              </div>
              <div>
                <h2>EST. TRAVEL TIME</h2>
                <h1>7 years</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Destination;
