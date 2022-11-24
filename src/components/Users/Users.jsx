import avatar from './avatar.png';
import s from './Users.module.css';

const Users = (props) => {
  if (!props.users) props.setUsers(
    [
      {
        id: 1,
        followed: true,
        fullName: 'Anna',
        status: 'Best of the best',
        location: { city: 'Ashdod', country: 'Israel' },
      },
      {
        id: 2,
        followed: true,
        fullName: 'Mom',
        status: 'Mama',
        location: { city: 'Perm', country: 'Russia' },
      },
      {
        id: 3,
        followed: false,
        fullName: 'Anton',
        status: 'chill, dude',
        location: { city: 'Perm', country: 'Russia' },
      },
      {
        id: 4,
        followed: true,
        fullName: 'Yuriy',
        status: 'citizen of the world',
        location: { city: 'Mexico City', country: 'Mexico' },
      },
      {
        id: 5,
        followed: true,
        fullName: 'Igor',
        status: "today i'll stay home",
        location: { city: 'Belgrade', country: 'Serbia' },
      },
      {
        id: 6,
        followed: false,
        fullName: 'Rasel',
        status: 'if only we can flaaaaay',
        location: { city: 'Yerevan', country: 'Armenia' },
      },
    ]
  );

  return (
    <div className={s.usersContainer}>
      {props.users.map((user) => (
        <div className={s.user} key={user.id}>
          <div className={s.avatarBlock}>
            <img className={s.userPic} src={avatar} alt="user-pic" />
            <div>{
              user.followed
                ? <button
                    className={s.followBtn}
                    onClick={ () => props.unFollow(user.id) }
                  >unfollow</button>
                : <button
                    className={s.followBtn}
                    onClick={ () => props.follow(user.id) }
                  >follow</button>
            }</div>
          </div>
          <div className={s.userInfo}>
            <h4 className={s.uerName}>{user.fullName}</h4>
            <p className={s.userLocation}>{user.location.city}, {user.location.country}</p>
            <p className={s.userStatus}>{user.status}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
