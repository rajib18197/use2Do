// import Heading from "./Heading";
import styles from "./ConfirmDelete.module.css";
import Button from "./Button";

export default function ConfirmDelete({ children, onDelete, onCloseModal }) {
  function handleClick() {
    onDelete();
    onCloseModal();
  }
  return (
    <div className={styles.container}>
      <h2 as={"h3"}>Delete Task</h2>
      <p>{children}</p>

      <div>
        <Button variation="secondary" onClick={onCloseModal}>
          Cancel
        </Button>
        <Button variation="danger" onClick={handleClick}>
          Delete
        </Button>
      </div>
    </div>
  );
}
