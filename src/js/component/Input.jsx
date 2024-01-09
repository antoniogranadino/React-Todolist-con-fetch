import React, { useState } from "react";

const Input = (props) => {
  const [task, setTask] = useState("");
  const handlechange = (event) => {
    setTask(event.target.value);
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    task !== "" ? (props.addTask(task), setTask("")) : "";
  };

  return (
    <div>
      <form
        className="d-flex justify-content-between mb-3"
        onSubmit={handlesubmit}
      >
        <input
          size="55"
          type="text"
          className="form-control-md"
          onChange={handlechange}
          value={task}
        />
        <button type="submit" className="bg-danger">
          Add
        </button>
      </form>
    </div>
  );
};

export default Input;
