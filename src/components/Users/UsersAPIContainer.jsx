import { Component } from 'react';
import { usersAPI } from '../../api/api';
import Users from './Users';

class UsersAPIContainer extends Component {
  getUsers = (page) => {
    this.props.toggleIsFetching(true);
    usersAPI.getUsers(page, this.props.pageSize)
      .then((data) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      });
  };

  componentDidMount() {
    if (this.props.users.length === 0) this.getUsers(this.props.currentPage);
  }

  onDecreaseCurrentPage = () => {
    this.props.decreaseCurrentPage();
    this.getUsers(this.props.currentPage - 1);
  };

  onIncreaseCurrentPage = () => {
    this.props.increaseCurrentPage();
    this.getUsers(this.props.currentPage + 1);
  };

  render() {
    return <Users
      onDecreaseCurrentPage={this.onDecreaseCurrentPage}
      onIncreaseCurrentPage={this.onIncreaseCurrentPage}
      isAbleToDecrease={this.props.isAbleToDecrease}
      isAbleToIncrease={this.props.isAbleToIncrease}
      currentPage={this.props.currentPage}
      users={this.props.users}
      follow={this.props.follow}
      unFollow={this.props.unFollow}
      toggleFollowingInProgress={this.props.toggleFollowingInProgress}
      isFetching={this.props.isFetching}
      followingInProgress={this.props.followingInProgress}
    />
  }
}

export default UsersAPIContainer;

