import styles from "../styles/navbar.module.css";
export default function Navbar({ currentPage, setCurrentPage }) {
  const path = [
    { title: "Home", link: "/#", classLink: "", addClass: "homepage" },
    {
      title: "About",
      link: "#about",
      classLink: "#about",
      addClass: "aboutpage",
    },
    {
      title: "Projects",
      link: "#projects",
      classLink: "#projects",
      addClass: "projectpage",
    },
    {
      title: "Contact",
      link: "#contact",
      classLink: "#contact",
      addClass: "contactpage",
    },
  ];
  function handleNavbar(navlink) {
    setCurrentPage(navlink);
  }
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
              <a
                href={nav.link}
                onClick={() => handleNavbar(nav.classLink)}
                className={
                  currentPage === nav.classLink ? styles.activelink : ""
                }
              >
                {nav.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
