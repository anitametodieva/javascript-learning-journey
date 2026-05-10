export function hideAllSections() {
    document.querySelectorAll('.view-section').forEach(section => {
        section.style.display = 'none';
    });
}

export function showSection(section) {
    hideAllSections();
    section.style.display = 'block';
}

export function getUserData() {
    return JSON.parse(localStorage.getItem('userData'));
}

export function setUserData(data) {
    localStorage.setItem('userData', JSON.stringify(data));
}

export function clearUserData() {
    localStorage.removeItem('userData');
}