import * as React from "react";
import BreadCrumbs from "../labels/BreadCrumbs";

interface ISubTaskComponentProps {}

const SubTaskComponent: React.FunctionComponent<ISubTaskComponentProps> = (
  props
) => {
  return <BreadCrumbs />;
};

export default SubTaskComponent;
