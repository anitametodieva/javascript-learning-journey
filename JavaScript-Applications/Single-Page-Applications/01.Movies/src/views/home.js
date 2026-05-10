import { getAllMovies } from '../api/data.js';
import { showSection, getUserData } from '../utils/utils.js';

const section = document.getElementById('home-page');
const moviesContainer = section.querySelector('#movies-list');
const addMovieBtn = section.querySelector('#add-movie-button');

let ctx = null;

export function setupHome(context) {
    ctx = context;

    if (addMovieBtn) {
        addMovieBtn.addEventListener('click', (e) => {
            e.preventDefault();
            ctx.goTo('addMovie');
        });
    }
}

export async function showHome() {
    showSection(section);
    await loadMovies();
}

async function loadMovies() {
    const movies = await getAllMovies();
    const userData = getUserData();

    if (addMovieBtn) {
        addMovieBtn.style.display = userData ? 'block' : 'none';
    }

    if (movies.length === 0) {
        moviesContainer.innerHTML = '<p class="no-movies">No movies added yet.</p>';
        return;
    }

    moviesContainer.innerHTML = movies.map(createMovieCard).join('');
    Array.from(moviesContainer.querySelectorAll('.details-btn')).forEach(btn => {
        btn.addEventListener('click', onDetails);
    });
}

function onDetails(e) {
    e.preventDefault();
    const id = e.target.dataset.id;
    ctx.goTo('details', id);
}

function createMovieCard(movie) {
    return `
        <li class="card mb-4">
            <img class="card-img-top" src="${movie.img}" alt="Card image cap" width="400">
            <div class="card-body">
                <h4 class="card-title">${movie.title}</h4>
            </div>
            <div class="card-footer">
                <button type="button" class="btn btn-info details-btn" data-id="${movie._id}">Details</button>
            </div>
        </li>
    `;
}
