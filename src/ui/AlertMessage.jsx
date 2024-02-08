import styles from "./AlertMessage.module.css";

export default function AlertMessage({ children }) {
  return (
    <div className={styles.message}>
      <p>{children}</p>
    </div>
  );
}
