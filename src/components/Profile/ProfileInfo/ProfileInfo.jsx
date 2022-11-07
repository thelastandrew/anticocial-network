import styles from './ProfileInfo.module.css'
import wallPaper from './cover3.jpg';

const ProfileInfo = () => (
  <div>
    <img className={styles.wallPaper} src={wallPaper} alt="wallpaper" />
    <div>ava + description</div>
  </div>
);

export default ProfileInfo;