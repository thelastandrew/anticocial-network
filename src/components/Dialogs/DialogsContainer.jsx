import Dialogs from './Dialogs';
import { addMessage, updateNewMessageText } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

const mapStateToProps = state => ({
  messages: state.dialogsPage.messages,
  dialogs : state.dialogsPage.dialogs,
  newMessageText: state.dialogsPage.newMessageText,
});

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, {
  updateNewMessageText,
  addMessage,
})(AuthRedirectComponent);

export default DialogsContainer;

