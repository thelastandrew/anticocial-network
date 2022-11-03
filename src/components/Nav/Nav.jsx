import { NavLink } from 'react-router-dom';
import styles from './nav.module.css';

const Nav = () => (
  <nav className={styles.nav}>
    <div className={styles.item}>
      <NavLink className={({isActive}) => isActive ? styles.active : ''} to='/'>Profile</NavLink>
    </div>
    <div className={styles.item}>
      <NavLink className={({isActive}) => isActive ? styles.active : ''} to='/dialogs'>Messages</NavLink>
    </div>
    <div className={styles.item}>
      <NavLink className={({isActive}) => isActive ? styles.active : ''} to='/news'>News</NavLink>
    </div>
    <div className={styles.item}>
      <NavLink className={({isActive}) => isActive ? styles.active : ''} to='/music'>Music</NavLink>
    </div>
    <div className={styles.item}>
      <NavLink className={({isActive}) => isActive ? styles.active : ''} to='/settings'>Settings</NavLink>
    </div>
  </nav>
);

export default Nav;
