import React, { useState } from "react";
import "./App.css";
import BackLogTaskList from "./containers/BackLogTaskList";
import Navbar from "./components/navigation/Navbar";
import ProgressTaskList from "./containers/ProgressTaskList";
import { Task } from "./types";
import CompletedTaskList from "./containers/CompletedTaskList";

const App = () => {
  const [tasksInProgress, setTasksInProgress] = useState([]);
  const [tasksCompleted, setTasksCompleted] = useState([]);

  const handleStartTask = (task: any): any => {
    setTasksInProgress([task as never]);
  };

  const handleClearCompletedTasks = () => {
    setTasksCompleted([]);
  };

  const handleCreateSubTask = (val: any) => {
    console.log(val);
  };

  const handleCompleteTask = (task: Task) => {
    setTasksInProgress([]);
    setTasksCompleted((prevState: any): any => {
      return [...prevState, task];
    });
  };

  return (
    <div>
      <Navbar />
      <div className="d-flex flex-items-center flex-justify-center application__container">
        <div className="application__content">
          <BackLogTaskList onStartTask={handleStartTask} />
          <ProgressTaskList
            tasks={tasksInProgress}
            onAddTask={handleStartTask}
            onCreateSubTask={handleCreateSubTask}
            onCompleteTask={handleCompleteTask}
          />
          <CompletedTaskList
            onClearTasks={handleClearCompletedTasks}
            tasks={tasksCompleted}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
