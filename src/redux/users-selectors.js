import { createSelector } from 'reselect';

export const getUsersSelector = state => state.usersPage.users;
export const getUsers = createSelector(getUsersSelector, users => users.filter(u => true));
export const getPageSize = state => state.usersPage.pageSize;
export const getCurrentPage = state => state.usersPage.currentPage;
export const getIsAbleToDecrease = state => state.usersPage.isAbleToDecrease;
export const getIsAbleToIncrease = state => state.usersPage.isAbleToIncrease;
export const getIsFetching = state => state.usersPage.isFetching;
export const getFollowingInProgress = state => state.usersPage.followingInProgress;