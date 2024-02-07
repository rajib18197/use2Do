import styles from "./Input.module.css";

export default function Input({ type, className, ...props }) {
  return (
    <input className={`${styles.input} ${className}`} type={type} {...props} />
  );
}
