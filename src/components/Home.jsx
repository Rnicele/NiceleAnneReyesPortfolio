import styles from "../styles/home.module.css";
import HomeButton from "./HomeButton";
import ScrollButton from "./ScrollButton";
import React, { useEffect, useState } from "react";

import { useInView } from "react-intersection-observer";
export default function Home({ currentPage, setCurrentPage }) {
  const [section1Ref, section1InView] = useInView({ threshold: 1 });
  useEffect(() => {
    if (section1InView) {
      setCurrentPage("");
      window.location.hash = currentPage;
    }
  }, [section1InView, currentPage]);

  return (
    <div className={styles.introduction} ref={section1Ref}>
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
