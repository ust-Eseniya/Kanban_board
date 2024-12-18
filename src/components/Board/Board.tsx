import React, { useEffect, useState } from "react";
import style from "./style.module.css";

import { Backlog } from "../Backlog/Backlog.tsx";
import { Ready } from "../Ready/Ready.tsx";
import { InProgress } from "../InProgress/InProgress.tsx";
import { Finished } from "../Finished/Finished.tsx";

export type Task = { id: string; name: string; description: string };

export type Tasks = {
  backlog: Task[];
  ready: Task[];
  inProgress: Task[];
  finished: Task[];
};

const allTasks: Tasks = {
  backlog: [
    { id: "1", name: "Task 1", description: "lorem" },
    { id: "2", name: "Task 2", description: "There is only one word" },
  ],
  ready: [
    { id: "3", name: "Finish this project", description: "react project" },
  ],
  inProgress: [],
  finished: [],
};

const loadTasks = () => {
  const tasks = localStorage.getItem("kanbanTasks");
  return tasks ? JSON.parse(tasks) : allTasks;
};

export function Board() {
  const [tasks, setTasks] = useState<Tasks>(loadTasks);

  const onAddTask = (from: keyof Tasks, to: keyof Tasks, task: string) => {
    setTasks((prev) => ({
      ...prev,
      [from]: prev[from].filter((t) => t !== task),
      [to]: [...prev[to], task],
    }));
  };
useEffect(() => {
    localStorage.setItem("kanbanTasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const allTasks = loadTasks();
    setTasks(allTasks);
  }, []);
  
  return (
    <div className={style.board}>
      <Backlog tasks={tasks.backlog} onAddTask={onAddTask} />{" "}
      <Ready tasks={tasks.ready} onAddTask={onAddTask} />
      <InProgress tasks={tasks.inProgress} onAddTask={onAddTask} />{" "}
      <Finished tasks={tasks.finished} onAddTask={onAddTask} />
    </div>
  );
}
