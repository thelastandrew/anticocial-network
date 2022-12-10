import Dialogs from './Dialogs';
import { addMessage, updateNewMessageText } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

const mapStateToProps = state => ({
  messages: state.dialogsPage.messages,
  dialogs : state.dialogsPage.dialogs,
  newMessageText: state.dialogsPage.newMessageText,
});

export default compose(
  connect(mapStateToProps, {
    updateNewMessageText,
    addMessage,
  }),
  withAuthRedirect
)(Dialogs);;

