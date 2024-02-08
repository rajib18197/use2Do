import { useReducer, useState } from "react";
import TodosList from "./TodosList";
import TodosOperations from "./TodosOperations";
import TodosStatuses from "./TodosStatuses";
import { todosReducer } from "./todosReducer";
import { TASKS_LIST } from "../../utils/data";
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
import { PAGE_SIZE } from "../../utils/constant";

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
  const [todos, dispatch] = useLocalStorage(todosReducer, TASKS_LIST, "todos");
  const [status, setStatus] = useState("all");
  const [priority, setPriority] = useState("any");
  const [sortBy, setSortBy] = useState("");

  const [page, setPage] = useState(1);
  console.log(todos);

  let count = 0;
  if (priority === "any" && status === "all") {
    count = todos.length;
  }

  // 1) Filter
  let filteredTodos = todos;

  if (priority !== "any") {
    filteredTodos = filteredTodos.filter((todo) => todo.priority === priority);
    count += filteredTodos.length;
  }

  if (status === "all") filteredTodos = filteredTodos;
  if (status === "completed") {
    filteredTodos = filteredTodos.filter((todo) => todo.completed);
    count += filteredTodos.length;
  }

  if (status === "inComplete") {
    filteredTodos = filteredTodos.filter((todo) => !todo.completed);
    count += filteredTodos.length;
  }

  console.log(count);

  // 2) Pagination
  console.log(page);

  if (page) {
    const start = (page - 1) * PAGE_SIZE;
    const end = page * PAGE_SIZE;
    console.log(start, end);
    filteredTodos = filteredTodos.slice(start, end);
  }

  // 2) Sorting
  let sortedTodos = filteredTodos;

  if (sortBy) {
    const [field, direction] = sortBy.split("-") || [];
    const modifier = direction === "asc" ? 1 : -1;

    sortedTodos = sort(filteredTodos, field, modifier);
  }

  function handleChange(value) {
    setPriority(value);
    setPage(1);
  }

  function handleStatusChange(value) {
    setStatus(value);
  }

  function handleSort(value) {
    setSortBy(value);
  }

  function handlePage(page) {
    setPage(page);
  }

  return (
    <div className={styles.layout}>
      <TodosActions>
        <AddNewTask onAddTask={dispatch} />
        <DeleteAllTodos
          onDeleteAllTodos={dispatch}
          onPriorityReset={handleChange}
          onStatusReset={handleStatusChange}
          onSortReset={handleSort}
        />
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

      <TodosList
        todos={sortedTodos}
        dispatch={dispatch}
        status={status}
        priority={priority}
        page={page}
        onPageChange={handlePage}
        count={count}
      />
    </div>
  );
}
