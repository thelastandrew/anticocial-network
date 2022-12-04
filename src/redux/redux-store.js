import { createStore, combineReducers } from 'redux';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import usersReducer from './users-reducer';
import sidebarReducer from './sidebar-reducer';
import authReducer from './auth-reducer';

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  sideBar: sidebarReducer,
  auth: authReducer,
});

const store = createStore(reducers);
window.store = store;

export default store;