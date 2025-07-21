import React, { StrictMode } from "react";  // Make sure React is imported
import { createRoot } from "react-dom/client";
import "./index.css";
import App from './app.jsx';  // Import 'App' with uppercase 'A'

// Declare the DATA array above the render method
const DATA = [
  { id: "todo-0", name: "Eat", completed: true },
  { id: "todo-1", name: "Sleep", completed: false },
  { id: "todo-2", name: "Repeat", completed: false },
];

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App tasks={DATA} />  {/* Pass DATA to App as tasks */}
  </StrictMode>
);
