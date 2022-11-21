import MyPosts from './MyPosts';
import { updNewPostTxtActionCreator, addPostActionCreator } from '../../../redux/actionCreators';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  posts: state.profilePage.posts,
  newPostText: state.profilePage.newPostText,
});

const mapDispatchToProps = (dispatch) => ({
  updateNewPostText: (text) => { dispatch(updNewPostTxtActionCreator(text)) },
  addPost: () => { dispatch(addPostActionCreator()) },
});

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
