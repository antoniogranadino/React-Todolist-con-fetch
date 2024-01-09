import React, { useState } from "react";
import Input from "./Input";
import TaskList from "./TaskList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Container = () => {
  const [list, setList] = useState([]);
  let listLenght = list.length;

  const deleteTask = (index) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  };

  const addTask = (task) => {
    setList([...list, task]);
  };

  const tasks = list.map((lists, index) => {
    return (
      <div
        key={index}
        className="d-flex justify-content-between my-1 icon-show"
      >
        <span className="py-1 text-break">{lists}</span>
        <FontAwesomeIcon
          icon={faXmark}
          onClick={() => deleteTask(index)}
          className="fs-3 show-icon"
        ></FontAwesomeIcon>
      </div>
    );
  });

  return (
    <div className="vh-100 border border-warning d-flex justify-content-center align-items-start">
      <div className="w-50 my-2 text-center border border-dark">
        <h1 className="text-center mt-5 display-1">Todo</h1>
        <div className="p-3">
          <Input addTask={addTask} />
          <TaskList
            className="d-flex justify-content-around"
            tasks={list.length === 0 ? <p>Add tasks</p> : tasks}
          />
        </div>
        <div>Items Left: {listLenght}</div>
      </div>
    </div>
  );
};

export default Container;
