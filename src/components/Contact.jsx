import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styles from "../styles/contact.module.css";
export default function Projects({ currentPage, setCurrentPage }) {
  const [contactSectionRef, contactSectionInView] = useInView({
    threshold: 0.5,
  });
  useEffect(() => {
    if (contactSectionInView) {
      setCurrentPage("#contact");
      window.location.hash = currentPage;
    }
  }, [contactSectionInView, currentPage]);
  return (
    <div id={"contact"} className={styles.contact} ref={contactSectionRef}>
      <div className={styles.titleComponent}>
        <span className={styles.title}>CONTACT</span>
      </div>
    </div>
  );
}
