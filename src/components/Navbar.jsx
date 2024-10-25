import { Link, useLocation } from "react-router-dom";
import styles from "../styles/navbar.module.css";
export default function Navbar() {
  const location = useLocation();
  const path = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Projects", link: "/projects" },
    { title: "Contact", link: "/contact" },
  ];
  return (
    <nav className={`${styles.navigator} navbar navbar-expand-lg `}>
      <button
        className={`${styles.navCollapseButton} navbar-toggler ms-auto`}
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {path.map((nav, key) => (
            <li key={key}>
              <Link
                to={nav.link}
                className={
                  location.pathname === nav.link ? styles.activelink : ""
                }
              >
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
