import React, { useState } from "react";
import { Task } from "../../types";
import UnderlineNav from "../navigation/UnderlineNav";
import PopupCards from "./PopupCards";

interface ITaskInPorgressProps {
  taskInfo: Task;
  onCreateSubTask: (e: any) => any;
  onCompleteTask: (e: any) => any;
}

const TasksInPorgress: React.FunctionComponent<ITaskInPorgressProps> = (
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

  const onCompleteTask = (e: any) => {
    props.onCompleteTask(e);
    localStorage.setItem(
      `end ${props.taskInfo.title}`,
      JSON.stringify(Date.now())
    );
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
          <a className="btn btn-outline" href={`${props.taskInfo.SOP}`}>
            View SOP
          </a>
          <button
            className="btn btn-outline btn-danger"
            type="button"
            onClick={onCompleteTask}
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
