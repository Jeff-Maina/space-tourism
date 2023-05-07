import Head from "next/head";
import styles from "@/styles/Crew.module.css";
import { useState } from "react";
import { motion as m } from "framer-motion";

const Crew = () => {
  const [member1, setmember1] = useState(true);
  const [member2, setmember2] = useState(false);
  const [member3, setmember3] = useState(false);
  const [member4, setmember4] = useState(false);

  let viewMember1 = () => {
    setmember1(true);
    setmember2(false);
    setmember3(false);
    setmember4(false);
  };
  let viewMember2 = () => {
    setmember1(false);
    setmember2(true);
    setmember3(false);
    setmember4(false);
  };
  let viewMember3 = () => {
    setmember1(false);
    setmember2(false);
    setmember3(true);
    setmember4(false);
  };
  let viewMember4 = () => {
    setmember1(false);
    setmember2(false);
    setmember3(false);
    setmember4(true);
  };

  return (
    <>
      <Head>
        <title>Space Tourism | crew</title>
      </Head>
      <section
        id={member1 === true ? styles.layer_active : styles.layer_inactive}
        className={styles.section}
      >
        <div
          className={styles.section_col}
          id={styles.info_col}
        >
          <div id={styles.title}>
            <h1>01</h1>
            <h2>MEET YOUR CREW</h2>
          </div>
          <div className={styles.member_info}>
            <h1 className={styles.occupation}>FLIGHT ENGINEER</h1>
            <h1 className={styles.member_name}>ANOUSEH ANSARI</h1>
            <p>
              Anousheh Ansari Anousheh Ansari is an Iranian American engineer
              and co-founder of Prodea Systems. Ansari was the fourth
              self-funded space tourist, the first self-funded woman to fly to
              the ISS, and the first Iranian in space.
            </p>
          </div>
          <div className={styles.indicator_box}>
            <div
              className={styles.current_member}
              onClick={() => {
                viewMember1();
              }}
            ></div>
            <div
              onClick={() => {
                viewMember2();
              }}
            ></div>
            <div
              onClick={() => {
                viewMember3();
              }}
            ></div>
            <div
              onClick={() => {
                viewMember4();
              }}
            ></div>
          </div>
        </div>
        <div className={styles.section_col} id={styles.img_col}>
          <img
            src="./crew/image-anousheh-ansari.webp"
          />
        </div>
      </section>
      <section
        id={member2 === true ? styles.layer_active : styles.layer_inactive}
        className={styles.section}
      >
        <div
          className={styles.section_col}
          id={styles.info_col}
        >
          <div id={styles.title}>
            <h1>02</h1>
            <h2>MEET YOUR CREW</h2>
          </div>
          <div className={styles.member_info}>
            <h1 className={styles.occupation}>COMMANDER</h1>
            <h1 className={styles.member_name}>DOUGLAS HURLEY</h1>
            <p>
              Douglas Gerald Hurley is an American engineer, former Marine Corps
              pilot and former NASA astronaut. He launched into space for the
              third time as commander of Crew Dragon Demo-2.
            </p>
          </div>
          <div className={styles.indicator_box}>
            <div
              onClick={() => {
                viewMember1();
              }}
            ></div>
            <div
              onClick={() => {
                viewMember2();
              }}
              className={styles.current_member}
            ></div>
            <div
              onClick={() => {
                viewMember3();
              }}
            ></div>
            <div
              onClick={() => {
                viewMember4();
              }}
            ></div>
          </div>
        </div>
        <div className={styles.section_col} id={styles.img_col}>
          <img
            src="./crew/image-douglas-hurley.webp"
          />
        </div>
      </section>
      <section
        id={member3 === true ? styles.layer_active : styles.layer_inactive}
        className={styles.section}
      >
        <div
          className={styles.section_col}
          id={styles.info_col}
        >
          <div id={styles.title}>
            <h1>03</h1>
            <h2>MEET YOUR CREW</h2>
          </div>
          <div className={styles.member_info}>
            <h1 className={styles.occupation}>PILOT</h1>
            <h1 className={styles.member_name}>VICTOR GLOVER</h1>
            <p>
              Pilot on the first operational flight of the SpaceX Crew Dragon to
              the International Space Station. Glover is a commander in the U.S.
              Navy where he pilots an F/A-18.He was a crew member of Expedition
              64, and served as a station systems flight engineer.
            </p>
          </div>
          <div className={styles.indicator_box}>
            <div
              onClick={() => {
                viewMember1();
              }}
            ></div>
            <div
              onClick={() => {
                viewMember2();
              }}
            ></div>
            <div
              onClick={() => {
                viewMember3();
              }}
              className={styles.current_member}
            ></div>
            <div
              onClick={() => {
                viewMember4();
              }}
            ></div>
          </div>
        </div>
        <div className={styles.section_col} id={styles.img_col}>
          <img
            src="./crew/image-victor-glover.webp"
          />
        </div>
      </section>
      <section
        id={member4 === true ? styles.layer_active : styles.layer_inactive}
        className={styles.section}
      >
        <div
          className={styles.section_col}
          id={styles.info_col}
        >
          <div id={styles.title}>
            <h1>04</h1>
            <h2>MEET YOUR CREW</h2>
          </div>
          <div className={styles.member_info}>
            <h1 className={styles.occupation}>MISSION SPECIALIST</h1>
            <h1 className={styles.member_name}>MARK SHUTTLEWORTH</h1>
            <p>
              Mark Richard Shuttleworth is the founder and CEO of Canonical, the
              company behind the Linux-based Ubuntu operating system.
              Shuttleworth became the first South African to travel to space as
              a space tourist.
            </p>
          </div>
          <div className={styles.indicator_box}>
            <div
              onClick={() => {
                viewMember1();
              }}
            ></div>
            <div
              onClick={() => {
                viewMember2();
              }}
            ></div>
            <div
              onClick={() => {
                viewMember3();
              }}
            ></div>
            <div
              className={styles.current_member}
              onClick={() => {
                viewMember4();
              }}
            ></div>
          </div>
        </div>
        <div className={styles.section_col} id={styles.img_col}>
          <img
            src="./crew/image-mark-shuttleworth.webp"
          />
        </div>
      </section>
    </>
  );
};

export default Crew;
