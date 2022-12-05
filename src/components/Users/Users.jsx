import s from './Users.module.css';
import avatar from '../../assets/img/avatar.png';
import Loader from '../Loader/Loader';
import { NavLink } from 'react-router-dom';
import { followAPI } from '../../api/api'

const Users = (props) => {
  const follow = (userId) => {
    props.toggleFollowingInProgress(true, userId);
    followAPI.follow(userId)
      .then(data => {
        if (data.resultCode === 0) {
          props.follow(userId);
          props.toggleFollowingInProgress(false, userId);
        };
      });
  };

  const unFollow = (userId) => {
    props.toggleFollowingInProgress(true, userId);
    followAPI.unFollow(userId)
      .then(data => {
        if (data.resultCode === 0) {
          props.unFollow(userId);
          props.toggleFollowingInProgress(false, userId);
        };
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
                disabled={props.followingInProgress.some(id => id === user.id)}
                onClick={() => {unFollow(user.id)}}
              >
                {props.followingInProgress.some(id => id === user.id) ? 'loading...' : 'remove'}
              </button>
            ) : (
              <button
                className={s.btn}
                disabled={props.followingInProgress.some(id => id === user.id)}
                onClick={() => {follow(user.id)}}
              >
                {props.followingInProgress.some(id => id === user.id) ? 'loading...' : 'follow'}
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