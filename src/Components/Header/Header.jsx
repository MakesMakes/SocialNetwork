import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={style.header}>
      <img src="https://img2.freepng.ru/20180622/lfw/kisspng-social-media-vk-social-networking-service-computer-vkontakte-5b2d8b9ee6ff60.3151932015297115189462.jpg" />
      <div className={style.login}>
        {props.isAuth ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>  :
          <NavLink to={'/login'}>Login</NavLink>
        }
      </div>
    </header>
  );
};

export default Header;
