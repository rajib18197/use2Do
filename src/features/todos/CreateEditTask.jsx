// import { toast } from "react-toastify";
import {
  hasErrorMessage,
  isFieldEmpty,
  isFieldTouched,
} from "../../utils/helpers";

import { useReducer } from "react";
// import { useTasksDispatch } from "../../contexts/TasksContext";
import styles from "./CreateEditTask.module.css";

import { formReducer } from "./formReducer";

import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Select from "../../ui/Select";

export default function CreateEditForm({
  onAddTask,
  taskToEdit,
  onCloseModal,
}) {
  const isEditSession = Boolean(taskToEdit?.id);

  //   const tasksDispatch = useTasksDispatch();

  const [formState, dispatch] = useReducer(formReducer, {
    title: {
      value: taskToEdit?.title || "",
      error: "",
      isTouched: false,
    },

    description: {
      value: taskToEdit?.description || "",
      error: "",
      isTouched: false,
    },

    tags: {
      value: taskToEdit?.tags || [],
      error: "",
      isTouched: false,
    },

    priority: {
      value: taskToEdit?.priority || "",
      error: "",
      isTouched: false,
    },
  });

  function handleChange(e) {
    // 1) set the 'isTouched' property of the currently typing input field to true
    dispatch({
      type: "INPUT_TOUCHED",
      payload: { inputField: e.target.name },
    });

    // 2) Reset the 'error' property of the currently typing input field to empty string
    dispatch({
      type: "RESET_INPUT_ERROR",
      payload: { inputField: e.target.name },
    });

    // 3) If the currently typing input field's name is [tags] then set action object's payload property to diferent value as it would be an array which means we need to modify the [e.target.value].
    if (e.target.name === "tags") {
      dispatch({
        type: "CHANGE_INPUT",
        payload: {
          inputField: e.target.name,
          value: e.target.value.split(","),
        },
      });
      return;
    }

    // 4) For other input fields set the payload to as it is as we don't need to modify [e.target.value];
    dispatch({
      type: "CHANGE_INPUT",
      payload: { inputField: e.target.name, value: e.target.value },
    });
  }

  function handleBlur(e) {
    // when one input field loose its focus then check if the user give the valid input or NOT
    dispatch({
      type: "CHANGE_ERROR",
      payload: { inputField: e.target.name, value: e.target.value },
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // 1) If any input field is empty then set an error message for each input field.

    if (isFieldEmpty(formState)) {
      Object.keys(formState).forEach((value) => {
        dispatch({
          type: "CHANGE_ERROR",
          payload: {
            inputField: value,
            value:
              value === "tags"
                ? formState[value].value.join(",")
                : formState[value].value,
          },
        });
      });

      return;
    }

    // 2) If No field is empty, then check if one of the input field contains error message or Not

    if (hasErrorMessage(formState)) {
      console.log(formState);
      return;
    }

    // 3) If No field is empty and No field contains error message, It means the user currently open the form for editing an existing task but without editing anything, he/she wants to submit the form. In that case show them an toast message.

    if (!isFieldTouched(formState)) {
      toast.error(
        "You have not edited anything. Change something to update your task!"
      );
      return;
    }

    // 4) If everything is fine then create a new Task and dispatch either EDIT_TASK or ADD_NEW_TASK based on the mode

    const task = {
      id: isEditSession ? taskToEdit.id : crypto.randomUUID(),
      title: formState.title.value,
      description: formState.description.value,
      tags: formState.tags.value.map((el) => el.trim()).filter(Boolean),
      priority: formState.priority.value,
    };

    if (isEditSession) {
      tasksDispatch({ type: "EDIT_TASK", payload: task });
      //   toast.success(`Task successfully edited!`);
    } else {
      onAddTask({ type: "ADD_NEW_TASK", payload: task });
      //   toast.success("New Task successfully created");
    }

    // 5) Finally, Close the modal window after the task has successfully created or edited
    onCloseModal();
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {/* <h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
        {isEditSession ? "Update Task" : "Add New Task"}
      </h2> */}

      <div>
        <FormRow label={"Title"} error={formState.title.error}>
          <Input
            type="text"
            name="title"
            value={formState.title.value}
            onChange={handleChange}
            onBlur={handleBlur}
            id="title"
          />
        </FormRow>

        <FormRow label={"Description"} error={formState.description.error}>
          <textarea
            className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
            type="text"
            name="description"
            value={formState.description.value}
            onChange={handleChange}
            onBlur={handleBlur}
            id="description"
          ></textarea>
        </FormRow>

        <div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
          <FormRow label={"Tags"} error={formState.tags.error}>
            <Input
              type="text"
              name="tags"
              placeholder="Format: 'tag1, tag2, etc.'"
              value={formState.tags.value.join(",")}
              onChange={handleChange}
              onBlur={handleBlur}
              id="tags"
            />
          </FormRow>

          <FormRow label={"Priority"} error={formState.priority.error}>
            <Select
              options={[
                { value: "low", label: "Low" },
                { value: "medium", label: "Medium" },
                { value: "high", label: "High" },
              ]}
              value={formState.priority.value}
              onSelect={handleChange}
              name="priority"
              id="priority"
            />
          </FormRow>
        </div>
      </div>

      <div className="mt-16 flex gap-2 justify-center lg:mt-20">
        <button
          type="submit"
          className="rounded bg-stone-100 px-4 py-2 text-stone-800 transition-all hover:opacity-80"
          onClick={() => onCloseModal?.()}
        >
          Cancel
        </button>

        <button
          type="submit"
          className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
        >
          {isEditSession ? "Save Task" : "Create new Task"}
        </button>
      </div>
    </form>
  );
}
