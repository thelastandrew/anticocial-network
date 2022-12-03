import { Component } from 'react';
import Profile from './Profile';
import axios from 'axios';



class ProfileAPIContainer extends Component {
  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/profile/26855')
      .then((response) => {
        this.props.setUserProfile(response.data);
      });
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

export default ProfileAPIContainer;
