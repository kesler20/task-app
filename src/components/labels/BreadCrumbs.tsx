import * as React from "react";

interface IBreadCrumbsProps {
  path: string[];
}

const BreadCrumbs: React.FunctionComponent<IBreadCrumbsProps> = (props) => {
  return (
    <nav aria-label="Breadcrumb">
      <ol>
        {props.path.map((pathName, index) => {
          return (
            <li className="breadcrumb-item" key={index}>
              <a href="#">{pathName}</a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default BreadCrumbs;
