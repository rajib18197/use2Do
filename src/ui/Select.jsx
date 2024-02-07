import styles from "./Select.module.css";

export default function Select({ options, value, onSelect, ...props }) {
  return (
    <select
      className={styles.select}
      value={value}
      onChange={onSelect}
      {...props}
    >
      <option value="">Select Priority</option>
      {options.map((option) => (
        <option key={option.field} value={option.field}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
