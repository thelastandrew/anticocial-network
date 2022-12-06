import ProfileAPIContainer from './ProfileAPIContainer';
import { connect } from 'react-redux';
import { getProfile } from '../../redux/profile-reducer';
import withRouter from '../../utils/withRouter'

const mapStateToProps = state => ({
  profile: state.profilePage.profile
});

const ProfileContainer = connect(mapStateToProps, { getProfile })(withRouter(ProfileAPIContainer));

export default ProfileContainer;