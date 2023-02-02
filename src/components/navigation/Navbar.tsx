import React, { useState } from "react";
import ThemeButton from "../buttons/ThemeButton";
import MenuButton from "../buttons/MenuButton";

interface INavbarProps {
  darkMode: boolean;
  onToggleTheme: (e: any) => any;
}

const Navbar: React.FunctionComponent<INavbarProps> = (props) => {
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
        <ThemeButton
          darkMode={props.darkMode}
          toggleTheme={props.onToggleTheme}
        />
        <MenuButton />
      </div>
    </div>
  );
};

export default Navbar;
