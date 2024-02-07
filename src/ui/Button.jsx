import styles from "./Button.module.css";

export default function Button({
  children,
  variation,
  size,
  disabled,
  onClick,
  active,
}) {
  return (
    <button
      className={`${styles.button} ${styles[variation]} ${styles[size]} ${
        active ? styles["active"] : ""
      }`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};
