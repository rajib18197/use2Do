import AlertMessage from "../../ui/AlertMessage";
import Empty from "../../ui/Empty";
import TodoItem from "./TodoItem";
import styles from "./TodosList.module.css";

export default function TodosList({ todos, dispatch, status, priority }) {
  if (status !== "all" && todos.length === 0) {
    return <AlertMessage>No {status} task found!</AlertMessage>;
  }

  if (priority !== "any" && todos.length === 0) {
    return <AlertMessage>No {priority} Priority task found!</AlertMessage>;
  }

  if (todos.length === 0)
    return (
      <Empty onAddTask={dispatch}>
        Task list is empty! What do you need to get done today?
      </Empty>
    );

  return (
    <div className={styles.todoList}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
      ))}
    </div>
  );
}
