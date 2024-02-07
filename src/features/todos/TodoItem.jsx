import TagsList from "./TagList";
import styles from "./TodoItem.module.css";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";

export default function TodoItem() {
  return (
    <div className={styles.todo}>
      <div className={styles.todoCompleted}>
        <button className={styles.button}>
          <ImCheckboxUnchecked />
        </button>
        {/* <ImCheckboxChecked /> */}
      </div>

      <h2>Learn React JS</h2>

      <div>{"description"}</div>

      <TagsList tags={["web", "python", "api"]} />

      <p>
        <span>color: </span>
        Low
      </p>

      <div>
        <button>Edit</button>
        <button>delete</button>
      </div>
    </div>
  );
}
