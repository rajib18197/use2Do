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
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { sort } from "../../utils/helpers";
import MarkAllCompleted from "./MarkAllCompleted";
import DeleteAllCompleted from "./DeleteAllCompleted";

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
  { field: "title-asc", label: "Sort By Title (A - Z)" },
  { field: "title-desc", label: "Sort By Title (Z - A)" },
  { field: "priority-asc", label: "Sort By Priority (A - Z)" },
  { field: "priority-desc", label: "Sort By Priority (Z - A)" },
];

export default function TodosLayout() {
  const [todos, dispatch] = useLocalStorage(todosReducer, [], "todos");
  const [status, setStatus] = useState("all");
  const [priority, setPriority] = useState("any");
  const [sortBy, setSortBy] = useState("");
  console.log(todos);

  // 1) Filter
  let filteredTodos = todos;

  if (priority !== "any") {
    filteredTodos = filteredTodos.filter((todo) => todo.priority === priority);
  }

  if (status === "all") filteredTodos = filteredTodos;
  if (status === "completed")
    filteredTodos = filteredTodos.filter((todo) => todo.completed);
  if (status === "inComplete")
    filteredTodos = filteredTodos.filter((todo) => !todo.completed);

  // console.log(filteredTodos);

  // 2) Sorting
  let sortedTodos = filteredTodos;

  if (sortBy) {
    const [field, direction] = sortBy.split("-") || [];
    const modifier = direction === "asc" ? 1 : -1;

    sortedTodos = sort(filteredTodos, field, modifier);
  }

  function handleChange(value) {
    setPriority(value);
  }

  function handleStatusChange(value) {
    setStatus(value);
  }

  function handleSort(e) {
    setSortBy(e.target.value);
  }

  return (
    <div className={styles.layout}>
      <TodosActions>
        <AddNewTask onAddTask={dispatch} />
        <DeleteAllTodos onDeleteAllTodos={dispatch} />
        <MarkAllCompleted onAllCompleted={dispatch} />
        <DeleteAllCompleted onDeleteAllCompleted={dispatch} todos={todos} />
      </TodosActions>

      <TodosStatuses
        todos={todos}
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
        <SortBy
          options={sortOptions}
          currentSortValue={sortBy}
          onSort={handleSort}
        />
      </TodosOperations>

      <TodosList todos={sortedTodos} dispatch={dispatch} />
    </div>
  );
}
