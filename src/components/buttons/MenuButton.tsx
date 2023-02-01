import * as React from "react";
import HamburgerIcon from "../icons/HamburgerIcon";

interface IMenuButtonProps {}

const MenuButton: React.FunctionComponent<IMenuButtonProps> = (props) => {
  return (
    <button aria-label="Menu" aria-expanded="false" className="btn" type="button">
      <HamburgerIcon />
    </button>
  );
};

export default MenuButton;
