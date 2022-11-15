import { actionTypes } from "./actionTypes";

export const addPostActionCreator = () => ({ type: actionTypes.ADD_POST });

export const updNewPostTxtActionCreator = (newText) => ({
  type: actionTypes.UPD_NEW_POST_TXT,
  newText,
});

export const addMessageActionCreator = () => ({ type: actionTypes.ADD_MESSAGE });

export const updNewMsgTxtActionCreator = (newText) => ({
  type: actionTypes.UPD_NEW_MSG_TEXT,
  newText,
});