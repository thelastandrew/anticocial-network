import { Routes, Route } from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import NavContainer from './components/Nav/NavContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';

const App = () => (
  <div className="app-wrapper">
    <HeaderContainer />
    <NavContainer />
    <div className="content">
      <Routes>
        <Route path="/profile/:userId" element={ <ProfileContainer /> } />
        <Route path="/profile" element={ <ProfileContainer /> } />
        <Route  path="/dialogs" element={ <DialogsContainer /> } />
        <Route  path="/users" element={ <UsersContainer /> } />
        <Route path="*" element={<div>page not found</div>} />
      </Routes>
    </div>
  </div>
);

export default App;
