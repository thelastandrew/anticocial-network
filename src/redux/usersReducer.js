import { actionTypes } from './actionTypes';

const initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isAbleToDecrease: false,
  isAbleToIncrease: true,
  isFetching: false,
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
      return { ...state, users: action.users };
    }
    case actionTypes.SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.total }
    }
    case actionTypes.DECREASE_CURRENT_PAGE: {
      const totalPagesCount = Math.ceil(state.totalUsersCount / state.pageSize);
      return {
        ...state,
        currentPage: state.currentPage - 1,
        isAbleToDecrease: !(state.currentPage === 2),
        isAbleToIncrease: !(state.currentPage === totalPagesCount + 1)
      }
    }
    case actionTypes.INCREASE_CURRENT_PAGE: {
      const totalPagesCount = Math.ceil(state.totalUsersCount / state.pageSize);
      return {
        ...state,
        currentPage: state.currentPage + 1,
        isAbleToDecrease: !(state.currentPage === 0),
        isAbleToIncrease: !(state.currentPage === totalPagesCount - 1)
      }
    }
    case actionTypes.TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching }
    }
    default:
      return state;
  }
};

export const follow = userId => ({ type: actionTypes.FOLLOW, userId });
export const unFollow = userId => ({ type: actionTypes.UN_FOLLOW, userId });
export const setUsers = users => ({ type: actionTypes.SET_USERS, users });
export const setTotalUsersCount = total => ({ type: actionTypes.SET_TOTAL_USERS_COUNT, total });
export const decreaseCurrentPage = () => ({ type: actionTypes.DECREASE_CURRENT_PAGE });
export const increaseCurrentPage = () => ({ type: actionTypes.INCREASE_CURRENT_PAGE });
export const toggleIsFetching = isFetching => ({ type: actionTypes.TOGGLE_IS_FETCHING, isFetching });

export default usersReducer;
