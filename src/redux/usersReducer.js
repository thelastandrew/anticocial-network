import { actionTypes } from './actionTypes';

const initialState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FOLLOW: {
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.userId ? { ...user, followed: true } : user
        ),
      };
    }
    case actionTypes.UN_FOLLOW: {
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.userId ? { ...user, followed: false } : user
        ),
      };
    }
    case actionTypes.SET_USERS: {
      return {
        ...state,
        users: action.users,
      };
    }
    case actionTypes.SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.page,
      }
    }
    case actionTypes.SET_TOTAL_USERS_COUNT: {
      return {
        ...state,
        totalUsersCount: action.total,
      }
    }
    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: actionTypes.FOLLOW, userId });
export const unFollowAC = (userId) => ({ type: actionTypes.UN_FOLLOW, userId });
export const setUsersAC = (users) => ({ type: actionTypes.SET_USERS, users });
export const setCurrentPageAC = (page) => ({ type: actionTypes.SET_CURRENT_PAGE, page })
export const setTotalUsersCount = (total) => ({ type: actionTypes.SET_TOTAL_USERS_COUNT, total });

export default usersReducer;
