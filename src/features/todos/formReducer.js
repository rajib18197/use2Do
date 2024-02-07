import { cloneArrWitoutLast, hasDuplicateValue } from "../../utils/helpers";

function validateInputField(field, value) {
  if (
    field === "tags" &&
    value
      .split(",")
      .map((el) => el.trim())
      .filter(Boolean).length === 0
  ) {
    return "Each tag must be seperated by comma";
  }

  if (
    field === "description" &&
    !(value.trim().length >= 6 && value.trim().length <= 1000)
  ) {
    return "Description must be in between (6 - 1000) characters";
  }

  if (field !== "tags" && field !== "description" && value === "") {
    return `${field[0].toUpperCase() + field.slice(1)} cannot be empty`;
  }

  return "";
}

export function formReducer(state, action) {
  switch (action.type) {
    case "CHANGE_INPUT": {
      const key = action.payload.inputField;

      // check if inputField is 'tags' and current value of the 'tags' contains duplicate. If yes then set an error message, remove the last element from the tags and returns.

      let hasDuplicate;

      if (key === "tags") {
        hasDuplicate = hasDuplicateValue(
          action.payload.value,
          action.payload.value.at(-1)
        );
      }

      if (hasDuplicate) {
        return {
          ...state,
          [key]: {
            ...state[key],
            value: cloneArrWitoutLast(state[key].value),
            error: "Duplicate values are not allowed",
          },
        };
      }

      // If everything is fine then set the value
      return {
        ...state,
        [key]: {
          ...state[key],
          value: action.payload.value,
        },
      };
    }

    case "CHANGE_ERROR": {
      const validationMessage = validateInputField(
        action.payload.inputField,
        action.payload.value
      );

      return {
        ...state,
        [action.payload.inputField]: {
          ...state[action.payload.inputField],
          error: validationMessage,
        },
      };
    }

    case "RESET_INPUT_ERROR": {
      return {
        ...state,
        [action.payload.inputField]: {
          ...state[action.payload.inputField],
          error: "",
        },
      };
    }

    case "INPUT_TOUCHED":
      return {
        ...state,
        [action.payload.inputField]: {
          ...state[action.payload.inputField],
          isTouched: true,
        },
      };
  }
}
