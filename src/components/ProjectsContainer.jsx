import project1 from "../assets/shopping-cart-react-project.png";
import project2 from "../assets/wordle.jpg";
import project3 from "../assets/todoapp.png";
import listIcon from "../assets/list.png";
import basketIcon from "../assets/basket.png";
import gameIcon from "../assets/Gamepad.png";
import styles from "../styles/projectscontainer.module.css";
export default function ProjectsContainer() {
  const projects = [
    {
      title: "Shopping Cart",
      image: project1,
      icon: listIcon,
      alt: "Shopping cart icon",
      subtitle: `The Shopping Cart is a simple, interactive shopping cart. It allows users to browse through products, add them to the cart, update quantities, and view the total price.`,
      tags: ["React", "Vite", "JS", "CSS"],
      githubLink: "https://github.com/Rnicele/ShoppingCartReact",
      demo: "https://rnicele.github.io/shopping-cart-react/",
    },
    {
      title: "Wordle-like Game",
      image: project2,
      icon: gameIcon,
      alt: "wordle like game icon",
      subtitle: `The TodoApp is a minimalist web-based task management tool. It
                    allows users to add, track, and delete tasks in a simple and
                    intuitive interface.`,
      tags: ["HTML", "JavaScript", "CSS"],
      githubLink: "https://github.com/Rnicele/Wordle-like-game",
      demo: "https://rnicele.github.io/Wordle-like-game/",
    },
    {
      title: "Todo App",
      image: project3,
      icon: basketIcon,
      alt: "todo icon",
      subtitle: `The TodoApp is a minimalist web-based task management tool. It allows users to add, track, and delete tasks in a simple and intuitive interface.`,
      tags: ["React", "Vite", "JS", "CSS"],
      githubLink: "https://github.com/Rnicele/TodoApp",
      demo: "https://rnicele.github.io/TodoApp/",
    },
  ];
  return (
    <div className={styles.cardContainer}>
      {projects.map((project, key) => (
        <div className={`${styles.card} `} key={key}>
          <img src={project.image} alt={project.alt} />
          <div className={styles.cardComponent}>
            <span className={styles.cardTitle}>{project.title}</span>
            <img
              src={project.icon}
              alt={project.alt}
              className={styles.cardIcon}
            />
            <div className={styles.cardSubtitle}>
              <p>{project.subtitle}</p>
            </div>
            <div className={styles.cardTag}>
              {project.tags.map((tag, keytag) => (
                <span key={keytag}>{tag}</span>
              ))}
            </div>
            <div className={styles.cardButton}>
              <a href={project.githubLink}>Github</a>
              <a href={project.demo}>Demo</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
