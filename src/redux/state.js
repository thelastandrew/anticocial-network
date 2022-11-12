let rerenderEntireTree;

const state = {
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
};

export const addPost = () => {
  const newPost = {
    id: state.profilePage.posts.length + 1,
    message: state.profilePage.newPostText,
    likesCount: 0,
  }

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree();
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree();
};

export const addMessage = () => {
  const newMessage = {
    id: state.dialogsPage.messages.length + 1,
    userName: 'me',
    message: state.dialogsPage.newMessageText,
    isMe: true,
  };

  state.dialogsPage.messages.push(newMessage);
  state.dialogsPage.newMessageText = '';
  rerenderEntireTree();
};

export const updateNewMessageText = (newText) => {
  state.dialogsPage.newMessageText = newText;
  rerenderEntireTree()
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};

export default state;
