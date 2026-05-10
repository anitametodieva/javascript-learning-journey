import { api } from "./requester.js"

const endpoint = {
    getAll: "http://localhost:3030/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc",
    create: "http://localhost:3030/data/ideas",
    getById: (id) => `http://localhost:3030/data/ideas/${id}`
}

async function  getAllIdea() {
   return await api.get(endpoint.getAll);
}

async function getIdeaById(id) {
    return await api.get(endpoint.getById(id));
}

async function create(data) {
    return await api.post(endpoint.create, data);
}

async function updateIdea(id, data) {
    return await api.update(endpoint.getById(id), data);
}

async function  delIdea(id) {
    return await api.del(endpoint.getById(id));
}

export const dataService = {
    getAllIdea,
    create,
    updateIdea,
    delIdea,
    getIdeaById
}