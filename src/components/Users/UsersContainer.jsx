import UsersAPIContainer from './UsersAPIContainer';
import { connect } from 'react-redux';
import {
  decreaseCurrentPage,
  increaseCurrentPage,
  getUsers,
  follow,
  unFollow
} from '../../redux/users-reducer';

const mapStateToProps = state => ({
  users: state.usersPage.users,
  pageSize: state.usersPage.pageSize,
  currentPage: state.usersPage.currentPage,
  isAbleToDecrease: state.usersPage.isAbleToDecrease,
  isAbleToIncrease: state.usersPage.isAbleToIncrease,
  isFetching: state.usersPage.isFetching,
  followingInProgress: state.usersPage.followingInProgress
});

const UsersContainer = connect(mapStateToProps, {
  decreaseCurrentPage,
  increaseCurrentPage,
  getUsers,
  follow,
  unFollow
})(UsersAPIContainer);

export default UsersContainer;