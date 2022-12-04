import { Component } from "react";
import Header from "./Header";
import axios from "axios";

class HeaderAPIContainer extends Component {
  componentDidMount () {
    axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', { withCredentials: true })
      .then(response => {
        if (response.data.resultCode === 0) {
          const { id, login, email } = response.data.data;
          this.props.setUserData(id, login, email);
        }
      });
  }

  render () {
    return <Header {...this.props} />;
  }
}

export default HeaderAPIContainer;