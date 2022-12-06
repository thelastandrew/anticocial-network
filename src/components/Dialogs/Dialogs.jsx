import { useRef } from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Navigate } from 'react-router-dom';

const Dialogs = (props) => {
  const messageTextEl = useRef();

  const handleChange = () => {
    const newText = messageTextEl.current.value;
    props.updateNewMessageText(newText);
  };

  const handleClick = () => {
    props.addMessage();
  };

  const dialogsArray = props.dialogs.map((dialog) => (
    <DialogItem key={dialog.id} userName={dialog.name} id={dialog.id} />
  ));

  const messagesArray = props.messages.map((message) => (
    <Message
      key={message.id}
      userName={message.userName}
      messageText={message.message}
      isMe={message.isMe}
    />
  ))

  if (!props.isAuth) return <Navigate to='/login' />;

  return (
    <>
      <div className={s.dialogs_items}>
        <div className={s.chats}>
          {dialogsArray}
        </div>
        <div className={s.messages}>
          {messagesArray}
          <textarea
            className={s.textarea}
            ref={messageTextEl}
            value={props.newMessageText}
            onChange={handleChange}
          ></textarea>
          <button
            className={s.send_btn}
            onClick={handleClick}
          >Send</button>
        </div>
      </div>
    </>
  );
};

export default Dialogs;

