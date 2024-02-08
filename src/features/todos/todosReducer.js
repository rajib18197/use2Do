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
