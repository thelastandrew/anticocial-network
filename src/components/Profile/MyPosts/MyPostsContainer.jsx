import MyPosts from './MyPosts';
import { updNewPostTxtActionCreator, addPostActionCreator } from '../../../redux/actionCreators';

const MyPostsContainer = (props) => {
  const profilePage = props.store.getState().profilePage;

  const updateNewPostText = (text) => {
    props.store.dispatch(
      updNewPostTxtActionCreator(text)
    );
  };

  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  return <MyPosts
    updateNewPostText={updateNewPostText}
    addPost={addPost}
    posts={profilePage.posts}
    newPostText={profilePage.newPostText}
  />;
};

export default MyPostsContainer;

