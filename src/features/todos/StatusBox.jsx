import styles from "./StatusBox.module.css";

export default function StatusBox({ status }) {
  return (
    <div className={styles.statusBox}>
      <h5>{status.label}</h5>
      <p>Total 10 Tasks</p>
    </div>
  );
}
