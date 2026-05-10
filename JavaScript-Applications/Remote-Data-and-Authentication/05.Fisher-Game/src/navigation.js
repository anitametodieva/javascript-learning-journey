import { getUserData } from './util.js';

export function setupNavigation(handlers) {
    const elements = {
        guest: document.querySelector('#guest'),
        user: document.querySelector('#user'),
        welcome: document.querySelector('.email span'),
        homeLink: document.querySelector('nav #home'),
        loginLink: document.querySelector('nav #login'),
        registerLink: document.querySelector('nav #register'),
        logoutLink: document.querySelector('nav #logout')
    };

    elements.homeLink.addEventListener('click', event => {
        event.preventDefault();
        handlers.onHome();
    });

    elements.loginLink.addEventListener('click', event => {
        event.preventDefault();
        handlers.onLogin();
    });

    elements.registerLink.addEventListener('click', event => {
        event.preventDefault();
        handlers.onRegister();
    });

    elements.logoutLink.addEventListener('click', event => {
        event.preventDefault();
        handlers.onLogout();
    });

    return {
        update
    };

    function update() {
        const user = getUserData();

        if (user) {
            elements.guest.style.display = 'none';
            elements.user.style.display = 'inline-block';
            elements.welcome.textContent = user.email;
        } else {
            elements.guest.style.display = 'inline-block';
            elements.user.style.display = 'none';
            elements.welcome.textContent = 'guest';
        }
    }
}
