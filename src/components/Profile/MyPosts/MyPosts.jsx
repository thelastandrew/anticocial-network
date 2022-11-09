import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  const postsData = [
    { id: 1, message: 'My first post', likesCount: 20 },
    { id: 2, message: 'Lorem ipsum', likesCount: 42 },
  ];

  return (
    <div>
      <textarea></textarea>
      <button className={s.add_post_btn}>Add post</button>
      <div className={s.posts}>
        { postsData.map(post => <Post key={post.id} message={post.message} likesCount={post.likesCount} />) }
      </div>
    </div>
  );
};

export default MyPosts;
