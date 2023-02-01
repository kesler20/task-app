import React, { useState } from "react";
import { initialTodo } from "../../initial_data/Tasks";


export default function CreateTaskCard(props: any) {
  const [todo, setTodo] = useState(initialTodo);

  const handleChangeName = (e: any) => {
    setTodo((prevTodo) => {
      return { ...prevTodo, description: e.target.value };
    });
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
                placeholder={todo.title}
                id="example-text"
                onChange={handleChangeName}
              />
            </div>
          </div>

          <div className="form-group">
            <div className="form-group-header">
              <label htmlFor="example-select">Select a deadline</label>
            </div>
            <div className="form-group-body">
              <select className="form-select" id="example-select">
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
                className="form-control"
                id="example-textarea"
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-outline mt-2 text-bold"
            onClick={() => props.onCreate(todo)}
          >
            Add Task
          </button>
        </div>
      </div>
    </>
  );
}
