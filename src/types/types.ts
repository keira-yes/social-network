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
    userId?: number
    lookingForAJob?: boolean
    lookingForAJobDescription?: string
    fullName?: string
    contacts?: SocialMediaType
    photos?: PhotosType
}