import { profileAPI } from "../../../api/profileAPI";

const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';
const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';

export const initialState = {
    profile: null,
    status: '',
    posts: [
        {id: 1, message: "Hello World!", likes: 5},
        {id: 2, message: "My first post...", likes: 12}
    ]
}

export const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_PROFILE:
            return { ...state, profile: action.payload }
        case SET_STATUS:
            return { ...state, status: action.payload }
        case ADD_POST:
            const newPost = {
                id: state.posts.length + 1,
                message: action.payload,
                likes: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost]
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(item => item.id !== action.payload)
            }
        default:
            return state;
    }
}

export const addPost = payload => {
    return { type: ADD_POST, payload };
}

export const deletePost = payload => {
    return { type: DELETE_POST, payload };
}

export const setProfile = payload => {
    return { type: SET_PROFILE, payload }
}

export const getProfile = id => dispatch => {
    profileAPI.getProfile(id).then(data => {
        dispatch(setProfile(data));
    });
}

export const setStatus = payload => {
    return { type: SET_STATUS, payload }
}

export const getStatus = id => dispatch => {
    profileAPI.getStatus(id).then(data => {
        dispatch(setStatus(data));
    });
}

export const updateStatus = status => dispatch => {
    profileAPI.updateStatus(status).then(() => {
        dispatch(setStatus(status));
    });
}
