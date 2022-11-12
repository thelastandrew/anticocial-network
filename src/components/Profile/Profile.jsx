import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => (
  <>
    <ProfileInfo />
    <MyPosts
      posts={props.profilePage.posts}
      newPostText={props.profilePage.newPostText}
      updateNewPostText={props.updateNewPostText}
      addPost={props.addPost}
    />
  </>
);

export default Profile;
