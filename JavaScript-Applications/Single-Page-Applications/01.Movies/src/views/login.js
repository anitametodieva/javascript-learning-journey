import { login } from '../api/users.js';
import { showSection } from '../utils/utils.js';

const section = document.getElementById('form-login');
const form = section.querySelector('form');

let ctx = null;

export function setupLogin(context) {
    ctx = context;
    form.addEventListener('submit', onLogin);
}

export function showLogin() {
    showSection(section);
}

async function onLogin(e) {
    e.preventDefault();

    const formData = new FormData(form);
    const email = formData.get('email').trim();
    const password = formData.get('password').trim();

    if (email === '' || password === '') {
        return alert('All fields are required!');
    }

    try {
        await login(email, password);
        form.reset();
        ctx.updateNav();
        ctx.goTo('home');
    } catch (error) {
        alert(error.message);
    }
}
