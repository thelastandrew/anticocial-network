import { actionTypes } from "./actionTypes";

export const addPostActionCreator = () => ({
  type: actionTypes.ADD_POST,
});

export const updNewPostTxtActionCreator = (newText) => ({
  type: actionTypes.UPD_NEW_POST_TXT,
  newText,
});
