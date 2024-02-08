import Button from "../../ui/Button";

export default function MarkAllCompleted({ onAllCompleted }) {
  function handleClick() {
    onAllCompleted({ type: "MARK_ALL_COMPLETED" });
  }

  return (
    <Button variation="secondary" onClick={handleClick}>
      Mark All Completed
    </Button>
  );
}
