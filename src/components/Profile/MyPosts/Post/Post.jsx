import s from './Post.module.css';
import avatar from '../../../../assets/img/avatar.png';

const Post = (props) => (
  <div className={s.item}>
    <img className={s.avatar} src={avatar} alt='avatar'/>
    <div className={s.message_block}>
      <p className={s.post_message}>{props.message}</p>
      <div className={s.message_likes}>{`Likes: ${props.likesCount}`}</div>
    </div>
  </div>
);

export default Post;