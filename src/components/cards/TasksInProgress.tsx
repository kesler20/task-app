import React, { useState } from "react";
import { Task } from "../../types";
import UnderlineNav from "../navigation/UnderlineNav";
import PopupCards from "./PopupCards";
import CreateSubTaskCard from "./CreateSubTaskCard";

interface ITasksInPorgressProps {
  taskInfo: Task;
  onCreateSubTask: (e: any) => any;
}

const TasksInPorgress: React.FunctionComponent<ITasksInPorgressProps> = (
  props
) => {
  const [currentTab, setCurrentTab] = useState(true);
  const [viewDescription, setViewDescription] = useState(false);

  const handleChangeNav = () => {
    setCurrentTab((prevState) => !prevState);
  };

  const handleViewDescription = () => {
    setViewDescription((prevState) => !prevState);
  };


  return (
    <div className="border p-4">
      <h4>{props.taskInfo.title}</h4>

      <code className="d-block mt-1 mb-3 color-fg-muted">
        deadline : {props.taskInfo.deadline}
      </code>

      <UnderlineNav
        navs={[{ name: "Remove" }, { name: "View Info" }]}
        onChangeNav={handleChangeNav}
      />
      {currentTab ? (
        <div className="d-flex flex-justify-around m-3 flex-items-center">
          <button
            className="btn btn-outline btn-danger"
            type="button"
            onClick={handleViewDescription}
          >
            complete task
          </button>
        </div>
      ) : (
        <div className="d-flex flex-justify-around m-3 flex-items-center">
          <button
            className="btn btn-outline"
            type="button"
            onClick={handleViewDescription}
          >
            View Description
          </button>
          <a
            className="btn btn-outline mr-2"
            href="https://github.com/kesler20/task-app"
          >
            <span>Launch Timer</span>
          </a>
        </div>
      )}

      {viewDescription && <PopupCards text={props.taskInfo.description} />}
    </div>
  );
};

export default TasksInPorgress;
