const ADD_MESSAGE = 'ADD_MESSAGE';

const initialState = {
  dialogs: [
    { id: 1, name: 'Anna' },
    { id: 2, name: 'Mom' },
    { id: 3, name: 'Anton' },
  ],
  messages: [],
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

    default:
      return state;
  }
};

export const addMessage = newMessageText => ({ type: ADD_MESSAGE, newMessageText });

export default dialogsReducer;
