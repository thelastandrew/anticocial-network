import { useState } from 'react';
import s from './ProfileStatus.module.css';

const ProfileStatus = (props) => {
  const [state, setState] = useState({
    editMode: false,
    status: props.status || '',
  });

  const activateEditMode = () => {
    setState({
      ...state,
      editMode: true,
    });
  };

  const deactivateEditMode = () => {
    setState({
      ...state,
      editMode: false,
    });
    props.updateStatus(state.status);
  };

  const handleChange = (e) => {
    setState({
      ...state,
      status: e.target.value,
    });
  }

    return (
      <>
        {!state.editMode && (
          <div>
            <span className={s.status}>{props.status || "no status"}</span>
            <button
              className={s.editBtn}
              onClick={activateEditMode}
            >edit</button>
          </div>
        )}
        {state.editMode && (
          <div>
            <input
              className={s.statusInput}
              value={state.status}
              autoFocus={true}
              onChange={handleChange}
            />
            <button
              className={s.editBtn}
              onClick={deactivateEditMode}
            >save</button>
          </div>
        )}
      </>
    );
};

export default ProfileStatus;

