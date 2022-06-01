const GET_USERS = 'GET_USERS';
const FOLLOW_USER = 'FOLLOW_USER';
const UNFOLLOW_USER = 'UNFOLLOW_USER';

const initialState = {
    users: []
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.payload]
            }
        case FOLLOW_USER:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.payload) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            }
        case UNFOLLOW_USER:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.payload) {
                        return {...user, followed: false}
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

export const followUserCreator = (payload) => {
    return { type: FOLLOW_USER, payload };
}

export const unfollowUserCreator = (payload) => {
    return { type: UNFOLLOW_USER, payload };
}
