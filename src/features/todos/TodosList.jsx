import TodoItem from "./TodoItem";

export default function TodosList({ todos, onEditTodo }) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onEditTodo={onEditTodo} />
      ))}
    </div>
  );
}
