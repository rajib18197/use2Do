import Button from "../../ui/Button";
import ConfirmDelete from "../../ui/ConfirmDelete";
import Modal from "../../ui/Modal";

export default function DeleteAllTodos({
  onDeleteAllTodos,
  onPriorityReset,
  onStatusReset,
  onSortReset,
}) {
  function handleDeleteAll() {
    onDeleteAllTodos({ type: "DELETE_ALL_TODOS" });
    // Back to initial State
    onPriorityReset("any");
    onStatusReset("all");
    onSortReset("");
  }
  return (
    <div>
      <Modal>
        <Modal.Open>
          <Button>Delete All Todos</Button>
        </Modal.Open>
        <Modal.Window>
          <ConfirmDelete onDelete={() => handleDeleteAll()}>
            Are you sure you want to delete all todos permanently? This action
            cannot be undone.
          </ConfirmDelete>
        </Modal.Window>
      </Modal>
    </div>
  );
}
