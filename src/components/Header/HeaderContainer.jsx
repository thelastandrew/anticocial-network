import HeaderAPIContainer from "./HeaderAPIContainer";
import { connect } from 'react-redux';
import { getIsAuth } from '../../redux/auth-reducer';

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
});

const HeaderContainer = connect(mapStateToProps, { getIsAuth })(HeaderAPIContainer);

export default HeaderContainer;