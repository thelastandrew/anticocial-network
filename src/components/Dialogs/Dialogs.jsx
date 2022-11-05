import styles from './dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = () => (
  <>
    <div className={styles.dialogs_items}>
      <div className={styles.chats}>
        <DialogItem userName='Anna' id='1' />
        <DialogItem userName='Mom' id='2' />
        <DialogItem userName='Anton' id='3' />
      </div>
      <div className={styles.messages}>
        <Message
          userName='Anna'
          messageText='Hello'
          isMe={false}
        />
        <Message
          userName='me'
          messageText='I love you'
          isMe={true}
        />
        <textarea className={styles.textarea}></textarea>
        <button className={styles.send_btn}>Send</button>
      </div>
    </div>
  </>
);

export default Dialogs;
