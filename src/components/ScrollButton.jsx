import icon from "../assets/Down.png";
import styles from "../styles/scrollbutton.module.css";
export default function ScrollButton({ setCurrentPage, forPage }) {
  function handleScroll(e) {
    // e.preventDefault();
    setCurrentPage("#" + forPage);
    window.location.hash = "#" + forPage;
    var element = document.getElementById(forPage);
    element.scrollIntoView();
  }
  let styleForPage = "";
  if (forPage === "about") {
    styleForPage = "position: 'absolute'";
  } else if (forPage === "projects") {
    styleForPage = "position: 'relative'";
  }
  return (
    <div
      className={`${styles.scrolldown} ${forPage}`}
      onClick={() => handleScroll()}
    >
      <span>Scroll down</span>
      <img src={icon} alt="scroll down icon" />
    </div>
  );
}
