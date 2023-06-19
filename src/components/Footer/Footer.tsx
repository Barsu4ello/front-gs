import styles from "./styles.module.css";

export const Footer = () => {
  return (<div className={styles.root}>
      <div className={styles.siteInfo}>© 2023 Goose English</div>
      <div className={styles.developerInfo}>
          <div>Контакты: wint-mil@mail.ru</div>
          <div>Разработчики: Владислав и Кирилл</div>
      </div>
  </div>)
}