import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";
import { reduxForm, Field} from 'redux-form';
import { required, maxLengthCreator } from './../../../validators/validators'
import {Textarea} from './../../../FormsControls/FormsControls'

// style- это объект (ниже - как он представлен);

// let style = {
//   'content' : 'Profile_content__2dWJW' ( <-этот префикс автоматически формируется в инспекции браузера)
//   'item' : 'Profile_item__1GK-n' ( <-этот префикс автоматически формируется в инспекции браузера)
// }

const maxLength = maxLengthCreator(10)

const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post message={p.message} likeCount={p.likeCount} key={p.id} />)

  let onAddPost = (values) => {
    props.addPost(values.newPostBody);
  }

  return (
    <div className={style.myPosts}>
      <h2>My posts</h2>
      <div><MyPostReduxForm onSubmit={onAddPost}/></div>
      <div className={style.item}>
        {postsElements}
      </div>
    </div>
  );
};

const MyPostForm = (props) => {

  return(
    <form onSubmit={props.handleSubmit}>
      <div><Field component={Textarea} name='newPostBody' validate = {[required, maxLength]} placeholder='New post text'/></div>
      <div><button>Add post</button></div>
    </form>
  )
}

const MyPostReduxForm = reduxForm({form: 'addNewPost'})(MyPostForm)

export default MyPosts;
