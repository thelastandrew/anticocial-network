import s from './Users.module.css';
import avatar from '../../assets/img/avatar.png';
import Loader from '../Loader/Loader';
import { NavLink } from 'react-router-dom';
import { followAPI } from '../../api/api'

const Users = (props) => {
  const follow = (userId) => {
    followAPI.follow(userId)
      .then(data => {
        if (data.resultCode === 0) props.follow(userId);
      });
  };

  const unFollow = (userId) => {
    followAPI.unFollow(userId)
      .then(data => {
        if (data.resultCode === 0) props.unFollow(userId);
      });
  };

  return  <>
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
                onClick={() => {unFollow(user.id)}}
              >
                remove
              </button>
            ) : (
              <button
                className={s.btn}
                onClick={() => {follow(user.id)}}
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