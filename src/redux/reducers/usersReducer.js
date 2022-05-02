const GET_USERS = 'GET_USERS';
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

const initialState = {
    users: [
        {id: 1, firstName: "Irina", lastName: "K.", status: "I'm ready", location: {city: "Kiev", country: "Ukraine"}, followed: true},
        {id: 2, firstName: "Ksenia", lastName: "K.", status: "I'm not ready", location: {city: "Oslo", country: "Norway"}, followed: false},
        {id: 3, firstName: "Alex", lastName: "O.", status: "Sunshine", location: {city: "NY", country: "USA"}, followed: false},
        {id: 4, firstName: "David", lastName: "H.", status: "Love like winter", location: {city: "London", country: "Great Britain"}, followed: false}
    ]
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.payload ]
            }
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.payload) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            }
        case UNFOLLOW:
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

export const followCreator = (payload) => {
    return { type: FOLLOW, payload };
}

export const unfollowCreator = (payload) => {
    return { type: UNFOLLOW, payload };
}
