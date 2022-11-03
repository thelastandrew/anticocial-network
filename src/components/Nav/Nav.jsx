import { Link } from 'react-router-dom';
import styles from './nav.module.css';

const Nav = () => (
  <nav className={styles.nav}>
    <div className={styles.item}>
      <Link to='/'>Profile</Link>
    </div>
    <div className={styles.item}>
      <Link to='/dialogs'>Messages</Link>
    </div>
    <div className={styles.item}>
      <Link to='/news'>News</Link>
    </div>
    <div className={styles.item}>
      <Link to='/music'>Music</Link>
    </div>
    <div className={styles.item}>
      <Link to='/settings'>Settings</Link>
    </div>
  </nav>
);

export default Nav;
