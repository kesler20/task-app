import React from "react";
import ReverseCounter from "../components/labels/ReverseCounter";
import { Task } from "../types";
import { InitialCompletedPlaceholder } from "../initialData";
import DeleteButton from "../components/buttons/DeleteButton";
import TaskCompleted from "../components/cards/TaskCompleted";

interface ICompletedTaskListProps {
  tasks: Task[];
  onClearTasks: (e: any) => any;
}

/**
 * @param props { tasks , onClearTasks }
 */
const CompletedTaskList: React.FunctionComponent<ICompletedTaskListProps> = (
  props
) => {

  /**
   * get the time elapsed since the completed task started
   * @param {Task} task 
   * @returns {number} Math.floor((JSON.parse(end) - JSON.parse(start)) / 1000)
   */
  const getTimeElapsed = (task: Task): number => {
    let start = localStorage.getItem(`start ${task.title}`);
    let end = localStorage.getItem(`end ${task.title}`);
    if (start === null) return 0;
    if (end === null) return 0;
    return Math.floor((JSON.parse(end) - JSON.parse(start)) / 1000);
  };
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
          <DeleteButton
            text={"Clear Completed Tasks"}
            onDeleteBtnClicked={props.onClearTasks}
          />
        </div>
      </div>
      <div className="tasks__container border mt-3">
        {props.tasks.length === 0 ? (
          <InitialCompletedPlaceholder />
        ) : (
          props.tasks.map((task, index) => {
            return (
              <TaskCompleted
                key={index}
                task={task}
                timeElapsed={() => getTimeElapsed(task)}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default CompletedTaskList;
