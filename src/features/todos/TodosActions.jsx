import styles from "./TodosActions.module.css";

export default function TodosActions({ children }) {
  return <div className={styles.actions}>{children}</div>;
}
