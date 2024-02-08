import styles from "./Empty.module.css";

import AddNewTask from "../features/todos/AddNewTask";
import { FaRegFaceSmile } from "react-icons/fa6";

export default function Empty({ onAddTask, children }) {
  return (
    <div className={styles.empty}>
      <div className={styles.text}>
        <FaRegFaceSmile />
        <p>{children}</p>
      </div>
      <div>
        <AddNewTask onAddTask={onAddTask} />
      </div>
    </div>
  );
}
