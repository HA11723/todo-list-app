import React, { useState } from "react";

function Form({ addTask }) {
  const [taskName, setTaskName] = useState("");

  // Handle input changes
  function handleChange(event) {
    setTaskName(event.target.value);  // Update taskName state
  }

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();

    if (taskName.trim() === "") return;  // Don't submit if input is empty

    addTask(taskName);  // Pass taskName to addTask to update the task list
    setTaskName("");  // Clear the input field after submission
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        value={taskName}  // Bind input value to taskName state
        onChange={handleChange}  // Update state on input change
        autoComplete="off"
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
