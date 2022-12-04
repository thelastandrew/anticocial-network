import HeaderAPIContainer from "./HeaderAPIContainer";
import { connect } from 'react-redux';
import { setUserData } from '../../redux/auth-reducer';

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

const HeaderContainer = connect(mapStateToProps, { setUserData })(HeaderAPIContainer);

export default HeaderContainer;