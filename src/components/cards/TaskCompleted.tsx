import * as React from "react";
import { Task } from "../../types";

interface ITaskCompletedProps {
  task: Task;
  timeElapsed: () => number;
}

const TaskCompleted: React.FunctionComponent<ITaskCompletedProps> = (props) => {
  return (
    <div className="Block d-flex flex-justify-center flex-items-start flex-column p-5 border">
      <h3 className="Block-title">{props.task.title}</h3>
      <h4>Description</h4>
      <p className="Block-body">{props.task.description}</p>
      <h4>Time Taken</h4>
      <p className="Block-body">{props.timeElapsed()} Seconds</p>
    </div>
  );
};

export default TaskCompleted;
