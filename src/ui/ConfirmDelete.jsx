// import Heading from "./Heading";
import styles from "./ConfirmDelete.module.css";
import Button from "./Button";

export default function ConfirmDelete({ onDelete, onCloseModal }) {
  return (
    <div className={styles.container}>
      <button
        className="absolute top-2 right-2 border-none outline-none text-2xl"
        onClick={onCloseModal}
      >
        &times;
      </button>
      <div className="flex flex-col gap-[14px]">
        <h2 as={"h3"}>Delete Task</h2>
        <p className="leading-6 text-[18px] text-stone-400">
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
    </div>
  );
}
