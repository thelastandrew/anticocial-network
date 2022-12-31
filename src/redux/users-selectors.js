export const getUsers = state => state.usersPage.users;
export const getPageSize = state => state.usersPage.pageSize;
export const getCurrentPage = state => state.usersPage.currentPage;
export const getIsAbleToDecrease = state => state.usersPage.isAbleToDecrease;
export const getIsAbleToIncrease = state => state.usersPage.isAbleToIncrease;
export const getIsFetching = state => state.usersPage.isFetching;
export const getFollowingInProgress = state => state.usersPage.followingInProgress;