import s from './Header.module.css';
import logo from '../../assets/img/logo.jpg';
import { NavLink } from 'react-router-dom';

const Header = (props) => (
  <header className={s.header}>
    <img src={logo} alt="logo" />
    <div className={s.loginBlock}>
      {
        props.isAuth
        ? <div className={s.loginName}>{props.login}</div>
        : <NavLink className={s.loginBtn} to={'/login'}>Login</NavLink>
      }
    </div>
  </header>
);

export default Header;
