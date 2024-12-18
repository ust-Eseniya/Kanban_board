import React, { useState, useEffect } from "react";

import style from "./style.module.css";

export function Footer() {
  const [array, setArray] = useState({
    backlog: [],
    finished: [],
  });
  const loadTasks = () => {
    const tasks = localStorage.getItem("kanbanTasks");
    return tasks
      ? JSON.parse(tasks)
      : { backlog: [], ready: [], inProgress: [], finished: [] };
  };

  const loadTasksArray = () => {
    const allTasks = loadTasks();
    setArray(allTasks);
  };

  useEffect(() => {
    loadTasksArray();
  }, []);

  const activateTasks = array.backlog;
  const finishedTasks = array.finished;

  return (
    <footer className={style.footer}>
      <div className={style.amountTasks}>
        {" "}
        <p>Activate tasks: {activateTasks.length}</p>
        <p>Finished tasks:{finishedTasks.length}</p>
      </div>
      <p>Kanban board by Eseniya Ustyuzhantseva, 2024</p>
    </footer>
  );
}
