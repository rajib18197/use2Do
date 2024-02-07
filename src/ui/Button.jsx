import styles from "./Button.module.css";

export default function Button({ children, variation, size, onClick }) {
  return (
    <button
      className={`${styles.button} ${styles[variation]} ${styles[size]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};
