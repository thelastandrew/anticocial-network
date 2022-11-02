import styles from './my-posts.module.css';
import Post from './Post/Post';

const MyPosts = () => (
  <div>
  My posts
  <div>New post</div>
  <textarea></textarea><br />
  <button>Add post</button>
    <div className={styles.posts}>
      <Post>post 1</Post>
      <Post>post 2</Post>
    </div>
</div>
);

export default MyPosts;