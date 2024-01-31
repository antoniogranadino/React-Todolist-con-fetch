import React from "react";

const TaskList = (props) => {
  return (
    <div className="tasks">
      <div>{props.tasks}</div>
    </div>
  );
};

export default TaskList;
