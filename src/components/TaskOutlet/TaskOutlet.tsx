import React from "react";

import style from "./style.module.css";

export function TaskOutlet({ heading, children }) {
  return (
    <div className={style.container}>
      <h2>{heading}</h2>
      {children}
    </div>
  );
}
