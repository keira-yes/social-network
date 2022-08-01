import { instance } from "./instance";
import { ResultCode, UpdateType } from "../types/types";

type AuthData = {
    data: {
        id: number
        email: string
        login: string
    }
    resultCode: ResultCode
    messages: Array<string>
}

type LoginData = {
    data: {
        userId: number
    }
    resultCode: ResultCode
    messages: Array<string>
}

export const authAPI = {
    async getAuthData() {
        const { data } = await instance.get<AuthData>('auth/me');
        return data;
    },

    async login(email: string, password: string, rememberMe: boolean, captcha: null | string) {
        const { data } = await instance.post<LoginData>('auth/login', {email, password, rememberMe, captcha});
        return data;
    },

    async logout() {
        const { data } = await instance.delete<UpdateType>('auth/login');
        return data;
    },

    async getCaptcha() {
        const { data } = await instance.get('security/get-captcha-url');
        return data;
    }
}
