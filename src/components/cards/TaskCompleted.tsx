import * as React from "react";
import { Task } from "../../types";

interface ITaskCompletedProps {
  task: Task;
  timeElapsed: () => number;
}

const TaskCompleted: React.FunctionComponent<ITaskCompletedProps> = (props) => {
  return (
    <div className="Block">
      <h3 className="Block-title">{props.task.title}</h3>
      <p>Description</p>
      <p className="Block-body">{props.task.description}</p>
      <p>Time Taken</p>
      <p className="Block-body">{props.timeElapsed()} Seconds</p>
    </div>
  );
};

export default TaskCompleted;
