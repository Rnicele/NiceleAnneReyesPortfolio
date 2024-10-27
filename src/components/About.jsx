import styles from "../styles/about.module.css";
import React, { useEffect } from "react";
import Education from "./Education";
import Information from "./Information";
import Skills from "./Skills";
import ScrollButton from "./ScrollButton";
export default function About({ setCurrentPage }) {
  return (
    <div id={"about"} className={styles.about}>
      <div className={styles.titleComponent}>
        <span className={styles.title}>ABOUT ME</span>
      </div>
      <div className={styles.aboutMe}>
        <div className={styles.eduInfo}>
          <Education />
          <Information />
        </div>
        <Skills />
      </div>
      <ScrollButton setCurrentPage={setCurrentPage} forPage={"projects"} />
    </div>
  );
}
