import * as React from "react";
import { Todo } from "../../types";

interface ITodoProps {
  todo: Todo;
}

const TodoComponent: React.FunctionComponent<ITodoProps> = (props) => {
  return (
    <div className="border p-4">
      <div className="Subhead">
        <h4 className="Subhead-heading">{props.todo.title}</h4>
      </div>
      <details className="details-overlay details-overlay-dark">
        <code className="d-block mt-1 mb-3 color-fg-muted">deadline</code>
        <summary className="btn btn-primary">
          Description<span className="dropdown-caret"></span>
        </summary>
        <div
          className="position-relative color-bg-default rounded p-3 mt-2"
          style={{ zIndex: 112 }}
        >
          {props.todo.description}
        </div>
      </details>
    </div>
  );
};

export default TodoComponent;
