import { logout } from './api/users.js';
import { getUserData } from './utils/utils.js';

import { setupHome, showHome } from './views/home.js';
import { setupLogin, showLogin } from './views/login.js';
import { setupRegister, showRegister } from './views/register.js';
import { setupAddMovie, showAddMovie } from './views/addMovie.js';
import { setupDetails, showDetails } from './views/details.js';
import { setupEditMovie, showEditMovie } from './views/editMovie.js';

const container = document.getElementById("container");
const welcomeMessage = document.getElementById("welcome-msg");
const userElement = Array.from(container.querySelectorAll(".user"));
const guestElement = Array.from(container.querySelectorAll(".guest"));

container.classList.remove('container');

const routes = {
    home: showHome,
    login: showLogin,
    register: showRegister,
    addMovie: showAddMovie,
    details: showDetails,
    edit: showEditMovie
};

const context = {
    goTo,
    updateNav
};

setupHome(context);
setupLogin(context);
setupRegister(context);
setupAddMovie(context);
setupDetails(context);
setupEditMovie(context);

document.getElementById('homeLink').addEventListener('click', (e) => {
    e.preventDefault();
    goTo('home');
});

document.getElementById('loginLink').addEventListener('click', (e) => {
    e.preventDefault();
    goTo('login');
});

document.getElementById('registerLink').addEventListener('click', (e) => {
    e.preventDefault();
    goTo('register');
});

document.getElementById('logoutBtn').addEventListener('click', async (e) => {
    e.preventDefault();
    await logout();
    updateNav();
    goTo('home');
});

function goTo(viewName, ...params) {
    const view = routes[viewName];
    view(...params);
}

function updateNav() {
    const userData = getUserData();

    if (userData) {
        guestElement.forEach(element => element.style.display = 'none');
        userElement.forEach(element => element.style.display = 'block');
        welcomeMessage.textContent = `Welcome, ${userData.email}`;
    } else {
        guestElement.forEach(element => element.style.display = 'block');
        userElement.forEach(element => element.style.display = 'none');
        welcomeMessage.textContent = 'Welcome, guest';
    }
}

updateNav();
goTo('home');
