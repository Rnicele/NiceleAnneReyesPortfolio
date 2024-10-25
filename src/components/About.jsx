import styles from "../styles/about.module.css";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
export default function About({ currentPage, setCurrentPage }) {
  const [section2Ref, section2InView] = useInView({ threshold: 0.5 });
  useEffect(() => {
    if (section2InView) {
      setCurrentPage("#about");
      window.location.hash = currentPage;
    }
  }, [section2InView, currentPage]);
  return (
    <div id={"about"} className={styles.about} ref={section2Ref}>
      About page
    </div>
  );
}
