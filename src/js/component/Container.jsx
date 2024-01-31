import React, { useEffect, useState } from "react";
import Input from "./Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TaskList from "./TaskList";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Container = () => {
  const [list, setList] = useState([]);
  let listLenght = list.length;

  const endpoint =
    "https://playground.4geeks.com/apis/fake/todos/user/antoniogranadino";

  async function createUser() {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify([]),
    });
    const data = await response.json();
    console.log(data);
    return data;
  }

  async function getTasks() {
    const response = await fetch(endpoint);
    const data = await response.json();
    console.log(data);
    if (response.ok) {
      setList(data);
    }
    return data;
  }

  async function updateTasks(list) {
    const response = await fetch(endpoint, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(list),
    });
    const data = await response.json();
    console.log(data);
    return data;
  }

  const deleteTask = (index) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  };

  async function deleteAllTasks(data) {
    const response = await fetch(endpoint, {
      method: "DELETE",
      body: JSON.stringify(setList([])),
    });
  }

  const addTask = (task) => {
    setList([
      ...list,
      {
        label: task,
        done: false,
      },
    ]);
  };

  const tasks = list.map((task, index) => {
    return (
      <div key={index} className="icon-show">
        <div className="task">{task.label}</div>
        <FontAwesomeIcon icon={faXmark} onClick={() => deleteTask(index)} />
      </div>
    );
  });

  useEffect(() => {
    createUser();
    getTasks();
  }, []);

  useEffect(() => {
    updateTasks(list);
  }, [list]);

  return (
    <div className="container">
      <div className="todo">
        <h1 className="text">Todo</h1>
        <div className="list">
          <Input
            deleteAllTasks={deleteAllTasks}
            addTask={addTask}
            getTasks={getTasks}
          />
          <TaskList
            tasks={
              list.length === 0 ? (
                <p className="text-addTasks">Add tasks</p>
              ) : (
                tasks
              )
            }
          />
        </div>
        <div className="text-items">Items Left: {listLenght}</div>
      </div>
    </div>
  );
};

export default Container;
