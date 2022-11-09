const state = {
  profilePage: {
    posts: [
      { id: 1, message: 'My first post', likesCount: 20 },
      { id: 2, message: 'Lorem ipsum', likesCount: 42 },
    ],
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
  },
};

export default state;
