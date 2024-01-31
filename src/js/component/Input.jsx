import React, { useState } from "react";

const Input = (props) => {
  const [task, setTask] = useState("");
  const handlechange = (event) => {
    setTask(event.target.value);
  };

  const api = props.getTasks;

  const handlesubmit = (e) => {
    e.preventDefault();

    task !== "" ? (props.addTask(task), setTask("")) : "";
  };

  return (
    <>
      <form className="form" onSubmit={handlesubmit}>
        <input type="text" onChange={handlechange} value={task} />
        <div className="button">
          <button className="btn btn-success">Add</button>
          <button onClick={props.deleteAllTasks} className="btn btn-secondary">
            Clear
          </button>
        </div>
      </form>
    </>
  );
};

export default Input;
