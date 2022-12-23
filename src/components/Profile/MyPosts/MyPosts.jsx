import { useForm } from 'react-hook-form';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  const { register, handleSubmit, watch } = useForm();
  const newPostText = watch('newPostText');

  const onSubmit = () => {
    props.addPost(newPostText);
  };

  const postsArray = props.posts.map((post) => (
    <Post
      key={post.id}
      message={post.message}
      likesCount={post.likesCount}
    />
  ))

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <textarea
        className={s.textarea}
        { ...register('newPostText') }
      ></textarea>
      <button type='submit' className={s.addPostBtn}>
        Add post
      </button>
      <div className={s.posts}>
        {postsArray}
      </div>
    </form>
  );
};

export default MyPosts;
