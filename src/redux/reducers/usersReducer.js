const SET_USERS = 'SET_USERS';
const SET_USERS_TOTAL = 'SET_USERS_TOTAL';
const TOGGLE_FOLLOW_USER = 'TOGGLE_FOLLOW_USER';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_IS_LOADING = 'SET_IS_LOADING';

const initialState = {
    users: [],
    usersTotal: 0,
    usersPageLimit: 10,
    usersCurrentPage: 1,
    isLoading: false
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.payload
            }
        case SET_USERS_TOTAL:
            return {
                ...state,
                usersTotal: action.payload
            }
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
            return {
                ...state,
                usersCurrentPage: action.payload
            }
        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state;
    }
}

export const setUsers = (payload) => {
    return { type: SET_USERS, payload };
}

export const setUsersTotal = (payload) => {
    return { type: SET_USERS_TOTAL, payload };
}

export const toggleFollowUser = (payload) => {
    return { type: TOGGLE_FOLLOW_USER, payload };
}

export const setCurrentPage = (payload) => {
    return { type: SET_CURRENT_PAGE, payload };
}

export const setIsLoading = (payload) => {
    return { type: SET_IS_LOADING, payload };
}
