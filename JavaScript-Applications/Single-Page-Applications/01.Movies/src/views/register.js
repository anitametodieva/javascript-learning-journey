import { register } from '../api/users.js';
import { showSection } from '../utils/utils.js';

const section = document.getElementById('form-sign-up');
const form = section.querySelector('form');

let ctx = null;

export function setupRegister(context) {
    ctx = context;
    form.addEventListener('submit', onRegister);
}

export function showRegister() {
    showSection(section);
}

async function onRegister(e) {
    e.preventDefault();

    const formData = new FormData(form);
    const email = formData.get('email').trim();
    const password = formData.get('password').trim();
    const repeatPassword = formData.get('repeatPassword').trim();

    if (email === '' || password === '' || repeatPassword === '') {
        return alert('All fields are required!');
    }

    if (password.length < 6) {
        return alert('Password must be at least 6 characters!');
    }

    if (password !== repeatPassword) {
        return alert('Passwords do not match!');
    }

    try {
        await register(email, password);
        form.reset();
        ctx.updateNav();
        ctx.goTo('home');
    } catch (error) {
        alert(error.message);
    }
}
