import s from './Users.module.css';
import avatar from '../../assets/img/avatar.png';
import Loader from '../Loader/Loader';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Users = (props) => {
  return       <>
  <div className={s.pagination}>
    <button
      className={s.btn}
      onClick={props.onDecreaseCurrentPage}
      disabled={!props.isAbleToDecrease}
    >
      &lt;
    </button>
    <span className={s.currentPage}>{props.currentPage}</span>
    <button
      className={s.btn}
      onClick={props.onIncreaseCurrentPage}
      disabled={!props.isAbleToIncrease}
    >
      &gt;
    </button>
  </div>
  <div className={s.usersContainer}>
    {props.isFetching ? <Loader /> : props.users.map((user) => (
      <div className={s.user} key={user.id} id={user.id}>
        <div className={s.avatarBlock}>
          <NavLink to={`/profile/${user.id}`}>
            <img
              className={s.userPic}
              src={user.photos.small !== null ? user.photos.small : avatar}
              alt="user-pic"
            />
          </NavLink>
          <div>
            {user.followed ? (
              <button
                className={s.btn}
                onClick={() => {
                  axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {
                    withCredentials: true,
                    headers: {
                      'API-KEY': 'f99358d7-1b05-4cfc-b281-147e7e3ad8e6'
                    }
                  })
                    .then(response => {
                      if (response.data.resultCode === 0) props.unFollow(user.id);
                    })
                  }
                }
              >
                remove
              </button>
            ) : (
              <button
                className={s.btn}
                onClick={() => {
                  axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                    withCredentials: true,
                    headers: {
                      'API-KEY': 'f99358d7-1b05-4cfc-b281-147e7e3ad8e6',
                    }
                  })
                    .then(response => {
                      if (response.data.resultCode === 0) props.follow(user.id);
                    })
                }}
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
};

export default Users;