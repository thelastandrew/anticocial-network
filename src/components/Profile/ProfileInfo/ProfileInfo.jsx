import s from './ProfileInfo.module.css';
import Loader from '../../Loader/Loader';
import wallPaper from '../../../assets/img/cover3.jpg';
import avatar from '../../../assets/img/avatar.png';

const ProfileInfo = ({ profile }) => {
  if (!profile) return <Loader />;

  const avatarSrc = profile.photos.small
    ? profile.photos.small
    : avatar;

  return (
    <div>
      <img className={s.wallPaper} src={wallPaper} alt="wallpaper" />
      <div className={s.profileHeader}>
        <img className={s.userPic} src={avatarSrc} alt="user-avatar" />
        <div className={s.userInfo}>
          <h2 className={s.userName}>{profile.fullName}</h2>
          {profile.aboutMe && <p>{profile.aboutMe}</p>}
        </div>
      </div>
    </div>
  );
};
export default ProfileInfo;
