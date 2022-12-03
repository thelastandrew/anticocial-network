import { createStore, combineReducers } from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import usersReducer from './usersReducer';
import sidebarReducer from './sidebarReducer';

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: usersReducer,
  sideBar: sidebarReducer
});

const store = createStore(reducers);
window.store = store;

export default store;