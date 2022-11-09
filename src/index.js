import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const postsData = [
  { id: 1, message: 'My first post', likesCount: 20 },
  { id: 2, message: 'Lorem ipsum', likesCount: 42 },
];

const dialogData = [
  { id: 1, name: 'Anna' },
  { id: 2, name: 'Mom' },
  { id: 3, name: 'Anton' },
];

const messagesData = [
  { id: 1, userName: 'Anna', message: 'Hello', isMe: false },
  { id: 2, userName: 'me', message: 'I love you', isMe: true },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App
        posts={postsData}
        dialogs={dialogData}
        messages={messagesData}
      />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
