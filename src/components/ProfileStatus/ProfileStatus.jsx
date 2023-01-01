import { useState, useEffect } from 'react';
import s from './ProfileStatus.module.css';

const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status || '');

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const handleChange = (e) => {
    setStatus(e.target.value);
  };

  return (
    <>
      {!editMode && (
        <div>
          <span className={s.status}>{props.status || 'no status'}</span>
          <button className={s.editBtn} onClick={activateEditMode}>
            edit
          </button>
        </div>
      )}
      {editMode && (
        <div>
          <input
            className={s.statusInput}
            value={status}
            autoFocus={true}
            onChange={handleChange}
          />
          <button className={s.editBtn} onClick={deactivateEditMode}>
            save
          </button>
        </div>
      )}
    </>
  );
};

export default ProfileStatus;
