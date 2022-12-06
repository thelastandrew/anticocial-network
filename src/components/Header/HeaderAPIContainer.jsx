import { Component } from "react";
import Header from "./Header";

class HeaderAPIContainer extends Component {
  componentDidMount () {
    this.props.getIsAuth();
  }

  render () {
    return <Header {...this.props} />;
  }
}

export default HeaderAPIContainer;