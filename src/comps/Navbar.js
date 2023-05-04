import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import { Big_Shoulders_Display } from "next/font/google";
import { useState } from "react";
const Navbar = () => {
  const [isMenuActive, setMenuActive] = useState(false);

  let menuIcon = isMenuActive ? (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21">
      <g fill="#D0D6F9" fill-rule="evenodd">
        <path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" />
        <path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" />
      </g>
    </svg>
  ) : (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="21">
      <g fill="#D0D6F9" fill-rule="evenodd">
        <path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" />
      </g>
    </svg>
  );

  // moving the nav indicator
  let handleNavBarIndicator = (event) => {
    let indicator = document.querySelector(".nav-indicator");
    let leftValue = event.target.offsetLeft;
    let width = event.target.offsetWidth;
    indicator.style.visibility = "visible";
    indicator.style.left = leftValue + "px";
    indicator.style.width = width + "px";
  };

  return (
    <nav className={styles.nav}>
      <div id={styles.logo}>
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
          <g fill="none" fill-rule="evenodd">
            <circle cx="24" cy="24" r="24" fill="#FFF" />
            <path
              fill="#0B0D17"
              d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"
            />
          </g>
        </svg>
      </div>
      <div id={styles.hr}>
        <hr />
      </div>
      <div id={styles.links}>
        <div id={styles.linkbox}>
          <div className="nav-indicator" id={styles.indicator}></div>
          <Link
            activeClassName="active-link"
            onClick={(e) => {
              handleNavBarIndicator(e);
            }}
            href="/"
            className={styles.link}
          >
            <h4>00</h4>
            <h5>HOME</h5>
          </Link>
          <Link
            onClick={(e) => {
              handleNavBarIndicator(e);
            }}
            href="/destination"
            className={styles.link}
          >
            <h4>01</h4>
            <h5>DESTINATION</h5>
          </Link>
          <Link
            onClick={(e) => {
              handleNavBarIndicator(e);
            }}
            href="/crew"
            className={styles.link}
          >
            <h4>02</h4>
            <h5>CREW</h5>
          </Link>
          <Link
            onClick={(e) => {
              handleNavBarIndicator(e);
            }}
            href="/technology"
            className={styles.link}
          >
            <h4>03</h4>
            <h5>TECHNOLOGY</h5>
          </Link>
        </div>
        <div onClick={()=>{
          setMenuActive(!isMenuActive);
        }} id={styles.hamburger_menu}>
          {menuIcon}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
