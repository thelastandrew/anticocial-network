import ProfileAPIContainer from './ProfileAPIContainer';
import { connect } from 'react-redux';
import { getProfile } from '../../redux/profile-reducer';
import withRouter from '../../hoc/withRouter';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

const mapStateToProps = state => ({ profile: state.profilePage.profile });

export default compose(
  connect(mapStateToProps, { getProfile }),
  withRouter,
  withAuthRedirect
)(ProfileAPIContainer);;