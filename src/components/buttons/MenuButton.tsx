import * as React from "react";

interface IMenuButtonProps {}

const MenuButton: React.FunctionComponent<IMenuButtonProps> = (props) => {
  return (
    <button
      aria-label="Menu"
      aria-expanded="false"
      className="btn"
      type="button"
    >
      <span data-component="text">
        <svg
          aria-hidden="true"
          focusable="false"
          role="img"
          className="octicon octicon-three-bars"
          viewBox="0 0 16 16"
          width="16"
          height="16"
          fill="currentColor"
          style={{
            display: "inline-block",
            userSelect: "none",
            verticalAlign: "text-bottom",
            overflow: "visible",
          }}
        >
          <path
            fill-rule="evenodd"
            d="M1 2.75A.75.75 0 011.75 2h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 2.75zm0 5A.75.75 0 011.75 7h12.5a.75.75 0 110 1.5H1.75A.75.75 0 011 7.75zM1.75 12a.75.75 0 100 1.5h12.5a.75.75 0 100-1.5H1.75z"
          ></path>
        </svg>
      </span>
    </button>
  );
};

export default MenuButton;
