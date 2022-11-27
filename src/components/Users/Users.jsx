import s from './Users.module.css';
import avatar from './avatar.png';
import Loader from '../Loader/Loader';

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
          <img
            className={s.userPic}
            src={user.photos.small !== null ? user.photos.small : avatar}
            alt="user-pic"
          />
          <div>
            {user.followed ? (
              <button
                className={s.btn}
                onClick={() => props.unFollow(user.id)}
              >
                unfollow
              </button>
            ) : (
              <button
                className={s.btn}
                onClick={() => props.follow(user.id)}
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