import styles from "./Header.module.css";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className={styles.header}>
      <Logo />

      <div className={styles.headerText}>
        <h3 className={styles.heading4}>Design Your Day</h3>
      </div>
    </header>
  );
}
