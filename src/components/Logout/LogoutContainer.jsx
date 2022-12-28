import Logout from "./Logout";
import { connect } from 'react-redux';
import { logout } from '../../redux/auth-reducer';

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
});

const LogoutContainer = connect(mapStateToProps, { logout })(Logout);

export default LogoutContainer;