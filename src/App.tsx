import React, { useState } from "react";
import "./App.css";
import ThemeButton from "./components/buttons/ThemeButton";
import MenuButton from "./components/buttons/MenuButton";
import Counter from "./components/counter/Counter";
import TaskComponent from "./components/task/Task";
import CreateTaskCard from "./components/cards/CreateTaskCard";
import { InitialTasksPlaceholder } from "./initialData";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [displayCreateTaskCard, setDisplayCreateTaskCard] = useState(false);
  const [tasks, setTasks] = useState([]);

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

  const handleCreateTask = (task: any): void => {
    setTasks((prevTasks: any): any => {
      return [...prevTasks, task];
    });
  };

  return (
    <div>
      <div className="Header">
        <div className="Header-item">
          <a href="#" className="Header-link f4 d-flex flex-items-center">
            <img src="./assets/Robot.svg" alt="" />
            <span>Task Manager</span>
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
                numberOfTasks={tasks.length}
                fewTasks={10}
                manyTasks={20}
                tooManyTasks={30}
              />
            </div>
            <div className="position-relative text-center">
              <button
                className="btn btn-primary"
                type="button"
                onClick={() =>
                  setDisplayCreateTaskCard((prevState) => !prevState)
                }
              >
                Create Task<span className="dropdown-caret"></span>
              </button>
              {displayCreateTaskCard && (
                <CreateTaskCard onCreateTask={handleCreateTask} />
              )}
            </div>
            {tasks.length === 0 ? (
              <InitialTasksPlaceholder />
            ) : (
              tasks.map((task, index) => {
                return <TaskComponent key={index} taskInfo={task} />;
              })
            )}
          </div>
          <div className="border p-4">In progress</div>
          <div className="border p-4">Completed</div>
        </div>
      </div>
    </div>
  );
};

export default App;
