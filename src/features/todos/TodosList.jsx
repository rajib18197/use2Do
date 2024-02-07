import TodoItem from "./TodoItem";

export default function TodosList({ todos, dispatch }) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </div>
  );
}
