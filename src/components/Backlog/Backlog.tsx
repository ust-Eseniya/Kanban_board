import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Task } from "../Task/Task.tsx";
import { TaskOutlet } from "../TaskOutlet/TaskOutlet.tsx";
import { AddCard } from "../AddCard/AddCard.tsx";

export function Backlog({ tasks, onAddTask }) {
  const navigate = useNavigate();

  const [input, setInput] = useState<boolean>(false);
  const [btn, setBtn] = useState<boolean>(false);
  const [isBtnActive, setIsBtnActive] = useState<boolean>(true);
  const [newTask, setNewTask] = useState("" || null);

  const handleTaskClick = (taskId) => {
    navigate(`/task/${taskId}`);
  };

  const generateTaskId = () => {
    return Date.now() + Math.random().toString(36).substring(2, 9);
  };

  const newTaskHandle = () => {
    const taskId = generateTaskId();
    const taskObject = { id: taskId, name: newTask, description: "" };
    onAddTask("backlog", "backlog", taskObject);
    setNewTask("");
    setInput(false);
    setBtn(false);
  };

  const handleInputChange = (e) => {
    const name = e.target.value;
    const trimmedValue = name.trim();

    setNewTask(trimmedValue);
    setBtn(true);

    if (trimmedValue) {
      setIsBtnActive(true);
    } else {
      setBtn(false);
      setIsBtnActive(false);
    }
  };

  if (!Array.isArray(tasks)) {
    return <div>No tasks</div>;
  }

  return (
    <TaskOutlet heading="Backlog">
      <div className="tasks">
        {tasks.map((task) => (
          <Task onClick={() => handleTaskClick(task.id)} key={task.id}>
            {task.name}
          </Task>
        ))}
        {input ? <input type="text" onChange={handleInputChange} /> : ""}
        {btn && (
          <button
            disabled={!isBtnActive}
            onClick={() => {
              newTaskHandle();
            }}
            className="buttons"
          >
            Submit
          </button>
        )}{" "}
        {!input && (
          <AddCard
            onClick={() => {
              setInput(true);
            }}
          />
        )}
      </div>
    </TaskOutlet>
  );
}
