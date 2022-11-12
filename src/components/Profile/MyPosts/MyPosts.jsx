import { createRef } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  const postEl = createRef();
  const handleClick = () => {
    const value = postEl.current.value;
    props.addPost(value);
    postEl.current.value = '';
  };

  return (
    <div>
      <textarea className={s.textarea} ref={postEl}></textarea>
      <button className={s.addPostBtn} onClick={handleClick}>
        Add post
      </button>
      <div className={s.posts}>
        {props.posts.map((post) => (
          <Post
            key={post.id}
            message={post.message}
            likesCount={post.likesCount}
          />
        ))}
      </div>
    </div>
  );
};

export default MyPosts;

