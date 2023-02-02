import * as React from "react";
import BreadCrumbs from "../labels/BreadCrumbs";
import { SubTask } from "../../types";
import DeleteButton from "../buttons/DeleteButton";

interface ISubTaskComponentProps {
  subTask: SubTask;
  onDeleteSubTask: (subTask: SubTask) => any;
}

const SubTaskComponent: React.FunctionComponent<ISubTaskComponentProps> = (
  props
) => {
  return (
    <div className="d-flex flex-justify-center flex-items-start flex-column p-5 border">
      <BreadCrumbs path={[props.subTask.task, props.subTask.title]} />
      <p>{props.subTask.description}</p>
      <DeleteButton
        text="Complete Sub-task"
        onDeleteBtnClicked={props.onDeleteSubTask}
      />
    </div>
  );
};

export default SubTaskComponent;
