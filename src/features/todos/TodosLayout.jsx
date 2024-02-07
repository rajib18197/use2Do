import { useReducer, useState } from "react";
import TodosList from "./TodosList";
import TodosOperations from "./TodosOperations";
import TodosStatuses from "./TodosStatuses";
import { TASKS_LIST, todosReducer } from "./todosReducer";
import AddNewTask from "./AddNewTask";
import DeleteAllTodos from "./DeleteAllTodos";
import Filters from "../../ui/Filters";
import SortBy from "../../ui/SortBy";
import TodosActions from "./TodosActions";

import styles from "./TodosLayout.module.css";

const statuses = [
  { value: "all", label: "All Todos" },
  { value: "completed", label: "Completed" },
  { value: "inComplete", label: "InComplete" },
];

const filterOptions = [
  { label: "Any", value: "any", color: "red" },
  { label: "Low", value: "low", color: "red" },
  { label: "Medium", value: "medium", color: "red" },
  { label: "High", value: "high", color: "red" },
];

const sortOptions = [
  { field: "name-asc", label: "Sort By Name (A - Z)" },
  { field: "name-desc", label: "Sort By Name (Z - A)" },
  { field: "priority-asc", label: "Sort By Priority (A - Z)" },
  { field: "priority-desc", label: "Sort By Priority (Z - A)" },
];

export default function TodosLayout() {
  const [todos, dispatch] = useReducer(todosReducer, TASKS_LIST);
  const [status, setStatus] = useState("all");
  const [priority, setPriority] = useState("any");

  let filteredTodos = todos;
  if (priority !== "any") {
    filteredTodos = filteredTodos.filter((todo) => todo.priority === priority);
  }

  if (status === "all") filteredTodos = filteredTodos;
  if (status === "completed")
    filteredTodos = filteredTodos.filter((todo) => todo.completed);
  if (status === "inComplete")
    filteredTodos = filteredTodos.filter((todo) => !todo.completed);

  console.log(filteredTodos);

  function handleChange(value) {
    setPriority(value);
  }

  function handleStatusChange(value) {
    setStatus(value);
  }

  return (
    <div className={styles.layout}>
      <TodosActions>
        <AddNewTask onAddTask={dispatch} />
        <DeleteAllTodos onDeleteAllTodos={dispatch} />
        {/* <button>Mark All Completed</button>
        <button>Delete Completed</button> */}
      </TodosActions>

      <TodosStatuses
        statuses={statuses}
        currentStatus={status}
        onStatusChange={handleStatusChange}
      />

      <TodosOperations>
        <Filters
          options={filterOptions}
          currentFilterValue={priority}
          onChangeFilter={handleChange}
        />
        <SortBy options={sortOptions} />
      </TodosOperations>

      <TodosList todos={filteredTodos} dispatch={dispatch} />
    </div>
  );
}
