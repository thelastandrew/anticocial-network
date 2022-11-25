import { Component } from 'react';
import axios from 'axios';
import avatar from './avatar.png';
import s from './Users.module.css';

class Users extends Component {

  componentDidMount () {
    if (this.props.users.length === 0) {
      axios
        .get('https://social-network.samuraijs.com/api/1.0/users')
        .then((response) => this.props.setUsers(response.data.items));
    }
  }

  render() {
    return (
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
                    className={s.usersBtn}
                    onClick={() => this.props.unFollow(user.id)}
                  >
                    unfollow
                  </button>
                ) : (
                  <button
                    className={s.usersBtn}
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
    );
  }
}

export default Users;

