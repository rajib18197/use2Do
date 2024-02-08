import Button from "../../ui/Button";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Modal from "../../ui/Modal";
import CreateEditForm from "./CreateEditTask";
import TagsList from "./TagList";
import styles from "./TodoItem.module.css";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";

export default function TodoItem({ todo, dispatch }) {
  const { id: todoId, title, description, tags, priority, completed } = todo;

  const priorityToColor = {
    low: "blue",
    high: "green",
    medium: "silver",
  };

  console.log(priority);

  return (
    <div className={`${styles.todo} ${completed ? `${styles.completed}` : ""}`}>
      <div className={styles.todoCompleted}>
        <button
          className={styles.button}
          onClick={() =>
            dispatch({ type: "TOGGLE_COMPLETED", payload: todoId })
          }
        >
          {completed ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
        </button>
      </div>

      <h2>{title}</h2>

      <p className={styles.description}>{description}</p>

      <TagsList tags={tags} />

      <p className={styles.priority}>
        {/* <span className={styles[priorityToColor[priorityColor]]}>color: </span> */}
        <span className={styles[priorityToColor[priority]]}>{priority}</span>
      </p>

      <div className={styles.actions}>
        <Modal>
          <Modal.Open opens={"edit-task"}>
            <Button variation={"secondary"} disabled={completed}>
              Edit
            </Button>
          </Modal.Open>

          <Modal.Window opens={"edit-task"}>
            <CreateEditForm todoToEdit={todo} onEditTodo={dispatch} />
          </Modal.Window>
        </Modal>

        <Modal>
          <Modal.Open opens={"delete-task"}>
            <Button variation={"danger"} disabled={completed}>
              delete
            </Button>
          </Modal.Open>
          <Modal.Window opens={"delete-task"}>
            <ConfirmDelete
              onDelete={() =>
                dispatch({ type: "DELETE_TASK", payload: todo.id })
              }
            />
          </Modal.Window>
        </Modal>
      </div>
    </div>
  );
}
