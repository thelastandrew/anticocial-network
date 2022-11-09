import s from './Header.module.css'
import logo from './logo.jpg';

const Header = () => <header className={s.header}>
<img src={logo} alt="logo" />
</header>

export default Header;