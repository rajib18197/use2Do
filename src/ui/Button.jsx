import styles from "./Button.module.css";

export default function Button({
  children,
  variation,
  size,
  disabled,
  onClick,
}) {
  return (
    <button
      className={`${styles.button} ${styles[variation]} ${styles[size]}`}
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
