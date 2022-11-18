import MyPosts from './MyPosts';
import {
  updNewPostTxtActionCreator,
  addPostActionCreator,
} from '../../../redux/actionCreators';
import { StoreContext } from '../../../StoreContext';

const MyPostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {store => {
        const profilePage = store.getState().profilePage;

        const updateNewPostText = (text) => {
          store.dispatch(updNewPostTxtActionCreator(text));
        };

        const addPost = () => {
          store.dispatch(addPostActionCreator());
        };

        return (
          <MyPosts
            updateNewPostText={updateNewPostText}
            addPost={addPost}
            posts={profilePage.posts}
            newPostText={profilePage.newPostText}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
