import rerenderEntireTree from "../render";

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

  sideBar: {
    friends: [
      { id: 1, name: 'Ann' },
      { id: 2, name: 'Mom' },
      { id: 3, name: 'Anton' },
    ],
  },
};

export const addPost = (postMessage) => {
  const newPost = {
    id: state.profilePage.posts.length + 1,
    message: postMessage,
    likesCount: 0,
  }

  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
};

export const addMessage = (messageText) => {
  const newMessage = {
    id: state.dialogsPage.messages.length + 1,
    userName: 'me',
    message: messageText,
    isMe: true,
  };

  state.dialogsPage.messages.push(newMessage);
  rerenderEntireTree(state);
};

export default state;
