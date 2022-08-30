import { AppStateType } from '../store';

export const selectDialogs = (state: AppStateType) => state.dialogsReducer.dialogs;
