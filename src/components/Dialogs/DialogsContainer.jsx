import Dialogs from './Dialogs';
import { addMessage } from '../../redux/dialogs-reducer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

const mapStateToProps = state => ({
  messages: state.dialogsPage.messages,
  dialogs : state.dialogsPage.dialogs,
});

export default compose(
  connect(mapStateToProps, {
    addMessage,
  }),
  withAuthRedirect
)(Dialogs);;

