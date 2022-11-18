import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => (
  <>
    <ProfileInfo />
    <MyPostsContainer store={props.store}/>
  </>
);

export default Profile;
