import { actionTypes } from './actionTypes';

const profileReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_POST:
      const newPost = {
        id: state.posts.length + 1,
        message: state.newPostText,
        likesCount: 0,
      };
      state.posts.push(newPost);
      state.newPostText = '';
      return state;

    case actionTypes.UPD_NEW_POST_TXT:
      state.newPostText = action.newText;
      return state;

    default:
      return state;
  }
};

export default profileReducer;
