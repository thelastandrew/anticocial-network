import './profile.css'
import wallPaper from './cover3.jpg';

const Profile = () => (
  <div className="content">
  <img src={wallPaper} alt="wallpaper" />
  <div>ava + description</div>
  <div>
    My posts
    <div>New post</div>
  </div>
</div>
);

export default Profile;