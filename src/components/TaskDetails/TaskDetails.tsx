import React, { useState, useEffect } from "react";
import style from "./style.module.css";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "../Header/Header.tsx";
import { Footer } from "../Footer/Footer.tsx";
import { Task } from "../Board/Board.tsx";

export default function TaskDetails() {
  const [task, setTask] = useState<Task | null>(null);
  const [edit, setEdit] = useState<boolean>(false);
  const [text, setText] = useState<string>("");

  const navigate = useNavigate();
  const { taskId } = useParams();

  const handleClose = () => {
    navigate("/");
  };

  useEffect(() => {
    const loadTasks = () => {
      const JSONtasks = localStorage.getItem("kanbanTasks");
      if (JSONtasks) return JSON.parse(JSONtasks);
    };

    const findTask = (tasks) => {
      for (const part of Object.values(tasks)) {
        const foundTask = part.find((task) => task.id === taskId);
        if (foundTask) return foundTask;
      }
    };

    const taskData = loadTasks();
    if (taskData) {
      const foundTask = findTask(taskData);
      if (foundTask) {
        setTask(foundTask);
        setText(foundTask.description || "");
      }
    }
  }, [taskId]);

  const handleEditToggle = () => {
    if (edit) {
      const updatedTask = { ...task, description: text };

      const taskData = JSON.parse(localStorage.getItem("kanbanTasks") || "{}");

      const updatedTasks = { ...taskData };

      for (const part in updatedTasks) {
        const taskIndex = updatedTasks[part].findIndex((t) => t.id === task.id);

        if (taskIndex !== -1) {
          updatedTasks[part][taskIndex] = updatedTask;
        }
      }

      localStorage.setItem("kanbanTasks", JSON.stringify(updatedTasks));

      setTask(updatedTask);
    }

    setEdit((prev) => !prev);
  };

  const handleChange = (event) => {
    setText(event.target.value);
    setEdit(true);
  };

  if (!task) {
    return <div>Loading...</div>;
  }

  const isText =
    task.description &&
    task.name &&
    task.description.trim() !== "" &&
    task.name.trim() !== "";

  return (
    <div>
      <Header />
      <main className={style.main}>
        <div className={style.innerContainer}>
          {isText ? (
            <div className={style.inputWrapper}>
              <h2>{task.name}</h2>
              <textarea
                value={text}
                onChange={handleChange}
                rows={5}
                cols={30}
              />
              <button
                onClick={handleEditToggle}
                disabled={!edit}
                className="buttons"
              >
                {edit ? "Save" : "Edit"}
              </button>
            </div>
          ) : (
            <div className={style.noDescriptionCont}>
              {" "}
              <h2>{task.name}</h2>
              <p>This task has no description</p>
            </div>
          )}
          <svg
            onClick={handleClose}
            xmlns="http://www.w3.org/2000/svg"
            height="48px"
            viewBox="0 -960 960 960"
            width="48px"
            fill="#5f6368"
          >
            <path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
          </svg>
        </div>
      </main>
      <Footer />
    </div>
  );
}
