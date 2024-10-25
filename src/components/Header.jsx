import logo from "../assets/NR_logo.png";
import styles from "../styles/header.module.css";

import Navbar from "./Navbar";
export default function Header({ currentPage, setCurrentPage }) {
  return (
    <div className={styles.header}>
      <img src={logo} alt="NR logo" className={styles.logo} />
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </div>
  );
}
