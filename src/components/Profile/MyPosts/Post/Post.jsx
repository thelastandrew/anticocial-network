import styles from './post.module.css';
import avatar from './avatar.png';

const Post = (props) => (
  <div className={styles.item}>
    <img className={styles.avatar} src={avatar} alt='avatar'/>
    {props.children}
  </div>
);

export default Post;