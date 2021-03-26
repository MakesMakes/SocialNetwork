import React from "react";
import style from "./Dialog.module.css";
import { NavLink } from "react-router-dom";

const Dialog = props => {
  return (
    <div className={style.dialog}>

      <NavLink to={"/dialogs/" + props.id} activeClassName={style.active}>
        <img src={props.img} />
        {props.name}
      </NavLink>
    </div>
  );
};

export default Dialog;