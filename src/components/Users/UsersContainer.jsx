import UsersAPIContainer from './UsersAPIContainer';
import { connect } from 'react-redux';
import {
  followAC,
  unFollowAC,
  setUsersAC,
  setTotalUsersCount,
  decreaseCurrentPageAC,
  increaseCurrentPageAC,
  toggleIsFetchingAC
} from '../../redux/usersReducer';

const mapStateToProps = state => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage,
  isAbleToDecrease: state.usersPage.isAbleToDecrease,
  isAbleToIncrease: state.usersPage.isAbleToIncrease,
  isFetching: state.usersPage.isFetching,
});

const mapDispatchToProps = (dispatch) => ({
  follow: userId => { dispatch(followAC(userId)) },
  unFollow: userId => { dispatch(unFollowAC(userId)) },
  setUsers: users => { dispatch(setUsersAC(users)) },
  setTotalUsersCount: total => { dispatch(setTotalUsersCount(total)) },
  decreaseCurrentPage: () => { dispatch(decreaseCurrentPageAC()) },
  increaseCurrentPage: () => { dispatch(increaseCurrentPageAC()) },
  toggleIsFetching: isFetching => { dispatch(toggleIsFetchingAC(isFetching)) },
});

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer);

export default UsersContainer;