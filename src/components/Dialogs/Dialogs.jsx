import s from './dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = () => {
  const dialogData = [
    { id : 1, name: 'Anna' },
    { id: 2, name: 'Mom' },
    { id: 3, name: 'Anton' },
  ];

  const messagesData = [
    { id: 1, userName: 'Anna', message: 'Hello', isMe: false },
    { id: 2, userName: 'me', message: 'I love you', isMe: true },
  ];

  return (
    <>
      <div className={s.dialogs_items}>
        <div className={s.chats}>
          { dialogData.map(dialog => <DialogItem key={dialog.id} userName={dialog.name} id={dialog.id} />) }
        </div>
        <div className={s.messages}>
          { messagesData.map(message => <Message key={message.id} userName={message.userName} messageText={message.message} isMe={message.isMe} />) }
          <textarea className={s.textarea}></textarea>
          <button className={s.send_btn}>Send</button>
        </div>
      </div>
    </>
  );
};

export default Dialogs;

