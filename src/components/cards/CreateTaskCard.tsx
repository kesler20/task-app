import React, { useState } from "react";
import { Task } from "../../types";
import { initialTask } from "../../initialData";

interface ICreateTaskCardProps {
  onCreateTask: (task: Task) => void;
}

const CreateTaskCard: React.FunctionComponent<ICreateTaskCardProps> = (
  props
) => {
  const [task, setTask] = useState(initialTask);

  const onCreateTask = async (task: Task) => {
    props.onCreateTask(task);
    await fetch(`${process.env.REACT_APP_BACKEND_URL_DEV}/task`, {
      method: "POST",
      body: JSON.stringify(task),
    });
  };

  const handleChange = (e: any, key: string) => {
    if (key === "description") {
      setTask((prevTask: any) => {
        return { ...prevTask, description: e.target.value };
      });
    } else if (key === "title") {
      setTask((prevTask: any) => {
        return { ...prevTask, title: e.target.value };
      });
    } else if (key === "SOP") {
      setTask((prevTask: any) => {
        return { ...prevTask, SOP: e.target.value };
      });
    } else {
      setTask((prevTask: any) => {
        return { ...prevTask, deadline: e.target.value };
      });
    }
  };

  return (
    <>
      <div className="Popover right-0 left-0 position-relative">
        <div className="Popover-message Popover-message--large text-left p-4 mt-2 Box color-shadow-large">
          <div className="form-group">
            <div className="form-group-header">
              <label htmlFor="example-text">Enter task name</label>
            </div>
            <div className="form-group-body">
              <input
                className="form-control"
                type="text"
                placeholder={task.title}
                id="example-text"
                onChange={(e) => handleChange(e, "title")}
              />
            </div>
          </div>

          <div className="form-group">
            <div className="form-group-header">
              <label htmlFor="example-text">Add SOP</label>
            </div>
            <div className="form-group-body">
              <input
                className="form-control"
                type="text"
                placeholder="SOP URL"
                id="example-text"
                onChange={(e) => handleChange(e, "SOP")}
              />
            </div>
          </div>

          <div className="form-group">
            <div className="form-group-header">
              <label htmlFor="example-select">Select a deadline</label>
            </div>
            <div className="form-group-body">
              <select
                className="form-select"
                id="example-select"
                onChange={(e) => handleChange(e, "deadline")}
              >
                <option>Deadline</option>
                <option>Today</option>
                <option>Tomorrow</option>
              </select>
            </div>
          </div>
          <div className="form-group">
            <div className="form-group-header">
              <label htmlFor="example-textarea">Add a Description</label>
            </div>
            <div className="form-group-body">
              <textarea
                onChange={(e) => handleChange(e, "description")}
                className="form-control"
                id="example-textarea"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-outline mt-2 text-bold"
            onClick={() => onCreateTask(task)}
          >
            Add Task
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateTaskCard;
