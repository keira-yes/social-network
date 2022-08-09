import { usersAPI } from "../../api/usersAPI";
import {ResultCode, UserType} from "../../types/types";
import { ActionsType, DefaultThunkType } from "../store";

const initialState = {
    users: [] as Array<UserType>,
    usersTotal: 0,
    usersPageLimit: 10,
    usersCurrentPage: 1,
    isLoading: false,
    fetchingItems: [] as Array<number>
}

type InitialStateType = typeof initialState;
type ActionType = ActionsType<typeof usersActions>;
type ThunkType = DefaultThunkType<ActionType>;

export const usersReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'SET_USERS':
            return { ...state, users: action.payload }
        case 'SET_USERS_TOTAL':
            return { ...state, usersTotal: action.payload }
        case 'TOGGLE_FOLLOW_USER':
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.payload) {
                        return {...user, followed: !user.followed}
                    }
                    return user;
                })
            }
        case 'SET_CURRENT_PAGE':
            return { ...state, usersCurrentPage: action.payload }
        case 'SET_IS_LOADING':
            return { ...state, isLoading: action.payload }
        case 'SET_IS_FETCHING':
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

export const usersActions = {
    setIsLoading: (payload: boolean) => ({ type: 'SET_IS_LOADING', payload } as const),
    setUsers: (payload: Array<UserType>) => ({ type: 'SET_USERS', payload } as const),
    setUsersTotal: (payload: number) => ({ type: 'SET_USERS_TOTAL', payload } as const),
    toggleFollowUser: (payload: number) => ({ type: 'TOGGLE_FOLLOW_USER', payload } as const),
    setCurrentPage: (payload: number) => ({ type: 'SET_CURRENT_PAGE', payload } as const),
    setIsFetching: (isFetching: boolean, id: number) => ({ type: 'SET_IS_FETCHING', isFetching, id } as const)
}

export const fetchUsers = (usersCurrentPage: number, usersPageLimit: number): ThunkType => async (dispatch) => {
    dispatch(usersActions.setIsLoading(true));
    const data = await usersAPI.getUsers(usersCurrentPage, usersPageLimit);
    dispatch(usersActions.setIsLoading(false));
    dispatch(usersActions.setUsers(data.items));
    dispatch(usersActions.setUsersTotal(data.totalCount));
}

export const setFollowUser = (followed: boolean, id: number): ThunkType => async (dispatch) => {
    dispatch(usersActions.setIsFetching(true, id));
    const action = followed ? usersAPI.unFollowUser : usersAPI.followUser;
    const data = await action(id);
    if (data.resultCode === ResultCode.Success) {
        dispatch(usersActions.toggleFollowUser(id));
    }
    dispatch(usersActions.setIsFetching(false, id));
}
