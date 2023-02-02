import React, { useState } from "react";
import Counter from "../components/labels/Counter";
import TaskInBackLog from "../components/cards/TaskInBackLog";
import CreateTaskCard from "../components/cards/CreateTaskCard";
import { InitialBacklogPlaceholder } from "../initialData";
import { Task } from "../types";

/**
 * @param props
 * - { onStartTask : (task: Task) => any, tasksInBacklog : Task[] }
 */
const BackLogTaskList = (props: any) => {
  const [tasks, setTasks] = useState<Task[]>(props.tasksInBacklog);
  const [displayCreateTaskCard, setDisplayCreateTaskCard] =
    useState<boolean>(false);

  /**
   * event handler for the onCreateTask() event triggered by the <CreateTaskCard />
   * @param {Task} task
   */
  const handleCreateTask = (task: Task) => {
    setTasks((prevTasks: Task[]): Task[] => {
      return [...prevTasks, task];
    });
  };

  /**
   * event handler for the onDeleteTask event triggered by the <TaskInBackLog />
   * @param {number} taskId - this it the location of the task to delete in the backlog
   */
  const handleDeleteTask = (taskId: number) => {
    if (taskId === 0 && tasks?.length === 1) {
      setTasks([]);
    } else {
      setTasks((prevTasks: Task[]) => {
        return prevTasks.filter(
          (prevTask: Task, prevTaskId: number) => prevTaskId === taskId
        );
      });
    }
  };

  /**
   * event invoked when the onStartTask() event is triggered by the <TaskInBackLog/>
   * @param {Task} task 
   * @param {number} taskId - this it the location of the task to delete in the backlog 
   */
  const onStartTask = (task: Task, taskId: number) => {
    props.onStartTask(task);
    handleDeleteTask(taskId);
  };

  return (
    // CONTAINER
    <div className="border p-4 task-list__container">
      {/* HEADER */}
      <div className="Subhead">
        <h4 className="Subhead-heading">Back Log</h4>
      </div>
      {/* BUTTON AND LABELS BELOW LINE */}
      <div className="d-flex flex-justify-around flex-items-center">
        <code className="d-block mt-1 mb-3 color-fg-muted">
          # of tasks in the backlog
        </code>
        <Counter
          numberOfTasks={tasks.length}
          fewTasks={10}
          manyTasks={20}
          tooManyTasks={30}
        />
        <div className="position-relative text-center">
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => setDisplayCreateTaskCard((prevState) => !prevState)}
          >
            Create Task<span className="dropdown-caret"></span>
          </button>
        </div>
      </div>
      {displayCreateTaskCard && (
        <CreateTaskCard onCreateTask={handleCreateTask} />
      )}
      {/* TASK CONTAINER */}
      <div className="tasks__container border mt-3">
        {tasks?.length === 0 ? (
          <InitialBacklogPlaceholder />
        ) : (
          tasks.map((task, index) => {
            return (
              <TaskInBackLog
                key={index}
                taskInfo={task}
                onStartTask={() => onStartTask(task, index)}
                onDeleteTask={() => handleDeleteTask(index)}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default BackLogTaskList;
