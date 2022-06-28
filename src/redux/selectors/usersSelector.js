export const selectUsers = state => state.usersReducer.users;
export const selectUsersTotal = state => state.usersReducer.usersTotal;
export const selectUsersPageLimit = state => state.usersReducer.usersPageLimit;
export const selectUsersCurrentPage = state => state.usersReducer.usersCurrentPage;
export const selectIsLoading = state => state.usersReducer.isLoading;
export const selectFetchingItems = state => state.usersReducer.fetchingItems;
