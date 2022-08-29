import { AppStateType } from '../store';

export const selectProfile = (state: AppStateType) => state.profileReducer.profile;
export const selectStatus = (state: AppStateType) => state.profileReducer.status;
export const selectPosts = (state: AppStateType) => state.profileReducer.posts;
