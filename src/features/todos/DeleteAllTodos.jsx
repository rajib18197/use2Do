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
            onDelete={() => onDeleteAllTodos({ type: "DELETE_ALL_TODOS" })}
          >
            Are you sure you want to delete all todos permanently? This action
            cannot be undone.
          </ConfirmDelete>
        </Modal.Window>
      </Modal>
    </div>
  );
}
