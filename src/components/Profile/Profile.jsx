import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) => (
  <>
    <ProfileInfo
      profile={props.profile}
      status={props.status}
      updateStatus={props.updateStatus}
    />
    <MyPostsContainer />
  </>
);

export default Profile;
