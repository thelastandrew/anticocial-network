import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => (
  <>
    <ProfileInfo />
    <MyPosts posts={props.posts} />
  </>
);

export default Profile;
