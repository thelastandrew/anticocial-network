import styles from './my-posts.module.css';
import Post from './Post/Post';

const MyPosts = () => (
  <div>
  <textarea></textarea>
  <button className={styles.add_post_btn}>Add post</button>
    <div className={styles.posts}>
      <Post message='My first post' likes={20} />
      <Post message='Lorem  ipsum' likes={42} />
    </div>
</div>
);

export default MyPosts;