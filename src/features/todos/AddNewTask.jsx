import Button from "../../ui/Button";
import Modal from "../../ui/Modal";

export default function AddNewTask() {
  return (
    <div>
      <Modal>
        <Modal.Open>
          <Button>Add New Task</Button>
        </Modal.Open>
        <Modal.Window>
          <h2>Window</h2>
        </Modal.Window>
      </Modal>
    </div>
  );
}
