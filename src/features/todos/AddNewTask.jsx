import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateEditForm from "./CreateEditTask";

export default function AddNewTask({ onAddTask }) {
  return (
    <div>
      <Modal>
        <Modal.Open opens="addTask">
          <Button>Add New Task</Button>
        </Modal.Open>
        <Modal.Window opens="addTask">
          <CreateEditForm onAddTask={onAddTask} />
        </Modal.Window>
      </Modal>
    </div>
  );
}
