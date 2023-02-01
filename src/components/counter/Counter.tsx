import * as React from "react";

interface ICounterProps {
  fewTasks: number;
  manyTasks: number;
  tooManyTasks: number;
  numberOfTasks: number;
}

const Counter: React.FunctionComponent<ICounterProps> = (props) => {
  if (props.numberOfTasks >= 0 && props.numberOfTasks < props.fewTasks) {
    return (
      <span className="IssueLabel color-bg-accent-emphasis color-fg-on-emphasis mr-1">
        {props.numberOfTasks}
      </span>
    );
  } else if (
    props.numberOfTasks >= props.fewTasks &&
    props.numberOfTasks < props.manyTasks
  ) {
    return (
      <span className="IssueLabel color-bg-success-emphasis color-fg-on-emphasis mr-1">
        {props.numberOfTasks}
      </span>
    );
  } else if (
    props.numberOfTasks >= props.manyTasks &&
    props.numberOfTasks < props.tooManyTasks
  ) {
    return (
      <span className="IssueLabel color-bg-attention-emphasis color-fg-on-emphasis mr-1">
        {props.numberOfTasks}
      </span>
    );
  } else if (props.numberOfTasks >= props.tooManyTasks) {
    return (
      <span className="IssueLabel color-bg-danger-emphasis color-fg-on-emphasis mr-1">
        {props.numberOfTasks}
      </span>
    );
  } else {
    return (
      <span className="IssueLabel color-bg-accent-emphasis color-fg-on-emphasis mr-1">
        {props.numberOfTasks}
      </span>
    );
  }
};

export default Counter;
