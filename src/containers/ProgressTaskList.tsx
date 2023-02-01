import React, { useState } from "react";
import Counter from "../components/counter/Counter";
import TaskComponent from "../components/cards/TaskComponent";
import CreateTaskCard from "../components/cards/CreateTaskCard";
import { InitialTasksPlaceholder } from "../initialData";
  
interface IProgressTaskListProps {}

const ProgressTaskList: React.FunctionComponent<IProgressTaskListProps> = (
  props
) => {
  const [tasks, setTasks] = useState([]);

  const [displayCreateTaskCard, setDisplayCreateTaskCard] = useState(false);

  const handleCreateTask = (task: any): void => {
    setTasks((prevTasks: any): any => {
      return [...prevTasks, task];
    });
  };

  return (
    <div className="border p-4 task-list__container">
      <div className="Subhead">
        <h4 className="Subhead-heading">In Progress</h4>
      </div>
      <div className="d-flex flex-justify-around flex-items-center">
        <code className="d-block mt-1 mb-3 color-fg-muted">
          # of tasks in progress
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
          onClick={() => setDisplayCreateTaskCard((prevState) => !prevState)}
        >
          Create Task<span className="dropdown-caret"></span>
        </button>
        {displayCreateTaskCard && (
          <CreateTaskCard onCreateTask={handleCreateTask} />
        )}
      </div>
      <div className="tasks__container border mt-3">
        {tasks.length === 0 ? (
          <InitialTasksPlaceholder />
        ) : (
          tasks.map((task, index) => {
            return <TaskComponent key={index} taskInfo={task} />;
          })
        )}
      </div>
    </div>
  );
};

export default ProgressTaskList;
