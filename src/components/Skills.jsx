import styles from "../styles/skills.module.css";
export default function Skills() {
  const frontend = [
    "HTML",
    "CSS",
    "JAVASCRIPT",
    "JQUERY",
    "BOOTSTRAP",
    "VUEJS",
    "REACTJS",
    "ANGULARJS",
    "WCAG",
    "SERVICENOW",
  ];
  const backend = ["PHP", "CODEIGNITER", "LARAVEL", "MYSQL", "PYTHON"];
  const tools = [
    "FIGMA",
    "ADOBE XD",
    "NVDA",
    "CANVA",
    "ADOBE PHOTOSHOP",
    "ADOBE ILLUSTRATOR",
  ];
  return (
    <div className={styles.skills}>
      <h1>SKILLS</h1>
      <div className={styles.skillsInfo}>
        <h2 className={styles.title}>FRONTEND</h2>
        <div className={styles.listskill}>
          {frontend.map((item, key) => (
            <span key={key} className={styles.skill}>
              {item}
            </span>
          ))}
        </div>

        <h2 className={styles.title}>BACKEND</h2>
        <div className={styles.listskill}>
          {backend.map((item, key) => (
            <span key={key} className={styles.skill}>
              {item}
            </span>
          ))}
        </div>

        <h2 className={styles.title}>SOFTWARE/TOOLS</h2>
        <div className={styles.otherskill}>
          {tools.map((item, key) => (
            <span key={key} className={styles.skill}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
