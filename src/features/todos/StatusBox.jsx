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
      <span className={styles.count}>
        {status.value === "all" &&
          `Total ${count} ${count === 1 ? "Task" : "Tasks"}`}
        {status.value === "completed" &&
          `${count} ${count === 1 ? "Task" : "Tasks"} completed`}
        {status.value === "inComplete" &&
          `${count} ${count === 1 ? "Task" : "Tasks"} remaining`}
      </span>
    </button>
  );
}
