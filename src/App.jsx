import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

const App = (props) => (
  <div className="app-wrapper">
    <Header />
    <Nav state={props.state.sideBar} />
    <div className="content">
      <Routes>
        <Route
          path="/"
          element={
            <Profile
              profilePage={props.state.profilePage}
              updateNewPostText={props.updateNewPostText}
              addPost={props.addPost}
            />
          }
        />
        <Route
          path="/dialogs"
          element={
            <Dialogs
              dialogsPage={props.state.dialogsPage}
              updateNewMessageText={props.updateNewMessageText}
              addMessage={props.addMessage}
            />
          }
        />
        <Route path="*" element={<div>page not found</div>} />
      </Routes>
    </div>
  </div>
);

export default App;
