import styles from "../styles/information.module.css";
import pinIcon from "../assets/pin.png";
import emailIcon from "../assets/email_at.png";
import phoneIcon from "../assets/phone.png";
export default function Information() {
  return (
    <div className={styles.information}>
      <h1 className={styles.title}>INFORMATION</h1>
      <div className={styles.moreInfo}>
        <div className={styles.location}>
          <img src={pinIcon} alt="pin icon" />
          <h2>SAN JUAN CITY, METRO MANILA</h2>
        </div>
        <div className={styles.email}>
          <img src={emailIcon} alt="email icon" />
          <h2>NICELE.REYES26@GMAIL.COM</h2>
        </div>
        <div className={styles.phone}>
          <img src={phoneIcon} alt="phone icon" />
          <h2>+63 917 2797 170</h2>
        </div>
      </div>
    </div>
  );
}
