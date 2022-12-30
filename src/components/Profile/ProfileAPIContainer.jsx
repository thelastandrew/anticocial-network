import { Component } from 'react';
import Profile from './Profile';


class ProfileAPIContainer extends Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) userId = this.props.authorizedUserId;
    this.props.getProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return <Profile
      {...this.props}
      profile={this.props.profile}
      status={this.props.status}
      updateStatus = {this.props.updateStatus}
    />;
  }
}

export default ProfileAPIContainer;
