import styles from './header.module.css'
import logo from './logo.jpg';

const Header = () => <header className={styles.header}>
<img src={logo} alt="logo" />
</header>

export default Header;