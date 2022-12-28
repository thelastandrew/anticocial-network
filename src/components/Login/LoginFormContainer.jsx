import LoginForm from "./LoginForm";
import { connect } from 'react-redux';
import { login } from '../../redux/auth-reducer';

const LoginFormContainer = connect(null, { login })(LoginForm);

export default LoginFormContainer;