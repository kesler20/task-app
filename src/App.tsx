import React, { useState } from "react";
import "./App.css";
import BackLogTaskList from "./containers/BackLogTaskList";
import Navbar from "./components/navigation/Navbar";
import ProgressTaskList from "./containers/ProgressTaskList";
import { SubTask, Task } from "./types";
import CompletedTaskList from "./containers/CompletedTaskList";

const App = () => {
  const [tasksInBacklog, setTasksInBacklog] = useState<Task[]>([]);
  const [tasksInProgress, setTasksInProgress] = useState<Task[]>([]);
  const [tasksCompleted, setTasksCompleted] = useState<Task[]>([]);
  const [subTasks, setSubtasks] = useState<SubTask[]>([]);
  const [darkMode, setDarkMode] = useState<boolean>(false);

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

  const handleStartTask = (task: Task): any => {
    setTasksInProgress([task as never]);
  };

  const handleClearCompletedTasks = () => {
    setTasksCompleted([]);
  };

  const handleCreateSubTask = (subTask: SubTask) => {
    setSubtasks((prevState) => {
      return [...prevState, subTask];
    });
  };

  const handleCompleteTask = (task: Task) => {
    setTasksInProgress([]);
    setTasksCompleted((prevState) => {
      return [...prevState, task];
    });
  };

  const handleDeleteSubTask = (subTaskId: number) => {
    console.log(subTaskId);
    setSubtasks((prevSubTasks) => {
      return prevSubTasks.filter((prevSubTasks, index) => index !== subTaskId);
    });
  };

  return (
    <>
      <Navbar darkMode={darkMode} onToggleTheme={toggleTheme} />
      <div className="d-flex flex-items-center flex-justify-center application__container">
        <div className="application__content">
          <BackLogTaskList
            onStartTask={handleStartTask}
            tasksInBacklog={tasksInBacklog}
          />
          <ProgressTaskList
            tasks={tasksInProgress}
            subTasks={subTasks}
            onAddTask={handleStartTask}
            onCreateSubTask={handleCreateSubTask}
            onCompleteTask={handleCompleteTask}
            onDeleteSubTask={handleDeleteSubTask}
          />
          <CompletedTaskList
            onClearTasks={handleClearCompletedTasks}
            tasks={tasksCompleted}
          />
        </div>
      </div>
    </>
  );
};

export default App;
