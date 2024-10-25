import icon from "../assets/Down.png";
import styles from "../styles/scrollbutton.module.css";
export default function ScrollButton({ currentPage, setCurrentPage }) {
  function handleScroll() {
    setCurrentPage("#about");
    window.location.hash = "#about";
  }
  return (
    <div className={styles.scrolldown} onClick={() => handleScroll()}>
      <span>Scroll down</span>
      <img src={icon} alt="scroll down icon" />
    </div>
  );
}
