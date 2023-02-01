import React, { useState } from "react";
import "./App.css";
import ThemeButton from "./components/buttons/ThemeButton";
import MenuButton from "./components/buttons/MenuButton";

const CreateTaskCard = () => {
  return (
    <>
      <details className="details-reset details-overlay details-overlay-dark">
        <summary className="btn" aria-haspopup="dialog">
          Open dialog
        </summary>
        <div className="Box Box--overlay d-flex flex-column anim-fade-in fast">
          <div className="Box-header">
            <button
              className="Box-btn-octicon btn-octicon float-right"
              type="button"
              aria-label="Close dialog"
              data-close-dialog
            >
              <svg
                className="octicon octicon-x"
                viewBox="0 0 12 16"
                version="1.1"
                width="12"
                height="16"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48L7.48 8z"
                ></path>
              </svg>
            </button>
            <h3 className="Box-title">Box title</h3>
          </div>
          <div className="overflow-auto">
            <div className="Box-body overflow-auto">
              <p>
                The quick brown fox jumps over the lazy dog and feels as if he
                were in the seventh heaven of typography together with Hermann
                Zapf, the most famous artist of the...
              </p>
            </div>
          </div>
          <div className="Box-footer">
            <button type="button" className="btn btn-block" data-close-dialog>
              Okidoki
            </button>
          </div>
        </div>
      </details>
    </>
  );
};

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [displayCreateTaskCard, setDisplayCreateTaskCard] = useState(false);
  const toggleTheme = () => {
    const page = document.querySelector("html");
    if (darkMode) {
      page?.setAttribute("data-color-module", "dark");
      page?.setAttribute("data-dark-theme", "dark_dimmed");
    } else {
      page?.removeAttribute("data-color-module");
      page?.removeAttribute("data-dark-theme");
    }
    setDarkMode((prevState) => !prevState);
  };

  const createTask = () => {
    setDisplayCreateTaskCard((prevState) => !prevState);
  };
  
  return (
    <div>
      <div className="Header">
        <div className="Header-item">
          <a href="#" className="Header-link f4 d-flex flex-items-center">
            <svg
              height="32"
              className="octicon octicon-mark-github mr-2"
              viewBox="0 0 16 16"
              version="1.1"
              width="32"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
              ></path>
            </svg>
            <span>GitHub</span>
          </a>
        </div>
        <div className="Header-item">
          <input type="search" className="form-control Header-input" />
        </div>
        <div className="Header-item Header-item--full"></div>
        <div className="Header-item mr-0 flex-justify-between menu-buttons">
          <ThemeButton darkMode={darkMode} toggleTheme={toggleTheme} />
          <MenuButton />
        </div>
      </div>
      <div className="d-flex flex-items-center flex-justify-center application__container">
        <div className="application__content">
          <div className="border p-4">
            <div className="Subhead">
              <h4 className="Subhead-heading">Back Log</h4>
            </div>
            <code className="d-block mt-1 mb-3 color-fg-muted">
              data-color-mode="auto" data-light-theme="light"
              data-dark-theme="dark_dimmed"
            </code>
            <button
              className="btn btn-primary"
              type="button"
              onClick={createTask}
            >
              Create Task<span className="dropdown-caret"></span>
            </button>
          </div>
          {displayCreateTaskCard && <CreateTaskCard />}
          <div className="border p-4">In progress</div>
          <div className="border p-4">Completed</div>
        </div>
      </div>
    </div>
  );
};

export default App;
