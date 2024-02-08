import AlertMessage from "../../ui/AlertMessage";
import Empty from "../../ui/Empty";
import Pagination from "../../ui/Pagination";
import TodoItem from "./TodoItem";
import styles from "./TodosList.module.css";

export default function TodosList({
  todos,
  dispatch,
  status,
  priority,
  page,
  count,
  onPageChange,
}) {
  if (status !== "all" && todos?.length === 0) {
    return <AlertMessage>No {status} task found!</AlertMessage>;
  }

  if (priority !== "any" && todos?.length === 0) {
    return <AlertMessage>No {priority} Priority task found!</AlertMessage>;
  }

  if (todos?.length === 0)
    return (
      <Empty onAddTask={dispatch}>
        Task list is empty! What do you need to get done today?
      </Empty>
    );

  console.log(count);
  return (
    <div className={styles.todoList}>
      {todos?.map((todo) => (
        <TodoItem key={todo.id} todo={todo} dispatch={dispatch} />
      ))}

      <Pagination count={count} page={page} onPageChange={onPageChange} />
    </div>
  );
}
