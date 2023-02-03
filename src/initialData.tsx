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
  SOP: "https://onedrive.live.com/redir?resid=D6E96D5E52A0D29C%21642412&page=Edit&wd=target%28index.one%7Ca189e21c-c8dc-4aca-96af-3c19f4165bde%2FRoutine%7C28a8a1ee-e79c-4255-adf9-289174bcefbf%2F%29&wdorigin=NavigationUrl",
};
