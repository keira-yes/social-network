const GET_USERS = 'GET_USERS';
const TOGGLE_FOLLOW_USER = 'TOGGLE_FOLLOW_USER';

const initialState = {
    users: []
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
