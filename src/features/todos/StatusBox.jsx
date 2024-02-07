import styles from "./StatusBox.module.css";

export default function StatusBox({ status, currentStatus, onStatusChange }) {
  return (
    <div
      className={styles.statusBox}
      onClick={() => onStatusChange(status.value)}
    >
      <h5>{status.label}</h5>
      <p>Total 10 Tasks</p>
    </div>
  );
}
