import logo from "../assets/NR_logo.png";
import styles from "../styles/header.module.css";

import Navbar from "./Navbar";
export default function Header() {
  return (
    <div className={styles.header}>
      <img src={logo} alt="NR logo" className={styles.logo} />
      <Navbar />
    </div>
  );
}
