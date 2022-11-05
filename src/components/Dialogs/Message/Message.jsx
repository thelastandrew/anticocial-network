import s from './Message.module.css';

const Message = (props) => {
  const messageStyle = props.isMe ? `${s.message} ${s.me}` : s.message;
  return (
    <div className={messageStyle}>
      <div className={s.user_name}>{props.userName}</div>
      <div className={s.message_text}>{props.messageText}</div>
    </div>
  )
};

export default Message;