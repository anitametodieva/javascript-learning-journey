import { api } from './api.js';
import { clearUserData } from './util.js';
import { setupNavigation } from './navigation.js';
import { setupHomeView } from './views/home.js';
import { setupLoginView } from './views/login.js';
import { setupRegisterView } from './views/register.js';

const main = document.querySelector('main');
const views = document.querySelector('#views');

const homeView = setupHomeView({
    section: document.querySelector('#home-view')
});

const loginView = setupLoginView({
    section: document.querySelector('#login-view'),
    onNavigateHome: showHome
});

const registerView = setupRegisterView({
    section: document.querySelector('#register-view'),
    onNavigateHome: showHome
});

const navigation = setupNavigation({
    onHome: showHome,
    onLogin: showLogin,
    onRegister: showRegister,
    onLogout: onLogout
});

views.remove();
updateNavigation();
showHome();

function showView(section) {
    main.replaceChildren(section);
}

function showHome() {
    updateNavigation();
    showView(homeView.show());
}

function showLogin() {
    showView(loginView.show());
}

function showRegister() {
    showView(registerView.show());
}

function updateNavigation() {
    navigation.update();
    homeView.updateControls();
}

async function onLogout() {
    try {
        await api.logout();
    } catch (_) {
    }

    clearUserData();
    homeView.clearCatches();
    showHome();
}
