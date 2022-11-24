import Dialogs from './Dialogs';
import { addMessageAC, updNewMsgTxtAC } from '../../redux/dialogsReducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  messages: state.dialogsPage.messages,
  dialogs : state.dialogsPage.dialogs,
  newMessageText: state.dialogsPage.newMessageText,
});

const mapDispatchToProps = (dispatch) => ({
  updateNewMessageText: (newText) => { dispatch(updNewMsgTxtAC(newText)) },
  addMessage: () => { dispatch(addMessageAC()) },
});

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;

