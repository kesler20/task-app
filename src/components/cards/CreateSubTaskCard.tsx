import React, { useState } from "react";
import { Task } from "../../types";
import { SubTask } from "../../types";

interface ICreateSubTaskCardProps {
  onCreateSubTask: (subTask: SubTask) => void;
  task: Task;
}

const CreateSubTaskCard: React.FunctionComponent<ICreateSubTaskCardProps> = (
  props
) => {
  const [subTask, setSubTask] = useState({
    task: props.task.title,
    title: "",
    description: "",
    SOP: props.task.title,
  } as SubTask);

  const handleChange = (e: any, key: string) => {
    if (key === "description") {
      setSubTask((prevTask: any) => {
        return { ...prevTask, description: e.target.value };
      });
    } else if (key === "title") {
      setSubTask((prevTask: any) => {
        return { ...prevTask, title: e.target.value };
      });
    } else {
      setSubTask((prevTask: any) => {
        return { ...prevTask, task: e.target.value };
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
                placeholder={props.task.title}
                id="example-text"
                onChange={(e) => handleChange(e, "task")}
              />
            </div>
          </div>

          <div className="form-group">
            <div className="form-group-header">
              <label htmlFor="example-text">Enter sub-task name</label>
            </div>
            <div className="form-group-body">
              <input
                className="form-control"
                type="text"
                placeholder={subTask.title}
                id="example-text"
                onChange={(e) => handleChange(e, "title")}
              />
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
            onClick={() => props.onCreateSubTask(subTask)}
          >
            Add Sub-task
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateSubTaskCard;
