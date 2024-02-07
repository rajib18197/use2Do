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
        <Button
          size={"small"}
          key={option.label}
          active={currentFilterValue === option.value}
          onClick={() => onChangeFilter(option.value)}
        >
          {option.color} {option.label}
        </Button>
      ))}
    </div>
  );
}
