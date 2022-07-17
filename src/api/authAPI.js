import { instance } from "./instance";

export const authAPI = {
    async getAuthData() {
        const { data } = await instance('auth/me');
        return data;
    },

    async login(email, password, rememberMe, captcha) {
        const { data } = await instance.post('auth/login', {email, password, rememberMe, captcha});
        return data;
    },

    async logout() {
        const { data } = await instance.delete('auth/login');
        return data;
    },

    async getCaptcha() {
        const { data } = await instance('security/get-captcha-url');
        return data;
    }
}