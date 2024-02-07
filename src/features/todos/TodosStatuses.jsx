import styles from "./TodosStatuses.module.css";
import StatusBox from "./StatusBox";

export default function TodosStatuses({ statuses }) {
  return (
    <div className={styles.statuses}>
      {statuses.map((status) => (
        <StatusBox key={status.value} status={status} />
      ))}
    </div>
  );
}
