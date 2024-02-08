import Button from "./Button";
import styles from "./Filters.module.css";

export default function Filters({
  options,
  currentFilterValue,
  onChangeFilter,
}) {
  return (
    <div className={styles.filters}>
      {options.map((option) => (
        <button
          className={`${styles.button} ${
            currentFilterValue === option.value ? styles["active"] : ""
          }`}
          key={option.label}
          onClick={() => onChangeFilter(option.value)}
        >
          {option.color} {option.label}
        </button>
      ))}
    </div>
  );
}
