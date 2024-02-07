import TodosLayout from "../features/todos/TodosLayout";
import Header from "./Header";

export default function AppLayout() {
  return (
    <div>
      <Header />
      <TodosLayout />
    </div>
  );
}
