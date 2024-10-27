import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styles from "../styles/projects.module.css";
export default function Projects({ currentPage, setCurrentPage }) {
  const [projectSectionRef, projectSectionInView] = useInView({
    threshold: 0.5,
  });
  useEffect(() => {
    if (projectSectionInView) {
      setCurrentPage("#projects");
      window.location.hash = currentPage;
    }
  }, [projectSectionInView, currentPage]);
  return (
    <div id={"projects"} className={styles.projects} ref={projectSectionRef}>
      <div className={styles.titleComponent}>
        <span className={styles.title}>PROJECTS</span>
      </div>
    </div>
  );
}
