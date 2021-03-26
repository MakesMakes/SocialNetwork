import React from "react";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

// style- это объект (ниже - как он представлен);

// let style = {
//   'nav' : 'Navbar_nav__2Zcu5' ( <-этот префикс автоматически формируется в инспекции браузера)
//   'item' : 'Navbar_item__1OYF1' ( <-этот префикс автоматически формируется в инспекции браузера)
// }

const Navbar = () => {
  return (
    <nav className={style.nav}>
      <div className={style.item}>
        <NavLink to="/profile" activeClassName={style.active}>
          Profile
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/dialogs" activeClassName={style.active}>
          Message
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/news" activeClassName={style.active}>
          News
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/music" activeClassName={style.active}>
          Music
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/settings" activeClassName={style.active}>
          Settings
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/users" activeClassName={style.active}>
          Users
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
