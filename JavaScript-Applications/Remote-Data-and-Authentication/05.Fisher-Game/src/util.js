const userKey = 'userData';

export function setUserData(data) {
    const userData = {
        email: data.email,
        id: data._id,
        accessToken: data.accessToken
    };

    localStorage.setItem(userKey, JSON.stringify(userData));
}

export function getUserData() {
    const rawData = localStorage.getItem(userKey);
    return rawData ? JSON.parse(rawData) : null;
}

export function clearUserData() {
    localStorage.removeItem(userKey);
}

export function clearNotifications() {
    document.querySelectorAll('.notification').forEach(element => {
        element.textContent = '';
    });
}

export function showNotification(form, message) {
    const notification = form.querySelector('.notification');
    notification.textContent = message;
}

export function escapeHtml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}
