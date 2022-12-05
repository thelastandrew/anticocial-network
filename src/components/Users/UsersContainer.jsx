import UsersAPIContainer from './UsersAPIContainer';
import { connect } from 'react-redux';
import {
  follow,
  unFollow,
  setUsers,
  setTotalUsersCount,
  decreaseCurrentPage,
  increaseCurrentPage,
  toggleIsFetching,
  toggleFollowingInProgress
} from '../../redux/users-reducer';

const mapStateToProps = state => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  totalUsersCount: state.usersPage.totalUsersCount,
  currentPage: state.usersPage.currentPage,
  isAbleToDecrease: state.usersPage.isAbleToDecrease,
  isAbleToIncrease: state.usersPage.isAbleToIncrease,
  isFetching: state.usersPage.isFetching,
  followingInProgress: state.usersPage.followingInProgress,
});

const UsersContainer = connect(mapStateToProps, {
  follow,
  unFollow,
  setUsers,
  setTotalUsersCount,
  decreaseCurrentPage,
  increaseCurrentPage,
  toggleIsFetching,
  toggleFollowingInProgress,
})(UsersAPIContainer);

export default UsersContainer;