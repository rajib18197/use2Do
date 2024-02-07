import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

export default function DeleteAllTodos() {
  return (
    <div>
      <Modal>
        <Modal.Open>
          <Button>Delete All Todos</Button>
        </Modal.Open>
        <Modal.Window>
          <h2>Delete</h2>
        </Modal.Window>
      </Modal>
    </div>
  );
}
