import styles from "../styles/home.module.css";
import HomeButton from "./HomeButton";
import ScrollButton from "./ScrollButton";
import React, { useEffect, useState } from "react";
export default function Home({ currentPage, setCurrentPage }) {
  return (
    <div className={styles.introduction}>
      <div className={styles.leftIntro}>
        <span className={styles.firstText}>Hello, I'm</span>
        <span className={styles.secondText}>NICELE REYES</span>
        <span className={styles.thirdText}>Web Developer</span>
      </div>
      <HomeButton />
      <ScrollButton setCurrentPage={setCurrentPage} forPage={"about"} />
    </div>
  );
}
