import { instance } from "./instance";
import { PhotosType, ProfileType, ResultCode, UpdateType } from "../types/types";

type UpdateAvatarType = {
    data: PhotosType
    resultCode: ResultCode
    messages: Array<string>
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
        const { data } = await instance.put<UpdateType>('profile/status', { status });
        return data;
    },

    async updateAvatar(photo: any) {
        const formData = new FormData();
        formData.append('image', photo);
        const { data } = await instance.put<UpdateAvatarType>('profile/photo', formData);
        return data;
    },

    async updateProfile(profile: ProfileType) {
        const { data } = await instance.put<UpdateType>('profile', profile);
        return data;
    },
}
