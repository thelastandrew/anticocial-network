import LoginFormContainer from "./LoginFormContainer";
import s from './Login.module.css';
import { Navigate } from "react-router-dom";

const Login = (props) => {
  if (props.isAuth) {
    return <Navigate to="/profile"/>
  }
  return (<div>
    <h1 className={s.title}>Login</h1>
    <LoginFormContainer />
  </div>);
};

export default Login;