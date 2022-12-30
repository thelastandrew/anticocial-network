import { authAPI } from '../api/api';

const SET_USER_DATA = 'SET_USER_DATA';

const initialState = {
  id: null,
  login: null,
  email: null,
  isAuth: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

const setUserData = (id, login, email, isAuth) => ({
  type: SET_USER_DATA,
  payload: { id, login, email, isAuth },
});

export const getIsAuth = () => (dispatch) => {
  authAPI.isAuth().then((data) => {
    if (data.resultCode === 0) {
      const { id, login, email } = data.data;
      dispatch(setUserData(id, login, email, true));
    }
  });
};

export const login = (email, password, rememberMe, setError) => (dispatch) => {
  authAPI.logIn(email, password, rememberMe).then((data) => {
    if (data.resultCode === 0) {
      dispatch(getIsAuth());
    } else {
      setError('server', { message: data.messages[0] });
    }
  });
};

export const logout = () => (dispatch) => {
  authAPI.logOut().then((data) => {
    if (data.resultCode === 0) {
      dispatch(setUserData(null, null, null, false));
    }
  });
}

export default authReducer;
