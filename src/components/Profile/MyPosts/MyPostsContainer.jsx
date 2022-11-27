import MyPosts from './MyPosts';
import { updateNewPostText, addPost } from '../../../redux/profileReducer';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText,
});

const MyPostsContainer = connect(mapStateToProps, {
  updateNewPostText,
  addPost,
})(MyPosts);

export default MyPostsContainer;
