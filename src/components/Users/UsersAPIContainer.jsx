import { Component } from 'react';
import Users from './Users';

class UsersAPIContainer extends Component {
  componentDidMount() {
    if (this.props.users.length === 0) this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onDecreaseCurrentPage = () => {
    this.props.decreaseCurrentPage();
    this.props.getUsers(this.props.currentPage - 1 , this.props.pageSize);
  };

  onIncreaseCurrentPage = () => {
    this.props.increaseCurrentPage();
    this.props.getUsers(this.props.currentPage + 1, this.props.pageSize);
  };

  render() {
    return <Users
      onDecreaseCurrentPage={this.onDecreaseCurrentPage}
      onIncreaseCurrentPage={this.onIncreaseCurrentPage}
      isAbleToDecrease={this.props.isAbleToDecrease}
      isAbleToIncrease={this.props.isAbleToIncrease}
      currentPage={this.props.currentPage}
      users={this.props.users}
      isFetching={this.props.isFetching}
      toggleFollowingInProgress={this.props.toggleFollowingInProgress}
      unFollow={this.props.unFollow}
      follow={this.props.follow}
      followingInProgress={this.props.followingInProgress}
    />
  }
}

export default UsersAPIContainer;

