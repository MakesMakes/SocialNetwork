import React from "react";
import style from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import { Redirect } from "react-router";

const Dialogs = (props) => {

  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map(d => <Dialog img={d.img} name={d.name} id={d.id} key={d.id} />)
  let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />)

  let addMess = () => {
    props.sendMessage()
  }

  let onMessageChange = (e) => {
    let text = e.target.value; //алтьтернатива ref
    props.updateNewMessageText(text)
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
          <div>
            <textarea onChange={onMessageChange} value={state.newMessageText} />
          </div>
          <button onClick={addMess} >Add message</button>
        </div>

      </div>
    </div>
  );
};

export default Dialogs;
