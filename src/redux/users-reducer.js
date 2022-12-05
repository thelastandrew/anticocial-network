const FOLLOW = 'FOLLOW';
const UN_FOLLOW = 'UN_FOLLOW';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const DECREASE_CURRENT_PAGE = 'DECREASE_CURRENT_PAGE';
const INCREASE_CURRENT_PAGE = 'INCREASE_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS';

const initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isAbleToDecrease: false,
  isAbleToIncrease: true,
  isFetching: false,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.userId ? { ...user, followed: true } : user
        ),
      };
    }
    case UN_FOLLOW: {
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.userId ? { ...user, followed: false } : user
        ),
      };
    }
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.total }
    }
    case DECREASE_CURRENT_PAGE: {
      const totalPagesCount = Math.ceil(state.totalUsersCount / state.pageSize);
      return {
        ...state,
        currentPage: state.currentPage - 1,
        isAbleToDecrease: !(state.currentPage === 2),
        isAbleToIncrease: !(state.currentPage === totalPagesCount + 1)
      }
    }
    case INCREASE_CURRENT_PAGE: {
      const totalPagesCount = Math.ceil(state.totalUsersCount / state.pageSize);
      return {
        ...state,
        currentPage: state.currentPage + 1,
        isAbleToDecrease: !(state.currentPage === 0),
        isAbleToIncrease: !(state.currentPage === totalPagesCount - 1)
      }
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching }
    }
    case TOGGLE_FOLLOWING_IN_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
        ? [...state.followingInProgress, action.userId]
        : state.followingInProgress.filter(id => id !== action.userId),
      };
    }
    default:
      return state;
  }
};

export const follow = userId => ({ type: FOLLOW, userId });
export const unFollow = userId => ({ type: UN_FOLLOW, userId });
export const setUsers = users => ({ type: SET_USERS, users });
export const setTotalUsersCount = total => ({ type: SET_TOTAL_USERS_COUNT, total });
export const decreaseCurrentPage = () => ({ type: DECREASE_CURRENT_PAGE });
export const increaseCurrentPage = () => ({ type: INCREASE_CURRENT_PAGE });
export const toggleIsFetching = isFetching => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingInProgress = (isFetching, userId) => ({ type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetching, userId });

export default usersReducer;
