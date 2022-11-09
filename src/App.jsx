import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

const App = (props) => (
  <div className="app-wrapper">
    <Header />
    <Nav />
    <div className="content">
      <Routes>
        <Route path="/" element={<Profile state={props.state.profilePage} />} />
        <Route
          path="/dialogs"
          element={
            <Dialogs state={props.state.dialogsPage} />
          }
        />
        <Route path="*" element={<div>page not found</div>} />
      </Routes>
    </div>
  </div>
);

export default App;
