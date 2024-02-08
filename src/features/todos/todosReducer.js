export function todosReducer(state, action) {
  switch (action.type) {
    case "ADD_NEW_TODO": {
      return [...state, { ...action.payload }];
    }

    case "EDIT_TODO": {
      const nextTodosResults = state.map((todo) =>
        todo.id === action.payload.id ? action.payload : { ...todo }
      );

      return nextTodosResults;
    }

    case "TOGGLE_COMPLETED": {
      const nextTodosResults = state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : { ...todo }
      );

      return nextTodosResults;
    }

    case "MARK_ALL_COMPLETED": {
      const nextTodosResults = state.map((todo) => ({
        ...todo,
        completed: true,
      }));

      return nextTodosResults;
    }

    case "DELETE_TODO": {
      const nextTodosResults = state.filter(
        (todo) => todo.id !== action.payload
      );
      return nextTodosResults;
    }

    case "DELETE_ALL_COMPLETED": {
      const nextTodosResults = state.filter((todo) => !todo.completed);
      return nextTodosResults;
    }

    case "DELETE_ALL_TODOS": {
      return [];
    }

    case "PERSIST_TODOS": {
      console.log(action.payload);
      return action.payload.map((todo) => ({ ...todo }));
    }

    default:
      throw new Error("Unknown Action Type!");
  }
}

export const TASKS_LIST = [
  {
    id: crypto.randomUUID(),
    title: "Integration API",
    description:
      "Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
    tags: ["web", "python", "api"],
    priority: "high",
    completed: true,
  },

  {
    id: crypto.randomUUID(),
    title: "API Data Synchronization with Python",
    description:
      "Implement a Python solution to synchronize data between an API and a third-party database securely, optimizing data exchange.",
    tags: ["python", "api", "data synchronization"],
    priority: "low",
    completed: false,
  },

  {
    id: crypto.randomUUID(),
    title: "Efficient Web API Connectivity in Python",
    description:
      "Develop a Python-based solution for connecting an API to a third-party database securely, focusing on efficient data handling and exchange.",
    tags: ["web", "python", "api"],
    priority: "medium",
    completed: false,
  },

  {
    id: crypto.randomUUID(),
    title: "Data Handling",
    description:
      "Integrate a web API with a third-party database using secure methods, focusing on seamless data exchange and data integrity.",
    tags: ["DSA", "JS", "security"],
    priority: "high",
    completed: true,
  },
];
