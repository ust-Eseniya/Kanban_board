import React from "react";
import style from "./style.module.css";

interface TaskProps {
  children: string;
  onClick: () => void;
}

export function Task({ children, onClick }: TaskProps) {
  return (
    <div className={style.task} onClick={onClick}>
      {children}
    </div>
  );
}
