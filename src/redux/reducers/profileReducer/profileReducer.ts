import { profileAPI } from "../../../api/profileAPI";
import { PhotosType, ProfileType, ResultCode } from "../../../types/types";
import { ActionsType, DefaultThunkType } from "../../store";

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
type ActionType = ActionsType<typeof profileActions>;
type ThunkType = DefaultThunkType<ActionType>;

export const profileReducer = (state = initialState, action: ActionType): InitialStateType => {

    switch (action.type) {
        case 'SET_PROFILE':
            return { ...state, profile: action.payload }
        case 'SET_STATUS':
            return { ...state, status: action.payload }
        case 'ADD_POST':
            const newPost = {
                id: state.posts.length + 1,
                message: action.payload,
                likes: 0
            }
            return { ...state, posts: [...state.posts, newPost] }
        case 'DELETE_POST':
            return {
                ...state,
                posts: state.posts.filter(item => item.id !== action.payload)
            }
        case 'SET_AVATAR':
            return { ...state, profile: { ...state.profile, photos: action.payload } as ProfileType }
        default:
            return state;
    }
}

export const profileActions = {
    addPost: (payload: string) => ({ type: 'ADD_POST', payload } as const ),
    deletePost: (payload: number) => ({ type: 'DELETE_POST', payload } as const),
    setProfile: (payload: ProfileType) => ({ type: 'SET_PROFILE', payload } as const),
    setStatus: (payload: string) => ({ type: 'SET_STATUS', payload } as const ),
    setAvatar: (payload: PhotosType) => ({ type: 'SET_AVATAR', payload } as const )
}

export const getProfile = (id: number): ThunkType => async (dispatch) => {
    const data = await profileAPI.getProfile(id);
    dispatch(profileActions.setProfile(data));
}

export const getStatus = (id: number): ThunkType => async (dispatch) => {
    const data = await profileAPI.getStatus(id);
    dispatch(profileActions.setStatus(data));
}

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    await profileAPI.updateStatus(status);
    dispatch(profileActions.setStatus(status));
}

export const updateAvatar = (photo: Blob): ThunkType => async (dispatch) => {
    const response = await profileAPI.updateAvatar(photo);
    dispatch(profileActions.setAvatar(response.data.photos));
}

export const editProfileInfo = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    const response = await profileAPI.updateProfile(profile);
    if (response.resultCode === ResultCode.Success) {
        dispatch(getProfile(getState().authReducer.authData.data.id));
    }
}
