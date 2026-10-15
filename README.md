# Task List

A simple to-do list app I built in React. You can add tasks, mark them complete or not complete, and filter the list by status.

More of my work is at [kylesantana.com](https://kylesantana.com).

> **Status:** Archived portfolio project — not maintained; dependencies are outdated and it is not intended for deployment.

## Features

- Add a task (empty input is ignored)
- Toggle a task between "Completed" and "Not Completed" by clicking its status button
- Filter the list: View All, View Completed, View Uncompleted
- Incomplete tasks are sorted above completed ones
- Starts with a few sample tasks; state is kept in memory only (nothing is saved, so a refresh resets the list)

## Tech stack

Versions are the ranges in `package.json`.

- React `^16.8.6` / React DOM `^16.8.6`
- Create React App (`react-scripts` `3.0.1`)
- Bootstrap `^4.3.1` and Reactstrap `^8.0.0` for styling (the footer uses a Reactstrap `Navbar`)

## Running locally

You need Node.js (an older LTS such as Node 10/12 matches these dependencies best).

```bash
npm install
npm start
```

Then open http://localhost:3000.

Other scripts:

- `npm run build` creates a production build in `build/`
- `npm test` runs the single smoke test in `src/App.test.js`

There are no environment variables, back end, or external services.

## Project structure

```
task_list/
├── public/
│   └── index.html       # HTML template
└── src/
    ├── index.js         # Entry point; imports Bootstrap CSS
    ├── App.js           # Holds the task list state, filtering and view buttons
    ├── TaskForm.js      # Input form for adding a task
    ├── TaskList.js      # Table of tasks with status toggle buttons
    ├── AppFooter.js     # Fixed footer
    ├── App.css
    └── App - Copy.js    # Earlier single-component version, kept for reference (not imported)
```
