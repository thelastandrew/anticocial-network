import styles from './dialogs.module.css';

const Dialogs = () => (
  <>
    <div className={styles.dialogs_items}>
      <div className={styles.chats}>
        <div className={`${styles.item} ${styles.active}`}>Anna</div>
        <div className={styles.item}>Mom</div>
        <div className={styles.item}>Anton</div>
      </div>
      <div className={styles.messages}>
        <div className={styles.message}>
          <div className={styles.user_name}>Anna</div>
          <div className={styles.message_text}>Hello</div>
        </div>
        <div className={`${styles.message} ${styles.me}`}>
          <div className={styles.user_name}>me</div>
          <div className={styles.message_text}>I love you</div>
        </div>
        <textarea className={styles.textarea}></textarea>
        <button className={styles.send_btn}>Send</button>
      </div>
    </div>
  </>
);

export default Dialogs;
