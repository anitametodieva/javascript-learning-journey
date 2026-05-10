import { api } from '../api.js';
import { setUserData, showNotification, clearNotifications } from '../util.js';

export function setupLoginView({ section, onNavigateHome }) {
    const form = section.querySelector('form#login');
    form.addEventListener('submit', onLogin);

    return {
        show() {
            clearNotifications();
            form.reset();
            return section;
        }
    };

    async function onLogin(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const email = formData.get('email').trim();
        const password = formData.get('password').trim();

        if (email === '' || password === '') {
            return showNotification(form, 'All fields are required!');
        }

        try {
            const result = await api.login(email, password);
            setUserData(result);
            form.reset();
            onNavigateHome();
        } catch (error) {
            showNotification(form, error.message);
        }
    }
}
