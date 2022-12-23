const ADD_MESSAGE = 'ADD_MESSAGE';
const UPD_NEW_MSG_TEXT = 'UPD_NEW_MSG_TEXT';


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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      const newMessage = {
        id: state.messages.length + 1,
        userName: 'me',
        message: action.newMessageText,
        isMe: true,
      };
      return {
        ...state,
        messages: [...state.messages, newMessage],
      };
    }

    case UPD_NEW_MSG_TEXT: {
      return { ...state, newMessageText: action.newText };
    }

    default:
      return state;
  }
};

export const addMessage = newMessageText => ({ type: ADD_MESSAGE, newMessageText });
export const updateNewMessageText = newText => ({ type: UPD_NEW_MSG_TEXT, newText });

export default dialogsReducer;
