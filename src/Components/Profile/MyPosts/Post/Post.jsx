import React from "react";
import style from "./Post.module.css";

// s- это объект (ниже - как он представлен);

// let s = {
//   'content' : 'Profile_content__2dWJW' ( <-этот префикс автоматически формируется в инспекции браузера)
//   'item' : 'Profile_item__1GK-n' ( <-этот префикс автоматически формируется в инспекции браузера)
// }

const Post = props => {
  return (
    <div className={style.item}>
      <img src="https://w-dog.ru/wallpapers/16/18/531657912161328.jpg" />
      {props.message}
      <div>{props.likeCount} like</div>
    </div>
  );
};

export default Post;
