import { actionTypes } from './actionTypes';

const initialState = {
  users: [
    { id: 1, followed: true, fullName: 'Anna', status: 'Best of the best', location: { city: 'Ashdod', country: 'Israel' } },
    { id: 2, followed: true, fullName: 'Mom', status: 'Mama', location: { city: 'Perm', country: 'Russia' } },
    { id: 3, followed: false, fullName: 'Anton', status: 'chill, dude', location: { city: 'Perm', country: 'Russia' } },
    { id: 4, followed: true, fullName: 'Yuriy', status: 'citizen of the world', location: { city: 'Mexico City', country: 'Mexico' } },
    { id: 5, followed: true, fullName: 'Igor', status: 'today i\'ll stay home', location: { city: 'Belgrade', country: 'Serbia' } },
    { id: 6, followed: false, fullName: 'Rasel', status: 'if only we can flaaaaay', location: { city: 'Yerevan', country: 'Armenia' } }
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FOLLOW: {
      return {
        ...state,
        users: state.map(user => user.id === action.userId
          ? { ...user, followed: true }
          : user),
      }
    }
    case actionTypes.UN_FOLLOW: {
      return {
        ...state,
        users: state.map(user => user.id === action.userId
          ? { ...user, followed: false }
          : user),
      }
    }
    case actionTypes.SET_USERS: {
      return {
        ...state,
        users: [...state.users, action.users],
      }
    }
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: actionTypes.FOLLOW, userId });
export const unFollowAC = (userId) => ({ type: actionTypes.UN_FOLLOW, userId });
export const setUsersAC = (users) => ({ type: actionTypes.SET_USERS, users });

export default usersReducer;