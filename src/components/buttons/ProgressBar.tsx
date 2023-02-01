import * as React from "react";

interface IProgressBarProps {}

const ProgressBar: React.FunctionComponent<IProgressBarProps> = (props) => {
  return (
    <>
      <span className="text-small color-fg-muted mr-2">4 of 16</span>
      <span className="Progress d-inline-flex" style={{ width: "160px" }}>
        <span
          className="Progress-item color-bg-success-emphasis"
          style={{ width: "25%" }}
        ></span>
      </span>
    </>
  );
};

export default ProgressBar;
