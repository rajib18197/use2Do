import styles from "./TodosOperations.module.css";

export default function TodosOperations({ children }) {
  return <div className={styles.operations}>{children}</div>;
}
