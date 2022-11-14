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

  getState() {
    return this._state;
  },

  _callSubscriber() {
    console.log('State has changed');
  },

  addPost() {
    const newPost = {
      id: this._state.profilePage.posts.length + 1,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    }

    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber();
  },

  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber();
  },

  addMessage() {
    const newMessage = {
      id: this._state.dialogsPage.messages.length + 1,
      userName: 'me',
      message: this._state.dialogsPage.newMessageText,
      isMe: true,
    };

    this._state.dialogsPage.messages.push(newMessage);
    this._state.dialogsPage.newMessageText = '';
    this._callSubscriber();
  },

  updateNewMessageText(newText) {
    this._state.dialogsPage.newMessageText = newText;
    this._callSubscriber()
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
};

export default store;
