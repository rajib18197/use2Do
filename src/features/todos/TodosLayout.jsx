import TodosList from "./TodosList";
import TodosOperations from "./TodosOperations";
import TodosStatuses from "./TodosStatuses";

export default function TodosLayout() {
  return (
    <div>
      <TodosStatuses />
      <TodosOperations />
      <TodosList />
    </div>
  );
}
