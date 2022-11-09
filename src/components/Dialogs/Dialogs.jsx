import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => (
  <>
    <div className={s.dialogs_items}>
      <div className={s.chats}>
        {props.dialogs.map((dialog) => (
          <DialogItem key={dialog.id} userName={dialog.name} id={dialog.id} />
        ))}
      </div>
      <div className={s.messages}>
        {props.messages.map((message) => (
          <Message
            key={message.id}
            userName={message.userName}
            messageText={message.message}
            isMe={message.isMe}
          />
        ))}
        <textarea className={s.textarea}></textarea>
        <button className={s.send_btn}>Send</button>
      </div>
    </div>
  </>
);

export default Dialogs;
