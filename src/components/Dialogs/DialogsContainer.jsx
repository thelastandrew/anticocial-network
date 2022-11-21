import Dialogs from './Dialogs';
import { addMessageActionCreator, updNewMsgTxtActionCreator } from '../../redux/actionCreators';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  messages: state.dialogsPage.messages,
  dialogs : state.dialogsPage.dialogs,
  newMessageText: state.dialogsPage.newMessageText,
});

const mapDispatchToProps = (dispatch) => ({
  updateNewMessageText: (newText) => { dispatch(updNewMsgTxtActionCreator(newText)) },
  addMessage: () => { dispatch(addMessageActionCreator()) },
});

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;

