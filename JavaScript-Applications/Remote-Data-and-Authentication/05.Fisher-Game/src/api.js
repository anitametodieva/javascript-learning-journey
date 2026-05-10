import { getUserData } from './util.js';

const host = '';

export async function request(url, options = {}) {
    const user = getUserData();
    const headers = {};

    if (options.body) {
        headers['Content-Type'] = 'application/json';
    }

    if (user) {
        headers['X-Authorization'] = user.accessToken;
    }

    const response = await fetch(host + url, {
        method: options.method || 'GET',
        headers,
        body: options.body ? JSON.stringify(options.body) : undefined
    });

    if (!response.ok) {
        let message = 'Request failed';

        try {
            const result = await response.json();
            message = result.message || message;
        } catch (_) {
            message = response.statusText || message;
        }

        throw new Error(message);
    }

    if (response.status === 204) {
        return null;
    }

    return response.json();
}

export const api = {
    login(email, password) {
        return request('/users/login', {
            method: 'POST',
            body: { email, password }
        });
    },
    register(email, password) {
        return request('/users/register', {
            method: 'POST',
            body: { email, password }
        });
    },
    logout() {
        return request('/users/logout', { method: 'GET' });
    },
    getCatches() {
        return request('/data/catches');
    },
    addCatch(data) {
        return request('/data/catches', {
            method: 'POST',
            body: data
        });
    },
    updateCatch(id, data) {
        return request(`/data/catches/${id}`, {
            method: 'PUT',
            body: data
        });
    },
    deleteCatch(id) {
        return request(`/data/catches/${id}`, {
            method: 'DELETE'
        });
    }
};
