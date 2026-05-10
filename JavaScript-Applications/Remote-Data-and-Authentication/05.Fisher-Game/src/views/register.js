import { api } from '../api.js';
import { setUserData, showNotification, clearNotifications } from '../util.js';

export function setupRegisterView({ section, onNavigateHome }) {
    const form = section.querySelector('form#register');
    form.addEventListener('submit', onRegister);

    return {
        show() {
            clearNotifications();
            form.reset();
            return section;
        }
    };

    async function onRegister(event) {
        event.preventDefault();

        const formData = new FormData(form);
        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        const rePass = formData.get('rePass').trim();

        if (email === '' || password === '' || rePass === '') {
            return showNotification(form, 'All fields are required!');
        }

        if (password !== rePass) {
            return showNotification(form, 'Passwords do not match!');
        }

        try {
            const result = await api.register(email, password);
            setUserData(result);
            form.reset();
            onNavigateHome();
        } catch (error) {
            showNotification(form, error.message);
        }
    }
}
