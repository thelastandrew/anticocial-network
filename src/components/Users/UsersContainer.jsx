import UsersAPIContainer from './UsersAPIContainer';
import { connect } from 'react-redux';
import {
  decreaseCurrentPage,
  increaseCurrentPage,
  fetchUsers,
  follow,
  unFollow
} from '../../redux/users-reducer';
import {
  getUsers,
  getPageSize,
  getCurrentPage,
  getIsAbleToDecrease,
  getIsAbleToIncrease,
  getIsFetching,
  getFollowingInProgress
} from '../../redux/users-selectors';

const mapStateToProps = state => ({
  users: getUsers(state),
  pageSize: getPageSize(state),
  currentPage: getCurrentPage(state),
  isAbleToDecrease: getIsAbleToDecrease(state),
  isAbleToIncrease: getIsAbleToIncrease(state),
  isFetching: getIsFetching(state),
  followingInProgress: getFollowingInProgress(state)
});

const UsersContainer = connect(mapStateToProps, {
  decreaseCurrentPage,
  increaseCurrentPage,
  fetchUsers,
  follow,
  unFollow
})(UsersAPIContainer);

export default UsersContainer;