import styles from "./TodosOperations.module.css";

import Filters from "../../ui/Filters";
import SortBy from "../../ui/SortBy";
import AddNewTask from "./AddNewTask";
import DeleteAllTodos from "./DeleteAllTodos";

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

export default function TodosOperations() {
  return (
    <div className={styles.operations}>
      <div className={styles.actions}>
        <AddNewTask />
        <DeleteAllTodos />
        <button>Mark All Completed</button>
        <button>Delete Completed</button>
      </div>
      <div className={styles.filterSort}>
        <Filters options={filterOptions} />
        <SortBy options={sortOptions} />
      </div>
    </div>
  );
}
