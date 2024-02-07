import TodoItem from "./TodoItem";

export default function TodosList({ todos, onEditTodo, onDeleteTodo }) {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onEditTodo={onEditTodo}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </div>
  );
}
