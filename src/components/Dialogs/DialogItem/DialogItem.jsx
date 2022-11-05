import { NavLink } from 'react-router-dom';
import s from './DialogItem.module.css';

const DialogItem = (props) => (
  <div className={s.item}>
    <NavLink
      className={({isActive}) => isActive ? s.active : ''}
      to={`/dialogs/${props.id}`}>
        {props.userName}
      </NavLink>
  </div>
)

export default DialogItem;