export function todosReducer(state, action) {
  switch (action.type) {
    case "ADD_NEW_TASK": {
      return [...state, { ...action.payload }];
    }

    case "EDIT_TASK": {
      const nextTasksResults = state.map((task) =>
        task.id === action.payload.id ? action.payload : { ...task }
      );

      return nextTasksResults;
    }

    case "TOGGLE_COMPLETED": {
      const nextTasksResults = state.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : { ...task }
      );

      return nextTasksResults;
    }

    case "DELETE_TASK": {
      const nextTasksResults = state.filter(
        (task) => task.id !== action.payload
      );
      return nextTasksResults;
    }

    case "DELETE_ALL_TASKS": {
      return [];
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
    priority: { name: "high", color: "green" },
    completed: true,
  },

  {
    id: crypto.randomUUID(),
    title: "API Data Synchronization with Python",
    description:
      "Implement a Python solution to synchronize data between an API and a third-party database securely, optimizing data exchange.",
    tags: ["python", "api", "data synchronization"],
    priority: { name: "low", color: "blue" },
    completed: false,
  },

  {
    id: crypto.randomUUID(),
    title: "Efficient Web API Connectivity in Python",
    description:
      "Develop a Python-based solution for connecting an API to a third-party database securely, focusing on efficient data handling and exchange.",
    tags: ["web", "python", "api"],
    priority: { name: "medium", color: "silver" },
    completed: false,
  },

  {
    id: crypto.randomUUID(),
    title: "Data Handling",
    description:
      "Integrate a web API with a third-party database using secure methods, focusing on seamless data exchange and data integrity.",
    tags: ["DSA", "JS", "security"],
    priority: { name: "high", color: "green" },
    completed: true,
  },
];
