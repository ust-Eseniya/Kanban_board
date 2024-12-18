import React from "react";
import { Profile } from "../Profile/Profile.tsx";
import style from "./style.module.css";

export function Header() {
  return (
    <header className={style.header}>
      <h1>Awesome Kanban Board</h1>
      <Profile />
    </header>
  );
}
