# Todo List Application

[![Deployment Status](https://img.shields.io/badge/Deployed-Live-green)](https://company-task-todo.vercel.app/)

## Overview
This Todo List application is built using React. It allows users to manage their tasks by adding new tasks, updating existing ones, marking them as completed, and filtering through tasks using a search functionality. The tasks are displayed in an expandable list format with additional details.

## System Design
The application consists of the following :
- **TodoList**: Displays all Todo.
- **SingleTodoItem**: Represents an individual todo with options to edit, delete, or mark as completed.
- **AddTodo**: Form to add a new todo.
- **EditTodo**: Form to edit an existing todo.
- **Search**: Filters todo based on user input.

### Data Storage
Tasks are initially loaded from a dummy JSON file (`data.json`). State management is used to simulate data persistence, and the tasks are stored in localStorage to maintain data across sessions.

## LocalStorage Functionality

This application uses localStorage to persist tasks between sessions. When a user adds, updates, or deletes a task, the changes are saved to localStorage. On initial load, the application checks for existing tasks in localStorage and loads them if available.

### LocalStorage Usage

- **Key**: `'tasks'`
- **Data Structure**: An array of task objects, where each object contains the following fields:
  - `id`: A unique identifier for the task.
  - `title`: The title of the task.
  - `description`: A detailed description of the task.
  - `completed`: A boolean indicating whether the task is completed.
  - `timestamp`: A timestamp of the last update.

This feature ensures that the user's task list remains intact even after refreshing the page or closing the browser.

## Implementation
- **Create Task**: Users can add a new task using the AddTaskForm.
- **Update Task**: Tasks can be edited by clicking the edit button and updating the task details.
- **Mark as Done**: Tasks can be marked as completed, which visually changes the task's appearance.
- **Search Tasks**: The SearchBar component allows users to filter tasks by title or description.
- **Expandable List**: Each task can be expanded to show more details, including a description and the last updated timestamp.

## Setup and Running the Application

### Prerequisites
- Node.js (version >= 12)
- npm or yarn

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Ibrahim1249/Company_Task_Todo.git
```

```bash
cd Company_Task_Todo
npm i
npm run dev
```
The application should now be running on http://localhost:5173.
