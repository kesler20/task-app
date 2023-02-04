import React, { useEffect, useState } from "react";
import "./App.css";
import BackLogTaskList from "./containers/BackLogTaskList";
import Navbar from "./components/navigation/Navbar";
import ProgressTaskList from "./containers/ProgressTaskList";
import { SubTask, Task } from "./types";
import CompletedTaskList from "./containers/CompletedTaskList";
import { useStoredValue } from "./customHooks";

const App = () => {
  const [tasksInBacklog, setTasksInBacklog] = useState<Task[]>([]);
  const [tasksInProgress, setTasksInProgress] = useStoredValue(
    [],
    "tasksInProgress"
  );
  const [tasksCompleted, setTasksCompleted] = useState<Task[]>([]);
  const [subTasks, setSubtasks] = useStoredValue([], "subTasks");
  const [darkMode, setDarkMode] = useStoredValue(false, "darkMode");

  //TODO: this can be turned into a custom hook wit the taskInBackLog
  useEffect(() => {
    const getTasksFromBackend = async () => {
      await fetch(`${process.env.REACT_APP_BACKEND_URL_PROD}/task`)
        .then((res) => {
          console.log(res);
          if (res.ok) {
            res.json().then((res) => {
              console.log(res);
              setTasksInBacklog(res);
            });
          }
        })
        .catch((e) => {
          console.log(e);
        });
      await fetch(`${process.env.REACT_APP_BACKEND_URL_PROD}/task/complete`)
        .then((res) => {
          console.log(res);
          if (res.ok) {
            res.json().then((res) => {
              console.log(res);
              setTasksCompleted(res);
            });
          }
        })
        .catch((e) => {
          console.log(e);
        });
    };

    getTasksFromBackend();
  }, []);

  const toggleTheme = () => {
    const page = document.querySelector("html");
    if (darkMode) {
      page?.setAttribute("data-color-module", "dark");
      page?.setAttribute("data-dark-theme", "dark_dimmed");
    } else {
      page?.removeAttribute("data-color-module");
      page?.removeAttribute("data-dark-theme");
    }
    setDarkMode(!darkMode);
  };

  const handleStartTask = (task: Task): any => {
    setTasksInProgress([task as never]);
  };

  const handleClearCompletedTasks = async () => {
    setTasksCompleted([]);
    await fetch(`${process.env.REACT_APP_BACKEND_URL_PROD}/task/complete`, {
      method: "DELETE",
    });
  };

  const handleCreateSubTask = (subTask: SubTask) => {
    setSubtasks([...subTasks, subTask]);
  };

  const handleCompleteTask = (task: Task) => {
    setTasksInProgress([]);
    setTasksCompleted((prevState) => {
      return [...prevState, task];
    });
  };

  const handleDeleteSubTask = (subTaskId: number) => {
    console.log(subTaskId);
    setSubtasks(
      subTasks.filter((subTask: any, index: number) => index !== subTaskId)
    );
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
