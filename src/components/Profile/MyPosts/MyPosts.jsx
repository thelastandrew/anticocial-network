import { createRef } from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  const postEl = createRef();

  const handleChange = () => {
    const action = {
      type: 'UPD-NEW-POST-TXT',
      newText: postEl.current.value,
    };
    props.dispatch(action);
  };

  const handleClick = () => {
    props.dispatch({ type: 'ADD-POST' });
  };

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

