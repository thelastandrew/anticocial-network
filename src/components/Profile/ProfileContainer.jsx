import ProfileAPIContainer from './ProfileAPIContainer';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profileReducer';

const mapStateToProps = state => ({
  profile: state.profilePage.profile
});

const ProfileContainer = connect(mapStateToProps, { setUserProfile })(ProfileAPIContainer);

export default ProfileContainer;