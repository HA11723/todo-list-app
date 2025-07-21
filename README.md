# Todo List App

A simple and modern Todo List application built with React. Easily add, edit, complete, delete, and filter your tasks. All your tasks are saved in your browser, so you never lose your progress!

## Features

- Add new tasks
- Edit existing tasks
- Mark tasks as completed or active
- Delete tasks
- Filter tasks by All, Active, or Completed
- Clear all completed tasks
- Persistent storage with localStorage
- Responsive and accessible UI

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/HA11723/todo-list-app.git
   cd todo-list-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and go to `http://localhost:5173` (or the port shown in your terminal).

## Usage

- Add a task using the input field and "Add" button.
- Click the checkbox to mark a task as completed or active.
- Use the Edit button to rename a task.
- Use the Delete button to remove a task.
- Filter tasks using the All, Active, or Completed buttons.
- Click "Clear Completed" to remove all completed tasks at once.

## Folder Structure

- `src/` - Main source code
  - `components/` - React components (Form, FilterButton, Todo)
  - `app.jsx` - Main app logic
  - `app.css` - App styles

## License

This project is open source and free to use.
