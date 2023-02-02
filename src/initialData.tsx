import * as React from "react";
import { Task } from "./types";
const Robot = require("./assets/Robot.png");

export const InitialBacklogPlaceholder = () => {
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
        <a href="https://github.com/kesler20/task-app" className="btn-link">
          Learn more
        </a>
      </div>
    </div>
  );
};
export const InitialProgressPlaceholder = () => {
  return (
    <div className="placeholder">
      <img src={String(Robot)} alt="" />
      <h3 className="blankslate-heading">
        You don't seem to be working on any task.
      </h3>
      <p>Add a task to start working and cleaning the back log.</p>
    </div>
  );
};

export const InitialCompletedPlaceholder = () => {
  return (
    <div className="placeholder">
      <img
        src="https://github.com/probot.png"
        className="img-responsive grayscale"
        alt=""
      />
      <h3 className="blankslate-heading">
        You don't seem to have completed any tasks.
      </h3>
      <p>Move some tasks in Progress and complete them to feel productive.</p>
    </div>
  );
};

export const initialTask: Task = {
  description: "",
  title: "",
  deadline: "",
  SOP: "https://onedrive.live.com/redir?resid=D6E96D5E52A0D29C%211352460&page=Edit&wd=target%28New%20Section%201.one%7C31aecaab-bf62-45ca-9b3b-0b2f4b8b7a94%2FDesign%7Ca7768af7-56ad-cf41-b0d3-385f1f97da45%2F%29&wdorigin=NavigationUrl",
};
