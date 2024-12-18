import React from "react";
import style from "./style.module.css";

export function Dropdown({ tasksList, addTask }) {
  const handleChange = (event) => {
    const selectedTaskId = event.target.value;
    const selectedTask = tasksList.find((task) => task.id === selectedTaskId);
    if (selectedTask) {
      addTask(selectedTask);
    }
  };

  if (!Array.isArray(tasksList)) {
    return <div>Invalid tasks data</div>;
  }

  return (
    <select className={style.dropdown} onChange={handleChange} defaultValue="">
      <option value="" disabled>
        Select a task
      </option>
      {tasksList.map((task) => (
        <option key={task.id} value={task.id}>
          {task.name}
        </option>
      ))}
    </select>
  );
}
