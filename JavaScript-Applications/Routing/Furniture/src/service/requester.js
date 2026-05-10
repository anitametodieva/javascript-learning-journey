import { userHelper } from "../utility/userHelper.js";

async function requester(method, url, data) {
    const options = {
        method: method,
        headers: {}
    }

    if(data) {
        options.headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(data);
    }

    if(userHelper.hasUser()) {
        options.headers["X-Authorization"] = userHelper.getAccessToken();
    }

    const response = await fetch(url, options);

    if(!response.ok) {
        const err = await response.json();
        throw new Error(err.message);
    }

    if(response.status === 204) {
        return response;
    }

    return await response.json();
}


async function get(url) {
    return await requester("GET", url);
}

async function post(url, data) {
    return await requester("POST", url, data);
}

async function update(url, data) {
    return await requester("PUT", url, data);
}

async function del(url) {
    return await requester("DELETE", url);
}

export const api = {
    get, 
    post,
    update, 
    del
}
