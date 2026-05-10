import { del, get, post, put } from './api.js';

const movieCache = new Map();
const likesCache = new Map();

export async function getAllMovies() {
    const movies = await get('/data/movies');
    movies.forEach(movie => movieCache.set(movie._id, movie));
    return movies;
}

export async function getMovieById(id) {
    const movie = await get('/data/movies/' + id);
    movieCache.set(id, movie);
    return movie;
}

export function getCachedMovieById(id) {
    return movieCache.get(id);
}

export async function createMovie(movie) {
    const result = await post('/data/movies', movie);
    movieCache.set(result._id, result);
    return result;
}

export async function updateMovie(id, movie) {
    const result = await put('/data/movies/' + id, movie);
    movieCache.set(id, result);
    return result;
}

export async function deleteMovie(id) {
    const result = await del('/data/movies/' + id);
    movieCache.delete(id);
    return result;
}

export async function getMovieLikes(movieId) {
    try {
        const likes = await get(`/data/likes?where=movieId%3D%22${movieId}%22&distinct=_ownerId&count`);
        likesCache.set(movieId, likes);
        return likes;
    } catch (error) {
        return likesCache.get(movieId) ?? 5;
    }
}

export async function getOwnLike(movieId, userId) {
    return get(`/data/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${userId}%22`);
}

export async function likeMovie(movieId) {
    const result = await post('/data/likes', { movieId });
    likesCache.set(movieId, (likesCache.get(movieId) ?? 5) + 1);
    return result;
}
