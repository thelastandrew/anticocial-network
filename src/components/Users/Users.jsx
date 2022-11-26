import { Component } from 'react';
import axios from 'axios';
import avatar from './avatar.png';
import s from './Users.module.css';

class Users extends Component {
  getUsers = (page) => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
      .then((response) => {
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
    return (
      <>
        <div className={s.pagination}>
          <button
            className={s.btn}
            onClick={this.onDecreaseCurrentPage}
            disabled={!this.props.isAbleToDecrease}
          >
            &lt;
          </button>
          <span className={s.currentPage}>{this.props.currentPage}</span>
          <button
            className={s.btn}
            onClick={this.onIncreaseCurrentPage}
            disabled={!this.props.isAbleToIncrease}
          >
            &gt;
          </button>
        </div>
        <div className={s.usersContainer}>
          {this.props.users.map((user) => (
            <div className={s.user} key={user.id} id={user.id}>
              <div className={s.avatarBlock}>
                <img
                  className={s.userPic}
                  src={user.photos.small !== null ? user.photos.small : avatar}
                  alt="user-pic"
                />
                <div>
                  {user.followed ? (
                    <button
                      className={s.btn}
                      onClick={() => this.props.unFollow(user.id)}
                    >
                      unfollow
                    </button>
                  ) : (
                    <button
                      className={s.btn}
                      onClick={() => this.props.follow(user.id)}
                    >
                      follow
                    </button>
                  )}
                </div>
              </div>
              <div className={s.userInfo}>
                <h4 className={s.uerName}>{user.name}</h4>
                <p className={s.userStatus}>{user.status}</p>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Users;

