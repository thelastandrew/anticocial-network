import { Component } from 'react';
import Profile from './Profile';


class ProfileAPIContainer extends Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) userId = '26855';
    this.props.getProfile(userId);
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

export default ProfileAPIContainer;
