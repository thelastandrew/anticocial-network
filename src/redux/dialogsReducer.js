import { actionTypes } from './actionTypes';

const initialState = {
  dialogs: [
    { id: 1, name: 'Anna' },
    { id: 2, name: 'Mom' },
    { id: 3, name: 'Anton' },
  ],
  messages: [
    { id: 1, userName: 'Anna', message: 'Hello', isMe: false },
    { id: 2, userName: 'me', message: 'I love you', isMe: true },
  ],
  newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_MESSAGE: {
      const newMessage = {
        id: state.messages.length + 1,
        userName: 'me',
        message: state.newMessageText,
        isMe: true,
      };
      const stateCopy = { ...state };
      stateCopy.messages = [...state.messages];
      stateCopy.messages.push(newMessage);
      stateCopy.newMessageText = '';
      return stateCopy;
    }

    case actionTypes.UPD_NEW_MSG_TEXT: {
      const stateCopy = { ...state };
      stateCopy.newMessageText = action.newText;
      return stateCopy;
    }

    default:
      return state;
  }
};

export default dialogsReducer;
