import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => (
    <div>
      <textarea></textarea>
      <button className={s.add_post_btn}>Add post</button>
      <div className={s.posts}>
        { props.posts.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount} />) }
      </div>
    </div>
  );

export default MyPosts;
