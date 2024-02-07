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
  { value: "InComplete", label: "InComplete" },
];

const filterOptions = [
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

  //   let filteredTasksList = tasksList;
  //   if (searchTerm.length > 0)
  //     filteredTasksList = filteredTasksList.filter((task) =>
  //       task.title.toLowerCase().includes(searchTerm.toLowerCase())
  //     );

  //   console.log(filteredTasksList);

  return (
    <div className={styles.layout}>
      <TodosActions>
        <AddNewTask onAddTask={dispatch} />
        <DeleteAllTodos />
        {/* <button>Mark All Completed</button>
        <button>Delete Completed</button> */}
      </TodosActions>

      <TodosStatuses statuses={statuses} />

      <TodosOperations>
        <Filters options={filterOptions} />
        <SortBy options={sortOptions} />
      </TodosOperations>

      <TodosList todos={todos} onEditTodo={dispatch} />
    </div>
  );
}
