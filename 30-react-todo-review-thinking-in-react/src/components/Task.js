import React from "react";

const Task = ({ category, text }) => {
  //   const { category, text } = props;
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
    </div>
  );
};

export default Task;
