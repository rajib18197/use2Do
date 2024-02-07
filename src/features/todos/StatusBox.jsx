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
    <div
      className={styles.statusBox}
      onClick={() => onStatusChange(status.value)}
    >
      <h5 className={styles.title}>{status.label}</h5>
      <p>Total {count} Tasks</p>
    </div>
  );
}
