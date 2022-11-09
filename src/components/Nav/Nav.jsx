import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';

const Nav = (props) => (
  <nav className={s.nav}>
    <div className={s.navItems}>
      <div className={s.item}>
        <NavLink className={({isActive}) => isActive ? s.active : ''} to='/'>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={({isActive}) => isActive ? s.active : ''} to='/dialogs'>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={({isActive}) => isActive ? s.active : ''} to='/news'>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={({isActive}) => isActive ? s.active : ''} to='/music'>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink className={({isActive}) => isActive ? s.active : ''} to='/settings'>Settings</NavLink>
      </div>
    </div>
    <div className={s.friends}>
      <p>Friends:</p>
      <div>
        {props.state.friends.map(friend =>
          <p key={friend.id}>{friend.name}</p>
        )}
      </div>
    </div>
  </nav>
);

export default Nav;
