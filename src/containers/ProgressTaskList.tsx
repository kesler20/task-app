import React, { useState } from "react";
import TasksInPorgress from "../components/cards/TaskInProgress";
import CreateSubTaskCard from "../components/cards/CreateSubTaskCard";
import { InitialProgressPlaceholder } from "../initialData";
import { Task } from "../types";
import ReverseCounter from "../components/labels/ReverseCounter";

interface IProgressTaskListProps {
  tasks: Task[];
  onAddTask: (e: any) => any;
  onCreateSubTask: (e: any) => any;
  onCompleteTask: (e: Task) => any;
}

const ProgressTaskList: React.FunctionComponent<IProgressTaskListProps> = (
  props
) => {
  const [displayCreateSubTaskCard, setDisplayCreateSubTaskCard] =
    useState(false);
  const handleViewDisplayCreateSubTaskCard = () => {
    setDisplayCreateSubTaskCard((prevState) => !prevState);
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
        <ReverseCounter
          numberOfTasks={props.tasks.length}
          fewTasks={10}
          manyTasks={20}
          tooManyTasks={30}
        />
        <button
          className="btn btn-outline"
          type="button"
          onClick={handleViewDisplayCreateSubTaskCard}
        >
          create sub-task
          <span className="dropdown-caret"></span>
        </button>
      </div>
      <div className="position-relative text-center">
        {displayCreateSubTaskCard && (
          <CreateSubTaskCard
            onCreateSubTask={props.onCreateSubTask}
            task={props.tasks[0]}
          />
        )}
      </div>
      <div className="tasks__container border mt-3">
        {props.tasks.length === 0 ? (
          <InitialProgressPlaceholder />
        ) : (
          props.tasks.map((task, index) => {
            return (
              <TasksInPorgress
                key={index}
                taskInfo={task}
                onCreateSubTask={props.onCreateSubTask}
                onCompleteTask={() => props.onCompleteTask(task)}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default ProgressTaskList;
