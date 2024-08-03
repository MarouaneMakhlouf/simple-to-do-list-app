# Simple To-Do List App

This is a simple to-do list application built with React and Redux, using Vite as the build tool and Tailwind CSS for styling. It also includes Font Awesome icons and react-toastify for notifications.

## Features

- **Add Tasks:** Users can add new tasks to the list.
- **Remove Tasks:** Users can remove tasks from the list.
- **Mark as Completed:** Users can mark tasks as completed.
- **Persistent State:** The app uses Redux to manage the application state.
- **Responsive Design:** Tailwind CSS is used for styling, ensuring a responsive layout.
- **Notifications:** React-toastify is used for displaying notifications.
- **Icons:** Font Awesome is used for icons throughout the app.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Redux:** A state management library for JavaScript applications.
- **React-Redux:** Official React bindings for Redux.
- **Redux Toolkit:** A set of tools that help simplify Redux development.
- **Vite:** A build tool that provides a faster and leaner development experience.
- **Tailwind CSS:** A utility-first CSS framework.
- **React-Router-Dom:** For handling routing in the app.
- **React-Toastify:** For displaying toast notifications.
- **Font Awesome:** A popular icon library used in the app.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js:** [Download Node.js](https://nodejs.org/)
- **npm or Yarn:** npm is included with Node.js. You can also install [Yarn](https://yarnpkg.com/) if you prefer.

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/todo-list-redux.git
    cd todo-list-redux
    ```

2. **Install dependencies:**
    If you're using npm:
    ```bash
    npm install
    ```
    Or if you're using Yarn:
    ```bash
    yarn install
    ```

3. **Start the development server:**
    If you're using npm:
    ```bash
    npm run dev
    ```
    Or if you're using Yarn:
    ```bash
    yarn dev
    ```

    The app will be available at `http://localhost:3000`.

## Usage

1. **Adding a Task:**
    - Type a task in the input field and press "Add" or hit Enter.
  
2. **Marking a Task as Completed:**
    - Click on a task to mark it as completed or uncompleted.

3. **Removing a Task:**
    - Click the "Remove" button next to a task to delete it from the list.

4. **Notifications:**
    - Toast notifications will appear when actions like adding or removing tasks are performed.

## Folder Structure

```plaintext
├── dist
├── node_modules
├── public
│   ├── output.css
│   └── vite.svg
├── src
│   ├── components
│   │   ├── AddTask.jsx
│   │   └── Tasks.jsx
│   ├── store
│   │   ├── slices
│   │   │   └── tasks.jsx
│   │   └── store.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── README.md
├── tailwind.config.js
└── vite.config.js
