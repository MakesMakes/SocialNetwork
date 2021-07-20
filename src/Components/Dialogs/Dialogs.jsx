import React from "react";
import style from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import { Redirect } from "react-router";
import { Field, reduxForm } from 'redux-form';
import {Textarea} from './../../FormsControls/FormsControls'
import {required, maxLengthCreator} from './../../validators/validators'

const maxLength = maxLengthCreator(20);

const Dialogs = (props) => {

  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map(d => <Dialog img={d.img} name={d.name} id={d.id} key={d.id} />)
  let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />)

  let addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody);

  }

  if (!props.isAuth) {
    return <Redirect to='/login' />
  }

  return (
    <div className={style.dialogs}>
      <div className={style.dialogItems}>
        {dialogsElements}
      </div>
      <div className={style.messages}>
        {messagesElements}

        <div>
          <AddMessageReduxForm onSubmit={addNewMessage} />
        </div>

      </div>
    </div>
  );
};

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div><Field component={Textarea} name='newMessageBody' validate = {[required, maxLength]} /></div>
      <div><button>Send</button></div>
    </form>
  )
}

const AddMessageReduxForm = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)


export default Dialogs;
