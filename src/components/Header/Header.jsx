import s from './Header.module.css';
import logo from '../../assets/img/logo.jpg';
import LogoutContainer from '../Logout/LogoutContainer';

const Header = (props) => (
  <header className={s.header}>
    <img src={logo} alt="logo" />
    <div className={s.loginBlock}>
      { props.isAuth && <LogoutContainer
        login={props.login}
        logout={props.logout}
      /> }
    </div>
  </header>
);

export default Header;
