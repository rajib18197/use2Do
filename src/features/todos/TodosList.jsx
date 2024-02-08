import Empty from "../../ui/Empty";
import TodoItem from "./TodoItem";
import styles from "./TodosList.module.css";

export default function TodosList({ todos, dispatch }) {
  if (todos.length === 0)
    return (
      <Empty>Task list is empty! What do you need to get done today?</Empty>
    );

  return (
    <div className={styles.todoList}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </div>
  );
}
