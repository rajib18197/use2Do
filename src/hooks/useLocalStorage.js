import { useEffect, useReducer } from "react";
import { TASKS_LIST } from "../features/todos/todosReducer";

export function useLocalStorage(reducer, key) {
  const [todos, dispatch] = useReducer(reducer, TASKS_LIST, () =>
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : TASKS_LIST
  );

  console.log(todos);
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(todos));
  }, [todos]);

  return [todos, dispatch];
}
