import { usersAPI } from "../../api/usersAPI";
import {ResultCode, UserType} from "../../types/types";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "../store";

const SET_USERS = 'users/SET_USERS';
const SET_USERS_TOTAL = 'users/SET_USERS_TOTAL';
const TOGGLE_FOLLOW_USER = 'users/TOGGLE_FOLLOW_USER';
const SET_CURRENT_PAGE = 'users/SET_CURRENT_PAGE';
const SET_IS_LOADING = 'users/SET_IS_LOADING';
const SET_IS_FETCHING = 'users/SET_IS_FETCHING';

const initialState = {
    users: [] as Array<UserType>,
    usersTotal: 0,
    usersPageLimit: 10,
    usersCurrentPage: 1,
    isLoading: false,
    fetchingItems: [] as Array<number>
}

type InitialStateType = typeof initialState;

export const usersReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case SET_USERS:
            return { ...state, users: action.payload }
        case SET_USERS_TOTAL:
            return { ...state, usersTotal: action.payload }
        case TOGGLE_FOLLOW_USER:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.payload) {
                        return {...user, followed: !user.followed}
                    }
                    return user;
                })
            }
        case SET_CURRENT_PAGE:
            return { ...state, usersCurrentPage: action.payload }
        case SET_IS_LOADING:
            return { ...state, isLoading: action.payload }
        case SET_IS_FETCHING:
            return {
                ...state,
                fetchingItems: action.isFetching ?
                    [...state.fetchingItems, action.id] :
                    state.fetchingItems.filter(id => id !== action.id)
            }
        default:
            return state;
    }
}

type ActionType = SetIsLoadingType | SetUsersType | SetUsersTotalType | ToggleFollowUserType | SetCurrentPageType | SetIsFetchingType;
type ThunkType = ThunkAction<Promise<void>, AppStateType, any, ActionType>;

type SetIsLoadingType = {
    type: typeof SET_IS_LOADING
    payload: boolean
}

export const setIsLoading = (payload: boolean): SetIsLoadingType => {
    return { type: SET_IS_LOADING, payload };
}

type SetUsersType = {
    type: typeof SET_USERS
    payload: Array<UserType>
}

export const setUsers = (payload: Array<UserType>): SetUsersType => {
    return { type: SET_USERS, payload };
}

type SetUsersTotalType = {
    type: typeof SET_USERS_TOTAL
    payload: number
}

export const setUsersTotal = (payload: number): SetUsersTotalType => {
    return { type: SET_USERS_TOTAL, payload };
}

type ToggleFollowUserType = {
    type: typeof TOGGLE_FOLLOW_USER
    payload: number
}

export const toggleFollowUser = (payload: number): ToggleFollowUserType => {
    return { type: TOGGLE_FOLLOW_USER, payload };
}

type SetCurrentPageType = {
    type: typeof SET_CURRENT_PAGE
    payload: number
}

export const setCurrentPage = (payload: number): SetCurrentPageType => {
    return { type: SET_CURRENT_PAGE, payload };
}

type SetIsFetchingType = {
    type: typeof SET_IS_FETCHING
    isFetching: boolean,
    id: number
}

export const setIsFetching = (isFetching: boolean, id: number): SetIsFetchingType => {
    return { type: SET_IS_FETCHING, isFetching, id };
}

export const fetchUsers = (usersCurrentPage: number, usersPageLimit: number): ThunkType => async (dispatch) => {
    dispatch(setIsLoading(true));
    const data = await usersAPI.getUsers(usersCurrentPage, usersPageLimit);
    dispatch(setIsLoading(false));
    dispatch(setUsers(data.items));
    dispatch(setUsersTotal(data.totalCount));
}

export const setFollowUser = (followed: boolean, id: number): ThunkType => async (dispatch) => {
    dispatch(setIsFetching(true, id));
    const action = followed ? usersAPI.unFollowUser : usersAPI.followUser;
    const data = await action(id);
    if (data.resultCode === ResultCode.Success) {
        dispatch(toggleFollowUser(id));
    }
    dispatch(setIsFetching(false, id));
}
