import React, { useState } from "react";
import "./App.css";
import ThemeButton from "./components/buttons/ThemeButton";
import MenuButton from "./components/buttons/MenuButton";
import Counter from "./components/counter/Counter";
import TodoComponent from "./components/todo/Todo";
import CreateTaskCard from "./components/cards/CreateTaskCard";
import { initialTodo } from "./initial_data/Tasks";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [displayCreateTaskCard, setDisplayCreateTaskCard] = useState(false);
  const [todos, setTodos] = useState([initialTodo]);
  const toggleTheme = () => {
    const page = document.querySelector("html");
    if (darkMode) {
      page?.setAttribute("data-color-module", "dark");
      page?.setAttribute("data-dark-theme", "dark_dimmed");
    } else {
      page?.removeAttribute("data-color-module");
      page?.removeAttribute("data-dark-theme");
    }
    setDarkMode((prevState) => !prevState);
  };

  const createTask = () => {
    setDisplayCreateTaskCard((prevState) => !prevState);
  };

  const handleCreateTask = (todo: any) => {
    setTodos(prevTodos => {
      return [...prevTodos, todo];
    });
  };

  return (
    <div>
      <div className="Header">
        <div className="Header-item">
          <a href="#" className="Header-link f4 d-flex flex-items-center">
            <svg
              height="32"
              className="octicon octicon-mark-github mr-2"
              viewBox="0 0 16 16"
              version="1.1"
              width="32"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
              ></path>
            </svg>
            <span>GitHub</span>
          </a>
        </div>
        <div className="Header-item">
          <input type="search" className="form-control Header-input" />
        </div>
        <div className="Header-item Header-item--full"></div>
        <div className="Header-item mr-0 flex-justify-between menu-buttons">
          <ThemeButton darkMode={darkMode} toggleTheme={toggleTheme} />
          <MenuButton />
        </div>
      </div>
      <div className="d-flex flex-items-center flex-justify-center application__container">
        <div className="application__content">
          <div className="border p-4">
            <div className="Subhead">
              <h4 className="Subhead-heading">Back Log</h4>
            </div>
            <div className="d-flex flex-justify-around flex-items-center">
              <code className="d-block mt-1 mb-3 color-fg-muted">
                number of tasks left in the backlog
              </code>
              <Counter
                numberOfTasks={todos.length}
                fewTasks={10}
                manyTasks={20}
                tooManyTasks={30}
              />
            </div>
            <div className="position-relative text-center">
              <button
                className="btn btn-primary"
                type="button"
                onClick={createTask}
              >
                Create Task<span className="dropdown-caret"></span>
              </button>
              {displayCreateTaskCard && (
                <CreateTaskCard onCreate={handleCreateTask} />
              )}
            </div>
            {todos.map((todo, index) => {
              return <TodoComponent key={index} todo={todo} />;
            })}
          </div>

          <div className="border p-4">In progress</div>
          <div className="border p-4">Completed</div>
        </div>
      </div>
    </div>
  );
};

export default App;
