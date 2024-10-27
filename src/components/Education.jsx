import styles from "../styles/education.module.css";
export default function Education() {
  return (
    <div>
      <h1 className={styles.title}>EDUCATION</h1>
      <div className={styles.school}>
        <h2 className={styles.collegeName}>FAR EASTERN UNIVERSITY</h2>
        <h3 className={styles.course}>
          BACHELOR OF SCIENCE IN APPLIED MATHEMATICS WITH INFORMATION TECHNOLOGY
        </h3>
        <h4 className={styles.batch}>BATCH 2015 - 2019</h4>
      </div>
    </div>
  );
}
