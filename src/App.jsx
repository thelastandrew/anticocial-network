import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import NavContainer from './components/Nav/NavContainer';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => (
  <div className="app-wrapper">
    <Header />
    <NavContainer store={props.store} />
    <div className="content">
      <Routes>
        <Route
          path="/"
          element={
            <Profile store={props.store}/>
          }
        />
        <Route
          path="/dialogs"
          element={
            <DialogsContainer store={props.store}/>
          }
        />
        <Route path="*" element={<div>page not found</div>} />
      </Routes>
    </div>
  </div>
);

export default App;
