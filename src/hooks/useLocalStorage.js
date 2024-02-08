import { useEffect, useReducer } from "react";

export function useLocalStorage(reducer, initialState, key) {
  const [todos, dispatch] = useReducer(reducer, [], () => {
    const storage = JSON.parse(localStorage.getItem(key));
    if (storage) {
      return storage;
    }

    return initialState;
  });

  useEffect(() => {
    console.log(todos);
    if (todos?.length === 0) {
      localStorage.setItem(key, null);
      return;
    }
    localStorage.setItem(key, JSON.stringify(todos));
  }, [todos, key]);

  return [todos, dispatch];
}
