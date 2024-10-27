import React, { useEffect } from "react";
import styles from "../styles/projects.module.css";

import ScrollButton from "./ScrollButton";
import ProjectsContainer from "./ProjectsContainer";
export default function Projects({ setCurrentPage }) {
  return (
    <div id={"projects"} className={styles.projects}>
      <div className={styles.titleComponent}>
        <span className={styles.title}>PROJECTS</span>
      </div>
      <ProjectsContainer />
      <ScrollButton setCurrentPage={setCurrentPage} forPage={"contact"} />
    </div>
  );
}
