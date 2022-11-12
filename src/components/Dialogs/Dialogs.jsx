import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { useRef } from 'react';

const Dialogs = (props) => {
  const messageTextEl = useRef();

  const handleChange = () => {
    const text = messageTextEl.current.value;
    props.updateNewMessageText(text);
  };

  return (
    <>
      <div className={s.dialogs_items}>
        <div className={s.chats}>
          {props.dialogsPage.dialogs.map((dialog) => (
            <DialogItem key={dialog.id} userName={dialog.name} id={dialog.id} />
          ))}
        </div>
        <div className={s.messages}>
          {props.dialogsPage.messages.map((message) => (
            <Message
              key={message.id}
              userName={message.userName}
              messageText={message.message}
              isMe={message.isMe}
            />
          ))}
          <textarea
            className={s.textarea}
            ref={messageTextEl}
            value={props.dialogsPage.newMessageText}
            onChange={handleChange}
          ></textarea>
          <button
            className={s.send_btn}
            onClick={props.addMessage}
          >Send</button>
        </div>
      </div>
    </>
  );
};

export default Dialogs;

