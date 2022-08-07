import { instance } from "./instance";
import { APIResponseType } from "../types/types";

type AuthData = {
    id: number
    email: string
    login: string
}

type LoginData = {
    userId: number
}

type GetCaptchaType = {
    url: string
}

export const authAPI = {
    async getAuthData() {
        const { data } = await instance.get<APIResponseType<AuthData>>('auth/me');
        return data;
    },

    async login(email: string, password: string, rememberMe: boolean, captcha: null | string) {
        const { data } = await instance.post<APIResponseType<LoginData>>('auth/login', {email, password, rememberMe, captcha});
        return data;
    },

    async logout() {
        const { data } = await instance.delete<APIResponseType>('auth/login');
        return data;
    },

    async getCaptcha() {
        const { data } = await instance.get<GetCaptchaType>('security/get-captcha-url');
        return data;
    }
}
