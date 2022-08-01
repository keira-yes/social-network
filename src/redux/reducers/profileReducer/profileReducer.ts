import { profileAPI } from "../../../api/profileAPI";
import { PhotosType, ProfileType, ResultCode } from "../../../types/types";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "../../store";

const SET_PROFILE = 'profile/SET_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const ADD_POST = 'profile/ADD_POST';
const DELETE_POST = 'profile/DELETE_POST';
const SET_AVATAR = 'profile/SET_AVATAR';

type PostType = {
    id: number
    message: string
    likes: number
}

export const initialState = {
    profile: null as ProfileType | null,
    status: '',
    posts: [
        {id: 1, message: "Hello World!", likes: 5},
        {id: 2, message: "My first post...", likes: 12}
    ] as Array<PostType>
}

type InitialStateType = typeof initialState;

export const profileReducer = (state = initialState, action: ActionType): InitialStateType => {

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
            return { ...state, posts: [...state.posts, newPost] }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(item => item.id !== action.payload)
            }
        case SET_AVATAR:
            return { ...state, profile: { ...state.profile, photos: action.payload } as ProfileType }
        default:
            return state;
    }
}

type ActionType = AddPostType | DeletePostType | SetProfileType | SetStatusType | SetAvatarType;
type ThunkType = ThunkAction<Promise<void>, AppStateType, any, ActionType>;

type AddPostType = {
    type: typeof ADD_POST
    payload: string
}

export const addPost = (payload: string): AddPostType => {
    return { type: ADD_POST, payload };
}

type DeletePostType = {
    type: typeof DELETE_POST
    payload: number
}

export const deletePost = (payload: number): DeletePostType => {
    return { type: DELETE_POST, payload };
}

type SetProfileType = {
    type: typeof SET_PROFILE
    payload: ProfileType
}

export const setProfile = (payload: ProfileType): SetProfileType => {
    return { type: SET_PROFILE, payload }
}

export const getProfile = (id: number): ThunkType => async (dispatch) => {
    const data = await profileAPI.getProfile(id);
    dispatch(setProfile(data));
}

type SetStatusType = {
    type: typeof SET_STATUS
    payload: string
}

export const setStatus = (payload: string): SetStatusType => {
    return { type: SET_STATUS, payload }
}

export const getStatus = (id: number): ThunkType => async (dispatch) => {
    const data = await profileAPI.getStatus(id);
    dispatch(setStatus(data));
}

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    await profileAPI.updateStatus(status);
    dispatch(setStatus(status));
}

type SetAvatarType = {
    type: typeof SET_AVATAR
    payload: PhotosType
}

export const setAvatar = (payload: PhotosType): SetAvatarType => {
    return { type: SET_AVATAR, payload }
}

export const updateAvatar = (photo: string): ThunkType => async (dispatch) => {
    const response = await profileAPI.updateAvatar(photo);
    dispatch(setAvatar(response.data.photos));
}

export const editProfileInfo = (profile: ProfileType): ThunkType => async (dispatch, getState: any) => {
    const response = await profileAPI.updateProfile(profile);
    if (response.resultCode === ResultCode.Success) {
        dispatch(getProfile(getState().authReducer.authData.data.id));
    }
}
