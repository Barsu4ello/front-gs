import {Link} from "react-router-dom";
import styles from "./styles.module.css";

export const Header = () => {
  return (
      <header className={styles.root}>
          <Link to={"/"} className={styles.siteName}>
              Goose English
          </Link>
          <Link to={"/test"} className={styles.link}>
              Мои слова
          </Link>
          <Link to={"/auth"} className={styles.link}>
              Регистрация
          </Link>
      </header>
  )
}