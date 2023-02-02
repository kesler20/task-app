import React, { useState } from "react";
import Counter from "../components/labels/Counter";
import TaskComponent from "../components/cards/TaskComponent";
import CreateTaskCard from "../components/cards/CreateTaskCard";
import { InitialBacklogPlaceholder } from "../initialData";

const BackLogTaskList = (props: any) => {
  const [tasks, setTasks] = useState([]);

  const [displayCreateTaskCard, setDisplayCreateTaskCard] = useState(false);
  const handleCreateTask = (task: any): void => {
    setTasks((prevTasks: any): any => {
      return [...prevTasks, task];
    });
  };

  const handleDeleteTask = (taskId: any): void => {
    if (taskId === 0 && tasks?.length === 1) {
      setTasks([]);
    } else {
      setTasks((prevTasks) => {
        return prevTasks.filter(
          (prevTask, prevTaskId) => !prevTaskId == taskId
        );
      });
    }
  };

  const onStartTask = (task: any, taskId: number): void => {
    props.onStartTask(task);
    handleDeleteTask(taskId);
  };

  return (
    <div className="border p-4 task-list__container">
      <div className="Subhead">
        <h4 className="Subhead-heading">Back Log</h4>
      </div>
      <div className="d-flex flex-justify-around flex-items-center">
        <code className="d-block mt-1 mb-3 color-fg-muted">
          # of tasks in the backlog
        </code>
        <Counter
          numberOfTasks={tasks.length}
          fewTasks={10}
          manyTasks={20}
          tooManyTasks={30}
        />
        <div className="position-relative text-center">
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => setDisplayCreateTaskCard((prevState) => !prevState)}
          >
            Create Task<span className="dropdown-caret"></span>
          </button>
        </div>
      </div>
      {displayCreateTaskCard && (
        <CreateTaskCard onCreateTask={handleCreateTask} />
      )}
      <div className="tasks__container border mt-3">
        {tasks?.length === 0 ? (
          <InitialBacklogPlaceholder />
        ) : (
          tasks.map((task, index) => {
            return (
              <TaskComponent
                key={index}
                taskInfo={task}
                onStartTask={() => onStartTask(task, index)}
                onDeleteTask={() => handleDeleteTask(index)}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default BackLogTaskList;
