import Button from "../../ui/Button";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Modal from "../../ui/Modal";

export default function DeleteAllTodos({ onDeleteAllTodos }) {
  return (
    <div>
      <Modal>
        <Modal.Open>
          <Button>Delete All Todos</Button>
        </Modal.Open>
        <Modal.Window>
          <ConfirmDelete
            onDelete={() => onDeleteAllTodos({ type: "DELETE_ALL_TASKS" })}
          />
        </Modal.Window>
      </Modal>
    </div>
  );
}
