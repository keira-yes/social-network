const GET_USERS = 'GET_USERS';
const TOGGLE_FOLLOW_USER = 'TOGGLE_FOLLOW_USER';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

const initialState = {
    users: [],
    usersTotal: 26,
    usersPageLimit: 5,
    usersCurrentPage: 1,
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: action.payload
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
        default:
            return state;
    }
}

export const getUsersCreator = (payload) => {
    return { type: GET_USERS, payload };
}

export const toggleFollowUserCreator = (payload) => {
    return { type: TOGGLE_FOLLOW_USER, payload };
}

export const setCurrentPageCreator = (payload) => {
    return { type: SET_CURRENT_PAGE, payload };
}
