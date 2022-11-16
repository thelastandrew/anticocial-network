import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';

const store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'My first post', likesCount: 20 },
        { id: 2, message: 'Lorem ipsum', likesCount: 42 },
      ],
      newPostText: '',
    },

    dialogsPage: {
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
    },

    sideBar: {
      friends: [
        { id: 1, name: 'Ann' },
        { id: 2, name: 'Mom' },
        { id: 3, name: 'Anton' },
      ],
    },
  },

  _callSubscriber() {
    console.log('State has changed');
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sideBar = sidebarReducer(this._state.sideBar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
