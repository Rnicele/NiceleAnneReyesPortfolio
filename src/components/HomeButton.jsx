import githubIcon from "../assets/github.png";
import linkedinIcon from "../assets/linkedin.png";
import cv from "../assets/cv.png";
import darkmode from "../assets/darkmode.png";
import { Link } from "react-router-dom";
import styles from "../styles/homebutton.module.css";
import resume from "../assets/Nicele_Reyes_Resume_2024.pdf";
export default function HomeButton() {
  return (
    <div className={styles.socialLinks}>
      <Link to="https://github.com/Rnicele">
        <img src={githubIcon} className={styles.icon} />
      </Link>
      <Link to="https://www.linkedin.com/in/nicele-anne-reyes/">
        <img src={linkedinIcon} className={styles.icon} />
      </Link>
      <a href={resume} target="_blank">
        <img src={cv} className={styles.icon} />
      </a>
      <img src={darkmode} className={styles.icon} />
    </div>
  );
}
