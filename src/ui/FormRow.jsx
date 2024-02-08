import styles from "./FormRow.module.css";

export default function FormRow({ label, error, children }) {
  return (
    <div className={styles.formRow}>
      {label && (
        <label htmlFor={children.props.id} className={styles.label}>
          {label}
        </label>
      )}
      {children}
      {error && <span>{error}</span>}
    </div>
  );
}
