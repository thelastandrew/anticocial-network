import HeaderAPIContainer from "./HeaderAPIContainer";
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

const HeaderContainer = connect(mapStateToProps)(HeaderAPIContainer);

export default HeaderContainer;