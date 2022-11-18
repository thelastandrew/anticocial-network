import { addMessageActionCreator, updNewMsgTxtActionCreator } from '../../redux/actionCreators';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
  const dialogsPage = props.store.getState().dialogsPage;

  const updateNewMessageText = (newText) => {
    props.store.dispatch(
      updNewMsgTxtActionCreator(newText)
    );
  };

  const addMessage = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  return <Dialogs
    updateNewMessageText={updateNewMessageText}
    addMessage={addMessage}
    messages={dialogsPage.messages}
    dialogs={dialogsPage.dialogs}
    newMessageText={dialogsPage.newMessageText}
  />;
};

export default DialogsContainer;

