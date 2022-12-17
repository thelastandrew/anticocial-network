import ProfileAPIContainer from './ProfileAPIContainer';
import { connect } from 'react-redux';
import { getProfile, getStatus, updateStatus } from '../../redux/profile-reducer';
import withRouter from '../../hoc/withRouter';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = state => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
});

export default compose(
  connect(mapStateToProps, {
    getProfile,
    getStatus,
    updateStatus,
  }),
  withRouter,
  withAuthRedirect
)(ProfileAPIContainer);;