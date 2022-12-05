import { Component } from "react";
import Header from "./Header";
import { authAPI } from '../../api/api';

class HeaderAPIContainer extends Component {
  componentDidMount () {
    authAPI.isAuth()
      .then(data => {
        if (data.resultCode === 0) {
          const { id, login, email } = data.data;
          this.props.setUserData(id, login, email);
        }
      });
  }

  render () {
    return <Header {...this.props} />;
  }
}

export default HeaderAPIContainer;