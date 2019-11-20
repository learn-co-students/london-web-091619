import React from "react";
import Task from "./Task";

const TaskList = props => {
  return (
    <div>
      {props.tasks.map(task => (
        <Task key={task.text + task.category} {...task} />
        // <Task task={task}  />
        // <Task category={task.category} text={task.text} />
      ))}
    </div>
  );
};

export default TaskList;
