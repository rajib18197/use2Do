import ConfirmDelete from "../../ui/ConfirmDelete";
import Modal from "../../ui/Modal";
import CreateEditForm from "./CreateEditTask";
import TagsList from "./TagList";
import styles from "./TodoItem.module.css";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";

export default function TodoItem({ todo, onEditTodo, onDeleteTodo }) {
  const { title, description, tags, priority } = todo;

  return (
    <div className={styles.todo}>
      <div className={styles.todoCompleted}>
        <button className={styles.button}>
          <ImCheckboxUnchecked />
        </button>
        {/* <ImCheckboxChecked /> */}
      </div>

      <h2>{title}</h2>

      <div>{description}</div>

      <TagsList tags={tags} />

      <p>
        <span>color: </span>
        {priority}
      </p>

      <div>
        <Modal>
          <Modal.Open opens={"edit-task"}>
            <button>Edit</button>
          </Modal.Open>

          <Modal.Window opens={"edit-task"}>
            <CreateEditForm todoToEdit={todo} onEditTodo={onEditTodo} />
          </Modal.Window>
        </Modal>

        <Modal>
          <Modal.Open opens={"delete-task"}>
            <button>delete</button>
          </Modal.Open>
          <Modal.Window opens={"delete-task"}>
            <ConfirmDelete
              onDelete={() =>
                onDeleteTodo({ type: "DELETE_TASK", payload: todo.id })
              }
            />
          </Modal.Window>
        </Modal>
      </div>
    </div>
  );
}
