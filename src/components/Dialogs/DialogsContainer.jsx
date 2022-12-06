import Dialogs from './Dialogs';
import { addMessage, updateNewMessageText } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  messages: state.dialogsPage.messages,
  dialogs : state.dialogsPage.dialogs,
  newMessageText: state.dialogsPage.newMessageText,
  isAuth: state.auth.isAuth,
});

const DialogsContainer = connect(mapStateToProps, {
  updateNewMessageText,
  addMessage,
})(Dialogs);

export default DialogsContainer;

