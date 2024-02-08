// import Heading from "./Heading";
import styles from "./ConfirmDelete.module.css";
import Button from "./Button";

export default function ConfirmDelete({ onDelete, onCloseModal }) {
  return (
    <div className={styles.container}>
      <h2 as={"h3"}>Delete Task</h2>
      <p>
        Are you sure you want to delete this task permanently? This action
        cannot be undone.
      </p>

      <div>
        <Button variation="secondary" onClick={onCloseModal}>
          Cancel
        </Button>
        <Button variation="danger" onClick={onDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
}
