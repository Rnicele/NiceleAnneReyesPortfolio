import React, { useEffect } from "react";
import styles from "../styles/contact.module.css";
export default function Contact() {
  return (
    <div id={"contact"} className={styles.contact}>
      <div className={styles.titleComponent}>
        <span className={styles.title}>CONTACT</span>
      </div>
      <div className={styles.contactContainer}>
        <div className={styles.contactMe}>
          <h1>HELLO? IS IT ME YOU'RE LOOKING FOR?</h1>
          <hr />
          <a href="mailto:nicele.reyes26@gmail.com">SAY HELLO.</a>
        </div>
      </div>

      <h2>Copyright © 2024 Nicele Reyes. All Rights Reserved.</h2>
    </div>
  );
}
