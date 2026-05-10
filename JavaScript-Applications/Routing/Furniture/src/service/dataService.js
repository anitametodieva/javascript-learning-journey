import { api } from "./requester.js"

const endpoint = {
    catalog: "http://localhost:3030/data/catalog",
    catalogById: (id)=> `http://localhost:3030/data/catalog/${id}`,
    myFurniture: (userId)=> `http://localhost:3030/data/catalog?where=_ownerId%3D%22${userId}%22`
}

async function create(data) {
    await api.post(endpoint.catalog, data);
}

async function  getAll() {
    return await api.get(endpoint.catalog);
}

async function getById(id) {
    return await api.get(endpoint.catalogById(id));
}

async function update(id, data) {
    return await api.update(endpoint.catalogById(id), data);
}

async function del(id) {
    return await api.del(endpoint.catalogById(id));   
}

async function getMyFurniture(userId) {
    return await api.get(endpoint.myFurniture(userId));
}

export const dataService = {
    create,
    getAll,
    getById,
    update,
    del,
    getMyFurniture
}