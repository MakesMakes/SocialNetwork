import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../Redux/dialogsPage_Reducer';
import Dialogs from './Dialogs';
import { connect } from "react-redux";
import { withAuthRedirect } from './../../hoc/withAuthRedirect';


// до react-redux
// const DialogsContainerbefore = (props) => {

//   let state = props.store.getState();

//   let addMess = () => {
//     props.store.dispatch(sendMessageActionCreator())
//   }

//   let onMessageChange = (text) => {
//     props.store.dispatch(updateNewMessageTextActionCreator(text))
//   }

//   return (
//     <Dialogs sendMessage={addMess} updateNewMessageText={onMessageChange} dialogsPage={state.dialogsPage} />
//   );
// };

//после react-redux
let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageActionCreator())
    },
    updateNewMessageText: (text) => {
      dispatch(updateNewMessageTextActionCreator(text))
    }
  }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;
