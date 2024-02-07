import styles from "./TodosStatuses.module.css";
import StatusBox from "./StatusBox";

export default function TodosStatuses({
  statuses,
  currentStatus,
  onStatusChange,
}) {
  return (
    <div className={styles.statuses}>
      {statuses.map((status) => (
        <StatusBox
          key={status.value}
          status={status}
          currentStatus={currentStatus}
          onStatusChange={onStatusChange}
        />
      ))}
    </div>
  );
}
