import { Component } from 'react';
import Profile from './Profile';
import { profileAPI } from '../../api/api';



class ProfileAPIContainer extends Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) userId = '26855';
    profileAPI.getProfile(userId)
      .then((data) => {
        this.props.setUserProfile(data);
      });
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

export default ProfileAPIContainer;
