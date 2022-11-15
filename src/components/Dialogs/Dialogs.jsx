import { useRef } from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { addMessageActionCreator, updNewMsgTxtActionCreator } from '../../redux/actionCreators';

const Dialogs = (props) => {
  const messageTextEl = useRef();

  const handleChange = () => {
    const newText = messageTextEl.current.value;
    props.dispatch(
      updNewMsgTxtActionCreator(newText)
    );
  };

  const handleClick = () => {
    props.dispatch(addMessageActionCreator());
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
            onClick={handleClick}
          >Send</button>
        </div>
      </div>
    </>
  );
};

export default Dialogs;

