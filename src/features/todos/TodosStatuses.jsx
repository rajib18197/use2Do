import styles from "./TodosStatuses.module.css";
import StatusBox from "./StatusBox";

export default function TodosStatuses({
  todos,
  statuses,
  currentStatus,
  onStatusChange,
}) {
  return (
    <div className={styles.statuses}>
      {statuses.map((status) => (
        <StatusBox
          key={status.value}
          todos={todos}
          status={status}
          currentStatus={currentStatus}
          onStatusChange={onStatusChange}
        />
      ))}
    </div>
  );
}
