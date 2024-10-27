import styles from "../styles/home.module.css";
import HomeButton from "./HomeButton";
import ScrollButton from "./ScrollButton";
import React, { useEffect, useState } from "react";

import { useInView } from "react-intersection-observer";
export default function Home({ currentPage, setCurrentPage }) {
  const [homeSectionRef, homeSectionInView] = useInView({ threshold: 1 });
  useEffect(() => {
    if (homeSectionInView) {
      setCurrentPage("");
      window.location.hash = currentPage;
    }
  }, [homeSectionInView, currentPage]);

  return (
    <div className={styles.introduction} ref={homeSectionRef}>
      <div className={styles.leftIntro}>
        <span className={styles.firstText}>Hello, I'm</span>
        <span className={styles.secondText}>NICELE REYES</span>
        <span className={styles.thirdText}>Web Developer</span>
      </div>
      <HomeButton />
      <ScrollButton currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}
