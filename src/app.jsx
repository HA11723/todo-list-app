import React, { useState, useEffect } from "react";  // Import useEffect
import { nanoid } from "nanoid";  // For generating unique task IDs
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";  // Import the Todo component
import "./app.css";  // Import your app's CSS

const FILTER_MAP = {
  All: () => true,
  Active: task => !task.completed,
  Completed: task => task.completed
};
const FILTER_NAMES = Object.keys(FILTER_MAP);

function App(props) {
  // State for tasks
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem('tasks');
    return stored ? JSON.parse(stored) : (props.tasks || []);
  });
  const [filter, setFilter] = useState('All');

  // Function to handle adding a new task
  function addTask(name) {
    const newTask = {
      id: `todo-${nanoid()}`,  // Generate a unique ID using nanoid
      name,
      completed: false,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  // Function to handle toggling task completion
  function toggleTaskCompleted(id) {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  // Function to delete a task
  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  }

  // Function to handle editing a task's name
  function editTask(id, newName) {
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return { ...task, name: newName };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  // Function to clear all completed tasks
  function clearCompletedTasks() {
    setTasks(tasks.filter(task => !task.completed));
  }

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // Create task list by transforming each task into a Todo component
  const taskList = tasks
    .filter(FILTER_MAP[filter])
    .map((task) => (
      <Todo
        key={task.id}
        id={task.id}
        name={task.name}
        completed={task.completed}
        toggleTaskCompleted={toggleTaskCompleted}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    ));

  // Update the heading text dynamically
  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        {FILTER_NAMES.map(name => (
          <FilterButton
            key={name}
            name={name}
            isPressed={name === filter}
            setFilter={setFilter}
          />
        ))}
      </div>
      <button className="btn btn__danger btn__clear" onClick={clearCompletedTasks}>
        Clear Completed
      </button>
      <h2 id="list-heading">{headingText}</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {taskList.length === 0 ? (
          <li className="todo-empty">No tasks to show!</li>
        ) : (
          taskList
        )}
      </ul>
    </div>
  );
}

export default App;
