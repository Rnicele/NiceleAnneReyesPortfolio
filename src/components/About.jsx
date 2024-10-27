import styles from "../styles/about.module.css";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Education from "./Education";
import Information from "./Information";
import Skills from "./Skills";
export default function About({ currentPage, setCurrentPage }) {
  const [aboutSectionRef, aboutSectionInView] = useInView({ threshold: 0.5 });
  useEffect(() => {
    if (aboutSectionInView) {
      setCurrentPage("#about");
      window.location.hash = currentPage;
    }
  }, [aboutSectionInView, currentPage]);
  return (
    <div id={"about"} className={styles.about} ref={aboutSectionRef}>
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
    </div>
  );
}
