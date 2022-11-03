import styles from './post.module.css';
import avatar from './avatar.png';

const Post = (props) => (
  <div className={styles.item}>
    <img className={styles.avatar} src={avatar} alt='avatar'/>
    <div className={styles.message_block}>
      <p className={styles.post_message}>{props.message}</p>
      <div className={styles.message_likes}>{`Likes: ${props.likes}`}</div>
    </div>
  </div>
);

export default Post;