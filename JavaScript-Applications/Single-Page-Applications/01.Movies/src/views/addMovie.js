import { createMovie } from '../api/data.js';
import { showSection } from '../utils/utils.js';

const section = document.getElementById('add-movie');
const form = section.querySelector('form');

let ctx = null;

export function setupAddMovie(context) {
    ctx = context;
    form.addEventListener('submit', onAddMovie);
}

export function showAddMovie() {
    showSection(section);
}

async function onAddMovie(e) {
    e.preventDefault();

    const formData = new FormData(form);
    const title = formData.get('title').trim();
    const description = formData.get('description').trim();
    const img = formData.get('img').trim();

    if (title === '' || description === '' || img === '') {
        return alert('All fields are required!');
    }

    try {
        await createMovie({ title, description, img });
        form.reset();
        ctx.goTo('home');
    } catch (error) {
        alert(error.message);
    }
}
