import { createRef } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  const postEl = createRef();

  const handleChange = () => {
    const text = postEl.current.value;
    props.updateNewPostText(text)
  };

  const handleClick = () => {
    props.addPost();
  };

  const postsArray = props.posts.map((post) => (
    <Post
      key={post.id}
      message={post.message}
      likesCount={post.likesCount}
    />
  ))

  return (
    <div>
      <textarea
        className={s.textarea}
        ref={postEl}
        value={props.newPostText}
        onChange={handleChange}
      ></textarea>
      <button className={s.addPostBtn} onClick={handleClick}>
        Add post
      </button>
      <div className={s.posts}>
        {postsArray}
      </div>
    </div>
  );
};

export default MyPosts;

