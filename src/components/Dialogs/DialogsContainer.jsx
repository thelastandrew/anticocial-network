import { addMessageActionCreator, updNewMsgTxtActionCreator } from '../../redux/actionCreators';
import { StoreContext } from '../../StoreContext';
import Dialogs from './Dialogs';

const DialogsContainer = () => {
  return <StoreContext.Consumer>{
    store => {
      const dialogsPage = store.getState().dialogsPage;

      const updateNewMessageText = (newText) => {
        store.dispatch(
          updNewMsgTxtActionCreator(newText)
        );
      };

      const addMessage = () => {
        store.dispatch(addMessageActionCreator());
      };

      return   <Dialogs
      updateNewMessageText={updateNewMessageText}
      addMessage={addMessage}
      messages={dialogsPage.messages}
      dialogs={dialogsPage.dialogs}
      newMessageText={dialogsPage.newMessageText}
    />;
    }
    }</StoreContext.Consumer>;
};

export default DialogsContainer;

