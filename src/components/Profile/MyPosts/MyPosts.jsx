import { useForm } from 'react-hook-form';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
  const newPostText = watch('newPostText');
  const maxLength = 200;

  const onSubmit = () => {
    props.addPost(newPostText);
    reset();
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
        placeholder={`type you post, max length is ${maxLength}`}
        { ...register('newPostText', { maxLength }) }
      />
      <p className={s.errorMessage}>{errors.newPostText && `Max length is ${maxLength}`}</p>
      <button type='submit' className={s.addPostBtn} disabled={!(!!newPostText) || errors.newPostText}>
        Add post
      </button>
      <div className={s.posts}>
        {postsArray}
      </div>
    </form>
  );
};

export default MyPosts;
