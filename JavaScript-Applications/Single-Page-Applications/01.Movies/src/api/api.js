import { getUserData } from '../utils/utils.js';

const host = 'http://localhost:3030';

async function request(method, url, data) {
    const options = {
        method,
        headers: {}
    };

    if (data !== undefined) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(data);
    }

    const userData = getUserData();

    if (userData) {
        options.headers['X-Authorization'] = userData.accessToken;
    }

    const response = await fetch(host + url, options);

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
    }

    if (response.status === 204) {
        return response;
    }

    return response.json();
}

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const del = request.bind(null, 'DELETE');
