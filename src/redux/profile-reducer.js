import { profileAPI } from '../api/api';

const ADD_POST = 'ADD_POST';
const UPD_NEW_POST_TXT = 'UPD_NEW_POST_TXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

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
    case ADD_POST: {
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
    case UPD_NEW_POST_TXT: {
      return { ...state, newPostText: action.newText };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    default:
      return state;
  }
};

export const addPost = () => ({ type: ADD_POST });
export const updateNewPostText = newText => ({ type: UPD_NEW_POST_TXT, newText });
const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile });

export const getProfile = (userId) => (dispatch) => {
  profileAPI.getProfile(userId)
  .then((data) => {
    dispatch(setUserProfile(data));
  });
};

export default profileReducer;
