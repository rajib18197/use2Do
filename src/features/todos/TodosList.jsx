import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

export default function TodosList({ todos, dispatch }) {
  return (
    <div className={styles.todoList}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </div>
  );
}
