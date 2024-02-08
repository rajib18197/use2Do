import { useEffect, useReducer } from "react";
import { TASKS_LIST } from "../features/todos/todosReducer";

export function useLocalStorage(reducer, initialState, key) {
  const [todos, dispatch] = useReducer(reducer, [], () => {
    const storage = localStorage.getItem(key);
    if (storage) {
      console.log(storage);
      return JSON.parse(storage);
    }

    return initialState;
  });

  console.log(todos);

  useEffect(() => {
    console.log(todos);
    localStorage.setItem(key, JSON.stringify(todos));
  }, [todos, key]);

  return [todos, dispatch];
}
