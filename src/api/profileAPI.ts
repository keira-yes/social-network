import { instance } from "./instance";
import { PhotosType, ProfileType, APIResponseType } from "../types/types";

type UpdateAvatarResponseType = {
    photos: PhotosType
}

export const profileAPI = {
    async getProfile(id: number) {
        const { data } = await instance.get<ProfileType>(`profile/${id}`);
        return data;
    },

    async getStatus(id: number) {
        const { data } = await instance.get<string>(`profile/status/${id}`);
        return data;
    },

    async updateStatus(status: string) {
        const { data } = await instance.put<APIResponseType>('profile/status', { status });
        return data;
    },

    async updateAvatar(photo: Blob) {
        const formData = new FormData();
        formData.append('image', photo);
        const { data } = await instance.put<APIResponseType<UpdateAvatarResponseType>>('profile/photo', formData);
        return data;
    },

    async updateProfile(profile: ProfileType) {
        const { data } = await instance.put<APIResponseType>('profile', profile);
        return data;
    },
}
