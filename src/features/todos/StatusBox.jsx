import styles from "./StatusBox.module.css";

export default function StatusBox({
  todos,
  status,
  currentStatus,
  onStatusChange,
}) {
  let count = todos.length;
  if (status.value === "completed") {
    count = todos.filter((todo) => todo.completed).length;
  }

  if (status.value === "inComplete") {
    count = todos.filter((todo) => !todo.completed).length;
  }

  return (
    <button
      className={`${styles.statusBox} ${
        status.value === currentStatus ? `${styles.active}` : ""
      }`}
      onClick={() => onStatusChange(status.value)}
    >
      <span className={styles.label}>{status.label}</span>
      <span className={styles.count}>Total {count} Tasks</span>
    </button>
  );
}
