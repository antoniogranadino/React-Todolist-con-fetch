import React from "react";

const TaskList = (props) => {
  return <ol className="p-0">{props.tasks}</ol>;
};

export default TaskList;
