import {
    getCachedMovieById,
    deleteMovie,
    getMovieById,
    getMovieLikes,
    getOwnLike,
    likeMovie
} from '../api/data.js';
import { getUserData, showSection } from '../utils/utils.js';

const section = document.getElementById('movie-example');

let ctx = null;

export function setupDetails(context) {
    ctx = context;
}

export async function showDetails(id) {
    section.replaceChildren();
    showSection(section);

    const userData = getUserData();
    const cachedMovie = getCachedMovieById(id);
    let isOwner = false;
    let canLike = false;

    if (cachedMovie) {
        isOwner = userData && userData._id === cachedMovie._ownerId;
        section.innerHTML = createDetailsTemplate(cachedMovie, '', isOwner, false, false, false);
        attachActions(id);
    }

    const movie = cachedMovie || await getMovieById(id);
    isOwner = userData && userData._id === movie._ownerId;
    const likes = await getMovieLikes(id);
    section.innerHTML = createDetailsTemplate(movie, likes, isOwner, false, true, true);
    attachActions(id);

    if (userData) {
        if (!isOwner) {
            const ownLike = await getOwnLike(id, userData._id);
            canLike = ownLike === 0 || ownLike.length === 0;
            section.innerHTML = createDetailsTemplate(movie, likes, isOwner, canLike, true, true);
            attachActions(id);
        }
    }
}

function attachActions(id) {
    const deleteBtn = section.querySelector('.btn-delete');
    const editBtn = section.querySelector('.btn-edit');
    const likeBtn = section.querySelector('.btn-like');

    if (deleteBtn) {
        deleteBtn.addEventListener('click', async (e) => {
            e.preventDefault();
            await deleteMovie(id);
            ctx.goTo('home');
        });
    }

    if (editBtn) {
        editBtn.addEventListener('click', (e) => {
            e.preventDefault();
            ctx.goTo('edit', id);
        });
    }

    if (likeBtn) {
        likeBtn.addEventListener('click', async (e) => {
            e.preventDefault();
            await likeMovie(id);
            ctx.goTo('details', id);
        });
    }
}

function createDetailsTemplate(movie, likes, isOwner, canLike, showLikes, useContainerClass) {
    return `
        <div class="${useContainerClass ? 'container' : 'details-content'}">
            <div class="row bg-light text-dark">
                <h1>Movie title: ${movie.title}</h1>

                <div class="col-md-8">
                    <img class="img-thumbnail" src="${movie.img}" alt="Movie">
                </div>

                <div class="col-md-4 text-center">
                    <h3 class="my-3">Movie Description</h3>
                    <p>${movie.description}</p>

                    ${isOwner ? `
                        <a class="btn btn-danger btn-delete" href="#">Delete</a>
                        <a class="btn btn-warning btn-edit" href="#">Edit</a>
                    ` : ''}

                    ${canLike ? `
                        <a class="btn btn-primary btn-like" href="#">Like</a>
                    ` : ''}

                    ${showLikes ? `<span class="enrolled-span">Liked ${likes}</span>` : ''}
                </div>
            </div>
        </div>
    `;
}
