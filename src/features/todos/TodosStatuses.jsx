import styles from "./TodosStatuses.module.css";
import StatusBox from "./StatusBox";

export default function TodosStatuses() {
  return (
    <div className={styles.statuses}>
      <StatusBox />
      <StatusBox />
      <StatusBox />
    </div>
  );
}
