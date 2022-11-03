import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className='content'>
        <Dialogs />
        {/* <Profile /> */}
      </div>
    </div>
  );
};

export default App;
