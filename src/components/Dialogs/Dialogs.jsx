import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import DialogsForm from './DialogsForm/DialogsForm';

const Dialogs = (props) => {


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

  return (
    <>
      <div className={s.dialogs_items}>
        <div className={s.chats}>
          {dialogsArray}
        </div>
        <div className={s.messages}>
          {messagesArray}
          <DialogsForm
            addMessage={props.addMessage}
          />
        </div>
      </div>
    </>
  );
};

export default Dialogs;

