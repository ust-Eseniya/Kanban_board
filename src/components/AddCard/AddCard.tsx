import React from "react";

import style from "./style.module.css";

export function AddCard({ onClick }) {
  return (
    <button className={style.button} onClick={onClick}>
      + Add Card
    </button>
  );
}
