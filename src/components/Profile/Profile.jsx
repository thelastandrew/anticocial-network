import styles from './profile.module.css'
import wallPaper from './cover3.jpg';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => (
  <>
  <img className={styles.wallPaper} src={wallPaper} alt="wallpaper" />
  <div>ava + description</div>
  <MyPosts />
</>
);

export default Profile;