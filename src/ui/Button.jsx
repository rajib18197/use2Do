import styles from "./Button.module.css";

export default function Button({ children, variation, size }) {
  return (
    <button className={`${styles.button} ${styles[variation]} ${styles[size]}`}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};
