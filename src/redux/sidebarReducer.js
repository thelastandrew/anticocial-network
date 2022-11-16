import { actionTypes } from './actionTypes';

const initialState = {
  friends: [
    { id: 1, name: 'Ann' },
    { id: 2, name: 'Mom' },
    { id: 3, name: 'Anton' },
  ],
};

const sidebarReducer = (state = initialState, action) => {

  return state;
};

export default sidebarReducer;