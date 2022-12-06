import { Component } from 'react';
import { Navigate } from 'react-router-dom';
import Profile from './Profile';


class ProfileAPIContainer extends Component {
  componentDidMount() {
    let userId = this.props.router.params.userId;
    if (!userId) userId = '26855';
    this.props.getProfile(userId);
  }

  render() {
    if (!this.props.isAuth) return <Navigate to='/login' />
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

export default ProfileAPIContainer;
