import * as React from "react";

interface ISearchButtonProps {}

const SearchButton: React.FunctionComponent<ISearchButtonProps> = (props) => {
  return (
    <button type="button" className="btn">
      <span data-component="text">
        <svg
          aria-hidden="true"
          focusable="false"
          role="img"
          className="octicon octicon-search"
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
            d="M11.5 7a4.499 4.499 0 11-8.998 0A4.499 4.499 0 0111.5 7zm-.82 4.74a6 6 0 111.06-1.06l3.04 3.04a.75.75 0 11-1.06 1.06l-3.04-3.04z"
          ></path>
        </svg>
      </span>
    </button>
  );
};

export default SearchButton;
