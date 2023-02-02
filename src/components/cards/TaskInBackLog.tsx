import React, { useState } from "react";
import { Task } from "../../types";
import DeleteButton from "../buttons/DeleteButton";
import UnderlineNav from "../navigation/UnderlineNav";
import PopupCards from "./PopupCards";

interface ITaskProps {
  taskInfo: Task;
  onStartTask: (e: any) => any;
  onDeleteTask: (e: any) => any;
}

const DeskTopIcon = () => {
  return (
    <svg
      className="octicon"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      width="16"
      height="16"
    >
      <path
        fill-rule="evenodd"
        d="M1.75 2.5h12.5a.25.25 0 01.25.25v7.5a.25.25 0 01-.25.25H1.75a.25.25 0 01-.25-.25v-7.5a.25.25 0 01.25-.25zM14.25 1H1.75A1.75 1.75 0 000 2.75v7.5C0 11.216.784 12 1.75 12h3.727c-.1 1.041-.52 1.872-1.292 2.757A.75.75 0 004.75 16h6.5a.75.75 0 00.565-1.243c-.772-.885-1.193-1.716-1.292-2.757h3.727A1.75 1.75 0 0016 10.25v-7.5A1.75 1.75 0 0014.25 1zM9.018 12H6.982a5.72 5.72 0 01-.765 2.5h3.566a5.72 5.72 0 01-.765-2.5z"
      ></path>
    </svg>
  );
};

const TaskInBackLog: React.FunctionComponent<ITaskProps> = (props) => {
  const [currentTab, setCurrentTab] = useState(true);
  const [viewDescription, setViewDescription] = useState(false);
  const handleChangeNav = () => {
    setCurrentTab((prevState) => !prevState);
  };

  const handleViewDescription = () => {
    setViewDescription((prevState) => !prevState);
  };

  const onStartTask = () => {
    props.onStartTask(props.taskInfo);
    // start timer
    localStorage.setItem(
      `start ${props.taskInfo.title}`,
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
          <button
            className="btn btn-primary"
            type="button"
            onClick={onStartTask}
          >
            Start Task
            <span className="dropdown-caret"></span>
          </button>
          <DeleteButton
            text={"Delete"}
            onDeleteBtnClicked={props.onDeleteTask}
          />
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
          <a className="btn btn-outline mr-2" href={`${props.taskInfo.SOP}`}>
            <DeskTopIcon />
            <span>Check SOP</span>
          </a>
        </div>
      )}
      {viewDescription && <PopupCards text={props.taskInfo.description} />}
    </div>
  );
};

export default TaskInBackLog;
