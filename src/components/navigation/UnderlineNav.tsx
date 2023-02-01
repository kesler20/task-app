import React, { useState } from "react";
import { UnderlineNavs } from "../../types";

interface IUnderlineNavProps {
  navs: UnderlineNavs[];
  onChangeNav: (e: any) => any;
}

/**
 * @param props - navs = [{ name: "name of the underline nav"}...]
 */
const UnderlineNav: React.FunctionComponent<IUnderlineNavProps> = (props) => {
  const [activeNav, setActiveNav] = useState(0);

  const handleChangeActiveMenu = (e: any, index: number) => {
    setActiveNav(index);
    props.onChangeNav(e);
  };
  return (
    <nav className="UnderlineNav">
      <div className="UnderlineNav-body" role="tablist">
        {props.navs.map((nav, index) => {
          if (activeNav === index) {
            return (
              <button
                className="UnderlineNav-item"
                role="tab"
                type="button"
                aria-selected="true"
                onClick={(e) => handleChangeActiveMenu(e, index)}
              >
                {nav.name}
              </button>
            );
          } else {
            return (
              <button
                className="UnderlineNav-item"
                role="tab"
                type="button"
                onClick={(e) => handleChangeActiveMenu(e, index)}
              >
                {nav.name}
              </button>
            );
          }
        })}
      </div>
    </nav>
  );
};

export default UnderlineNav;
