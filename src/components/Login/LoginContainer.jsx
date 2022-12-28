import Login from "./Login";
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
});

const LoginContainer = connect(mapStateToProps)(Login);

export default LoginContainer;