import React, { useState } from "react";
import ThemeButton from "../buttons/ThemeButton";
import MenuButton from "../buttons/MenuButton";

interface INavbarProps {}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
  const [darkMode, setDarkMode] = useState(false);

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

  return (
    <div className="Header">
      <div className="Header-item">
        <a href="#" className="Header-link f4 d-flex flex-items-center">
          <img src="./assets/Robot.svg" alt="" />
          <span>Task Manager</span>
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
  );
};

export default Navbar;
