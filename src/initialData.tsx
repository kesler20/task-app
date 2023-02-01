import * as React from "react";
import { Task } from "./types";

export const InitialTasksPlaceholder = () => {
  return (
    <div className="blankslate">
      <img
        src="https://ghicons.github.com/assets/images/blue/png/Pull%20request.png"
        alt=""
        className="blankslate-image"
      />
      <h3 className="blankslate-heading">
        You don't seem to have any tasks in the backlog.
      </h3>
      <p>
        Create some tasks by clicking the green button and filling the form
        update the tasks and break them down into smaller tasks.
      </p>
      <div className="blankslate-action">
        <a href="https://github.com/kesler20/task-app" className="btn-link" >
          Learn more
        </a>
      </div>
    </div>
  );
};

export const initialTask: Task = {
  description: "",
  title: "",
  deadline: "",
};
