import React, { useState } from "react";

function Todo(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(props.name);

  // Handle the checkbox change event (toggle completed status)
  function handleCheckboxChange() {
    props.toggleTaskCompleted(props.id);  // Call toggleTaskCompleted with the task ID
  }

  // Handle the delete button click event
  function handleDelete() {
    props.deleteTask(props.id);  // Call deleteTask with the task ID
  }

  function handleEdit() {
    setIsEditing(true);
  }

  function handleChange(e) {
    setNewName(e.target.value);
  }

  function handleCancel() {
    setIsEditing(false);
    setNewName(props.name);
  }

  function handleSave(e) {
    e.preventDefault();
    if (newName.trim() !== "") {
      props.editTask(props.id, newName);
      setIsEditing(false);
    }
  }

  if (isEditing) {
    return (
      <li className="todo stack-small">
        <form className="stack-small" onSubmit={handleSave}>
          <div className="form-group">
            <input
              className="todo-text-input"
              type="text"
              value={newName}
              onChange={handleChange}
              autoFocus
            />
          </div>
          <div className="btn-group">
            <button type="submit" className="btn btn__primary btn__edit">Save</button>
            <button type="button" className="btn btn__secondary btn__edit" onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      </li>
    );
  }

  return (
    <li className="todo stack-small">
      <div className="c-cb">
        <input
          id={props.id}
          type="checkbox"
          defaultChecked={props.completed}
          onChange={handleCheckboxChange}  // Handle checkbox change
        />
        <label className="todo-label" htmlFor={props.id}>
          {props.name}
        </label>
      </div>

      <div className="btn-group">
        <button type="button" className="btn" onClick={handleEdit}>
          Edit <span className="visually-hidden">{props.name}</span>
        </button>
        <button
          type="button"
          className="btn btn__danger"
          onClick={handleDelete}  // Handle delete button click
        >
          Delete <span className="visually-hidden">{props.name}</span>
        </button>
      </div>
    </li>
  );
}

export default Todo;
