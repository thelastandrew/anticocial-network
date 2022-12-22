import { Component } from 'react';
import s from './ProfileStatus.module.css';

class ProfileStatus extends Component {
  state = {
    editMode: false,
    status: this.props.status || '',
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      });
    }
  }

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
    window.addEventListener('keydown', this.handleKeyDown);
  };

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
    window.removeEventListener('keydown', this.handleKeyDown);
  };

  handleKeyDown = (e) => {
    if (e.code === 'Enter') {
      this.deactivateEditMode();
    }
  }

  handleChange = (e) => {
    this.setState({
      status: e.target.value,
    });
  }

  render() {
    return (
      <>
        {!this.state.editMode && (
          <div>
            <span className={s.status}>{this.props.status || "no status"}</span>
            <button
              className={s.editBtn}
              onClick={this.activateEditMode}
            >edit</button>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              className={s.statusInput}
              value={this.state.status}
              autoFocus={true}
              onChange={this.handleChange}
            />
            <button
              className={s.editBtn}
              onClick={this.deactivateEditMode}
            >save</button>
          </div>
        )}
      </>
    );
  }
};

export default ProfileStatus;

