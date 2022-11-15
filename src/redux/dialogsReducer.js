import { actionTypes } from './actionTypes';

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_MESSAGE:
      const newMessage = {
        id: state.messages.length + 1,
        userName: 'me',
        message: state.newMessageText,
        isMe: true,
      };
      state.messages.push(newMessage);
      state.newMessageText = '';
      return state;

    case actionTypes.UPD_NEW_MSG_TEXT:
      state.newMessageText = action.newText;
      return state;

    default:
      return state;
  }
};

export default dialogsReducer;
