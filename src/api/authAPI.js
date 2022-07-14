import { instance } from "./instance";

export const authAPI = {
    async getAuthData() {
        const { data } = await instance('auth/me');
        return data;
    },

    async login(email, password, rememberMe) {
        const { data } = await instance.post('auth/login', {email, password, rememberMe});
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