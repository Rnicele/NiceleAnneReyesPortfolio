import githubIcon from "../assets/github.png";
import linkedinIcon from "../assets/linkedin.png";
import cv from "../assets/cv.png";
import darkmode from "../assets/darkmode.png";
// import { Link } from "react-router-dom";
import styles from "../styles/homebutton.module.css";
import resume from "../assets/Nicele_Reyes_Resume_2024.pdf";
export default function HomeButton() {
  return (
    <div className={styles.socialLinks}>
      <a href="https://github.com/Rnicele">
        <img src={githubIcon} className={styles.icon} />
      </a>
      <a href="https://www.linkedin.com/in/nicele-anne-reyes/">
        <img src={linkedinIcon} className={styles.icon} />
      </a>
      <a href={resume} target="_blank">
        <img src={cv} className={styles.icon} />
      </a>
      {/* <img src={darkmode} className={styles.icon} /> */}
    </div>
  );
}
