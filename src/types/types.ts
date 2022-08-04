export type PhotosType = {
    small: string | null
    large: string | null
}

export type SocialMediaType = {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}

export type ProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: SocialMediaType
    photos: PhotosType
}

export type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
}

export type UpdateType = {
    resultCode: ResultCode
    messages: Array<string>,
    data: object
}

export type LoginDataType = {
    login: string
    password: string
    rememberMe: boolean
    captcha: string | null
}

export enum ResultCode {
    Success = 0,
    Error = 1,
    CaptchaIsRequired = 10
}
