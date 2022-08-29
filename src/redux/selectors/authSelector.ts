import { AppStateType } from '../store';

export const selectAuthData = (state: AppStateType) => state.authReducer.authData;
export const selectIsAuth = (state: AppStateType) => state.authReducer.isAuth;
export const selectCaptcha = (state: AppStateType) => state.authReducer.captcha;
