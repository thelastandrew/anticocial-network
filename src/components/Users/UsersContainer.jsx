import Users from './Users';
import { connect } from 'react-redux';
import {
  followAC,
  unFollowAC,
  setUsersAC,
  setTotalUsersCount,
  decreaseCurrentPageAC,
  increaseCurrentPageAC
} from '../../redux/usersReducer';

const mapStateToProps = state => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage,
  isAbleToDecrease: state.usersPage.isAbleToDecrease,
  isAbleToIncrease: state.usersPage.isAbleToIncrease,
});

const mapDispatchToProps = (dispatch) => ({
  follow: userId => { dispatch(followAC(userId)) },
  unFollow: userId => { dispatch(unFollowAC(userId)) },
  setUsers: users => { dispatch(setUsersAC(users)) },
  setTotalUsersCount: total => { dispatch(setTotalUsersCount(total)) },
  decreaseCurrentPage: () => { dispatch(decreaseCurrentPageAC()) },
  increaseCurrentPage: () => { dispatch(increaseCurrentPageAC()) },
});

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;