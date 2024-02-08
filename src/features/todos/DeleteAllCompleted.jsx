import Button from "../../ui/Button";

export default function DeleteAllCompleted({ onDeleteAllCompleted, todos }) {
  function handleClick() {
    onDeleteAllCompleted({ type: "DELETE_ALL_COMPLETED" });
  }

  const hasCompletedTodos = todos.some((todo) => todo.completed);

  return (
    <Button
      variation="secondary"
      onClick={handleClick}
      disabled={!hasCompletedTodos}
    >
      Delete All Completed
    </Button>
  );
}
