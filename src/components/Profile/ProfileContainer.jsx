import ProfileAPIContainer from './ProfileAPIContainer';
import { connect } from 'react-redux';
import { getProfile } from '../../redux/profile-reducer';
import withRouter from '../../hoc/withRouter';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

const mapStateToProps = state => ({ profile: state.profilePage.profile });

let AuthRedirectComponent = withAuthRedirect(ProfileAPIContainer);
const ProfileContainer = connect(mapStateToProps, { getProfile })(withRouter(AuthRedirectComponent));

export default ProfileContainer;