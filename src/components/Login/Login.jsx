import LoginForm from "./LoginForm";
import s from './Login.module.css';

const Login = () => {
  return (<div>
    <h1 className={s.title}>Login</h1>
    <LoginForm />
  </div>);
};

export default Login;