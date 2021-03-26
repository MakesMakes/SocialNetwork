import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../Redux/profilePage_Reducer';
import MyPosts from "./MyPosts";
import { connect } from "react-redux";

// style- это объект (ниже - как он представлен);

// let style = {
//   'content' : 'Profile_content__2dWJW' ( <-этот префикс автоматически формируется в инспекции браузера)
//   'item' : 'Profile_item__1GK-n' ( <-этот префикс автоматически формируется в инспекции браузера)
// }

//было до react-redux
// const MyPostsContainer = (props) => {

//   let state = props.store.getState();

//   let addPost = () => {
//     props.store.dispatch(addPostActionCreator());
//   }

//   let onPostChange = (text) => {
//     props.store.dispatch(updateNewPostTextActionCreator(text));
//   }

//   return (
//     <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText}/>
//   );
// };

//после react-redux

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => { dispatch(updateNewPostTextActionCreator(text)) },
    addPost: () => { dispatch(addPostActionCreator()) }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
