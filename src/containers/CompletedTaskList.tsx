import React, { useState } from "react";
import ReverseCounter from "../components/labels/ReverseCounter";
import { Task } from "../types";
import { InitialCompletedPlaceholder } from "../initialData";
import TaskComponent from "../components/cards/TaskComponent";
import DeleteButton from "../components/buttons/DeleteButton";

interface ICompletedTaskListProps {
  tasks: Task[],
  onClearTasks : (e : any) => any
}

const CompletedTaskList: React.FunctionComponent<ICompletedTaskListProps> = (
  props
) => {
  return (
    <div className="border p-4 task-list__container">
      <div className="Subhead">
        <h4 className="Subhead-heading">Completed</h4>
      </div>
      <div className="d-flex flex-justify-around flex-items-center">
        <code className="d-block mt-1 mb-3 color-fg-muted">
          # of tasks completed
        </code>
        <ReverseCounter
          numberOfTasks={props.tasks.length}
          fewTasks={10}
          manyTasks={20}
          tooManyTasks={30}
        />
        <div className="position-relative text-center">
          <DeleteButton text={"Clear Completed Tasks"} onDeleteBtnClicked={props.onClearTasks} />
        </div>
      </div>
      <div className="tasks__container--progress border mt-3">
        {props.tasks.length === 0 ? (
          <InitialCompletedPlaceholder />
        ) : (
          props.tasks.map((task, index) => {
            return (
              <TaskComponent
                key={index}
                taskInfo={task}
                onStartTask={(e) => console.log(e)}
                onDeleteTask={(e) => console.log(e)}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default CompletedTaskList;
