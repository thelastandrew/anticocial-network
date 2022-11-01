import styles from './profile.module.css'
import wallPaper from './cover3.jpg';

const Profile = () => (
  <div className={styles.content}>
  <img src={wallPaper} alt="wallpaper" />
  <div>ava + description</div>
  <div>
    My posts
    <div>New post</div>
  </div>
  <div className={styles.posts}>
    <div className={styles.item}>post 1</div>
    <div className={styles.item}>post 2</div>
    <div className={styles.item}>post 3</div>
  </div>
</div>
);

export default Profile;