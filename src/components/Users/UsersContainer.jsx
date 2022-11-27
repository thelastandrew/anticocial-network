import UsersAPIContainer from './UsersAPIContainer';
import { connect } from 'react-redux';
import {
  follow,
  unFollow,
  setUsers,
  setTotalUsersCount,
  decreaseCurrentPage,
  increaseCurrentPage,
  toggleIsFetching
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

const UsersContainer = connect(mapStateToProps, {
  follow,
  unFollow,
  setUsers,
  setTotalUsersCount,
  decreaseCurrentPage,
  increaseCurrentPage,
  toggleIsFetching,
})(UsersAPIContainer);

export default UsersContainer;