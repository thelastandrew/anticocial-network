import { actionTypes } from './actionTypes';

const initialState = {
  posts: [
    { id: 1, message: 'My first post', likesCount: 20 },
    { id: 2, message: 'Lorem ipsum', likesCount: 42 },
  ],
  newPostText: '',
  profile: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_POST: {
      const newPost = {
        id: state.posts.length + 1,
        message: state.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: '',
      };
    }
    case actionTypes.UPD_NEW_POST_TXT: {
      return { ...state, newPostText: action.newText };
    }
    case actionTypes.SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    default:
      return state;
  }
};

export const addPost = () => ({ type: actionTypes.ADD_POST });
export const updateNewPostText = newText => ({ type: actionTypes.UPD_NEW_POST_TXT, newText });
export const setUserProfile = profile => ({ type: actionTypes.SET_USER_PROFILE, profile });

export default profileReducer;
