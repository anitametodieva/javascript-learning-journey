import { userHelper } from "../utility/userHelper.js";
import { api } from "./requester.js";

const endpoint = {
    register: "http://localhost:3030/users/register",
    login: "http://localhost:3030/users/login",
    logout: "http://localhost:3030/users/logout",
}

async function login(data) {
    const userData = await api.post(endpoint.login, data);
    userHelper.setUserData(userData);
}

async function register(data) {
    const userData = await api.post(endpoint.register, data);
    userHelper.setUserData(userData);
}

async function logout() {
    const request = api.get(endpoint.logout);
    userHelper.clearUserData();
    await request;
}

export const userService = {
    login,
    register,
    logout
}
