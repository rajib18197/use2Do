import styles from "./StatusBox.module.css";

export default function StatusBox() {
  return (
    <div className={styles.statusBox}>
      <h5>All Task</h5>
      <p>Total 10 Tasks</p>
    </div>
  );
}
