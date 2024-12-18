import React from "react";
import { useState } from "react";
import style from "./style.module.css";
import user from "../../assets/icons/user.svg";
import arrow from "../../assets/icons/arrow.svg";
import Menu from "../Menu/Menu.tsx";

export function Profile() {
  const [menu, setMenu] = useState(false);

  const handle = () => {
    setMenu((prevMenu) => !prevMenu);
  };

  return (
    <div className={style.wrapper}>
      <div
        className={style.container}
        onClick={() => {
          console.log(menu);
          handle();
        }}
      >
        <img src={user} alt="user" />
        <img src={arrow} alt="arrow" />
      </div>
      {menu && <Menu />}
    </div>
  );
}
