import { Component } from 'react';
import axios from 'axios';
import Users from './Users';

class UsersAPIContainer extends Component {
  getUsers = (page) => {
    this.props.toggleIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`, { withCredentials: true })
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
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
      isFetching={this.props.isFetching}
    />
  }
}

export default UsersAPIContainer;

