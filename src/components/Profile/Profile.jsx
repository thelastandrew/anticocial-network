import styles from './profile.module.css'
import wallPaper from './cover3.jpg';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => (
  <div className={styles.content}>
  <img src={wallPaper} alt="wallpaper" />
  <div>ava + description</div>
  <MyPosts />
</div>
);

export default Profile;