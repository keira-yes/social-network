import { AppStateType } from '../store';

export const selectUsers = (state: AppStateType) => state.usersReducer.users;
export const selectUsersTotal = (state: AppStateType) => state.usersReducer.usersTotal;
export const selectUsersPageLimit = (state: AppStateType) => state.usersReducer.usersPageLimit;
export const selectUsersCurrentPage = (state: AppStateType) => state.usersReducer.usersCurrentPage;
export const selectIsLoading = (state: AppStateType) => state.usersReducer.isLoading;
export const selectFetchingItems = (state: AppStateType) => state.usersReducer.fetchingItems;
