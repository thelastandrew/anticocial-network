import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';

const Nav = (props) => {
  const friends = props.friends.map((friend) => (
    <p key={friend.id}>{friend.name}</p>
  ))

  return (
    <nav className={s.nav}>
      <div className={s.navItems}>
        <div className={s.item}>
          <NavLink
            className={({ isActive }) => (isActive ? s.active : '')}
            to="/"
          >
            Profile
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink
            className={({ isActive }) => (isActive ? s.active : '')}
            to="/dialogs"
          >
            Messages
          </NavLink>
        </div>
        <div className={s.item}>
          <NavLink
            className={({ isActive }) => (isActive ? s.active : '')}
            to="/users"
          >
            Users
          </NavLink>
        </div>
      </div>
      <div className={s.friends}>
        <p>Friends:</p>
        <div>
          {friends}
        </div>
      </div>
    </nav>
  );
};

export default Nav;

