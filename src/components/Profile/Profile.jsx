import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => (
  <>
    <ProfileInfo profile={props.profile}/>
    <MyPostsContainer />
  </>
);

export default Profile;
