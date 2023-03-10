import * as React from "react";

interface IDownloadButtonProps {}

const DownloadButton: React.FunctionComponent<IDownloadButtonProps> = (
  props
) => {
  return (
    <button className="btn btn-primary mr-2" type="button">
      <svg
        className="octicon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        width="16"
        height="16"
      >
        <path
          fill-rule="evenodd"
          d="M7.47 10.78a.75.75 0 001.06 0l3.75-3.75a.75.75 0 00-1.06-1.06L8.75 8.44V1.75a.75.75 0 00-1.5 0v6.69L4.78 5.97a.75.75 0 00-1.06 1.06l3.75 3.75zM3.75 13a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z"
        ></path>
      </svg>
      <span>Clone</span>
      <span className="dropdown-caret"></span>
    </button>
  );
};

export default DownloadButton;
