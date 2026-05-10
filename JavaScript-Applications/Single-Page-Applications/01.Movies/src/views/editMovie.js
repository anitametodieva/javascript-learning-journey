import { getCachedMovieById, getMovieById, updateMovie } from '../api/data.js';
import { showSection } from '../utils/utils.js';

const section = document.getElementById('edit-movie');
const form = section.querySelector('form');

let ctx = null;
let currentId = null;

export function setupEditMovie(context) {
    ctx = context;
    form.addEventListener('submit', onEditMovie);
}

export async function showEditMovie(id) {
    currentId = id;
    const cachedMovie = getCachedMovieById(id);

    if (cachedMovie) {
        populateForm(cachedMovie);
        showSection(section);
        return;
    }

    const movie = await getMovieById(id);
    populateForm(movie);
    showSection(section);
}

function populateForm(movie) {
    form.querySelector('[name="title"]').value = movie.title;
    form.querySelector('[name="description"]').value = movie.description;
    form.querySelector('[name="img"]').value = movie.img;
}

async function onEditMovie(e) {
    e.preventDefault();

    const formData = new FormData(form);
    const title = formData.get('title').trim();
    const description = formData.get('description').trim();
    const img = formData.get('img').trim();

    if (title === '' || description === '' || img === '') {
        return alert('All fields are required!');
    }

    try {
        await updateMovie(currentId, { title, description, img });
        ctx.goTo('details', currentId);
    } catch (error) {
        alert(error.message);
    }
}
