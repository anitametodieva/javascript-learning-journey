import { get, post } from './api.js';
import { clearUserData, setUserData } from '../utils/utils.js';

export async function login(email, password) {
    const result = await post('/users/login', { email, password });

    setUserData({
        email: result.email,
        _id: result._id,
        accessToken: result.accessToken
    });

    return result;
}

export async function register(email, password) {
    const result = await post('/users/register', { email, password });

    setUserData({
        email: result.email,
        _id: result._id,
        accessToken: result.accessToken
    });

    return result;
}

export async function logout() {
    try {
        await get('/users/logout');
    } finally {
        clearUserData();
    }
}
