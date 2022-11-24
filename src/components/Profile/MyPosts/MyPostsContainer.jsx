import MyPosts from './MyPosts';
import { updNewPostTxtAC, addPostAC } from '../../../redux/profileReducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText,
});

const mapDispatchToProps = (dispatch) => ({
  updateNewPostText: (text) => { dispatch(updNewPostTxtAC(text)) },
  addPost: () => { dispatch(addPostAC()) },
});

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
