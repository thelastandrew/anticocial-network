import { Navigate } from 'react-router-dom';
import s from './Logout.module.css';

const Logout = (props) => {
  const handleClick = () => {
    props.logout();
  }

  if (!props.isAuth) return <Navigate to="/login"/>

  return (
    <div className={s.logoutContainer}>
      <div className={s.loginName}>{props.login}</div>
      <button onClick={handleClick} className={s.logoutBtn}>LogOut</button>
    </div>
  )
};

export default Logout;