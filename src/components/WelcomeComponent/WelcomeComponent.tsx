import styles from "./styles.module.css";

export const WelcomeComponent = () => {
  return (
      <div className={styles.root}>
          <div>Добро пожаловать в Goose English!</div>
          <div>Учи английский вместе с нами</div>
      </div>
  )
}