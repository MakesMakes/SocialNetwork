import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

// style- это объект (ниже - как он представлен);

// let style = {
//   'content' : 'Profile_content__2dWJW' ( <-этот префикс автоматически формируется в инспекции браузера)
//   'item' : 'Profile_item__1GK-n' ( <-этот префикс автоматически формируется в инспекции браузера)
// }

const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount} key={p.id} />)

  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = (e) => {
    let text = e.target.value;
    props.updateNewPostText(text);
  }

  return (
    <div>
      <h2>My posts</h2>
      <div className={style.textBut}>
        <div>
          <textarea onChange={onPostChange} value={props.newPostText} />
        </div>
        <button onClick={onAddPost}>Add post</button>
      </div>
      <div className={style.item}>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;
