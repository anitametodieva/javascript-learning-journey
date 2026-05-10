import { api } from '../api.js';
import { getUserData, escapeHtml, clearNotifications } from '../util.js';

export function setupHomeView({ section }) {
    const catchesContainer = section.querySelector('#catches');
    const addForm = section.querySelector('#addForm');
    const addButton = section.querySelector('.add');
    const loadButton = section.querySelector('.load');
    let catchesCache = [];
    let catchesPromise = null;

    catchesContainer.replaceChildren();
    addForm.addEventListener('submit', onAddCatch);
    loadButton.addEventListener('click', onLoadCatches);
    catchesContainer.addEventListener('click', onCatchAction);

    return {
        show() {
            clearNotifications();
            updateControls();
            preloadCatches();
            return section;
        },
        clearCatches() {
            catchesContainer.replaceChildren();
        },
        updateControls
    };

    function updateControls() {
        addButton.disabled = !getUserData();
    }

    async function onLoadCatches() {
        if (catchesCache.length > 0) {
            renderCatches(catchesCache);
        }

        try {
            const catches = await preloadCatches(true);
            renderCatches(catches);
        } catch (error) {
            alert(error.message);
        }
    }

    async function onAddCatch(event) {
        event.preventDefault();

        if (!getUserData()) {
            return;
        }

        const data = getFormData(new FormData(addForm));

        if (hasEmptyFields(data)) {
            return alert('All fields are required!');
        }

        try {
            await api.addCatch(data);
            addForm.reset();
            catchesPromise = null;
            await onLoadCatches();
        } catch (error) {
            alert(error.message);
        }
    }

    async function onCatchAction(event) {
        const button = event.target;

        if (button.tagName !== 'BUTTON') {
            return;
        }

        const catchElement = button.closest('.catch');
        const catchId = button.dataset.id;

        if (button.classList.contains('update')) {
            await onUpdateCatch(catchId, catchElement);
        } else if (button.classList.contains('delete')) {
            await onDeleteCatch(catchId);
        }
    }

    async function onUpdateCatch(id, catchElement) {
        const data = readCatchData(catchElement);

        if (hasEmptyFields(data)) {
            return alert('All fields are required!');
        }

        try {
            await api.updateCatch(id, data);
            catchesPromise = null;
        } catch (error) {
            alert(error.message);
        }
    }

    async function onDeleteCatch(id) {
        try {
            await api.deleteCatch(id);
            catchesPromise = null;
            await onLoadCatches();
        } catch (error) {
            alert(error.message);
        }
    }

    function renderCatches(data) {
        catchesContainer.replaceChildren(...data.map(createCatchElement));
    }

    function createCatchElement(item) {
        const user = getUserData();
        const isOwner = user && user.id === item._ownerId;
        const element = document.createElement('div');
        element.className = 'catch';

        element.innerHTML = `
            <label>Angler</label>
            <input type="text" class="angler" value="${escapeHtml(item.angler)}" ${isOwner ? '' : 'disabled'}>
            <label>Weight</label>
            <input type="text" class="weight" value="${escapeHtml(item.weight)}" ${isOwner ? '' : 'disabled'}>
            <label>Species</label>
            <input type="text" class="species" value="${escapeHtml(item.species)}" ${isOwner ? '' : 'disabled'}>
            <label>Location</label>
            <input type="text" class="location" value="${escapeHtml(item.location)}" ${isOwner ? '' : 'disabled'}>
            <label>Bait</label>
            <input type="text" class="bait" value="${escapeHtml(item.bait)}" ${isOwner ? '' : 'disabled'}>
            <label>Capture Time</label>
            <input type="number" class="captureTime" value="${escapeHtml(item.captureTime)}" ${isOwner ? '' : 'disabled'}>
            <button class="update" data-id="${item._id}" ${isOwner ? '' : 'disabled'}>Update</button>
            <button class="delete" data-id="${item._id}" ${isOwner ? '' : 'disabled'}>Delete</button>
        `;

        return element;
    }

    function preloadCatches(force = false) {
        if (!catchesPromise || force) {
            catchesPromise = api.getCatches()
                .then(data => {
                    catchesCache = data;
                    return data;
                })
                .catch(error => {
                    catchesPromise = null;
                    throw error;
                });
        }

        return catchesPromise;
    }
}

function getFormData(formData) {
    return {
        angler: formData.get('angler').trim(),
        weight: formData.get('weight').trim(),
        species: formData.get('species').trim(),
        location: formData.get('location').trim(),
        bait: formData.get('bait').trim(),
        captureTime: formData.get('captureTime').trim()
    };
}

function readCatchData(element) {
    return {
        angler: element.querySelector('.angler').value.trim(),
        weight: element.querySelector('.weight').value.trim(),
        species: element.querySelector('.species').value.trim(),
        location: element.querySelector('.location').value.trim(),
        bait: element.querySelector('.bait').value.trim(),
        captureTime: element.querySelector('.captureTime').value.trim()
    };
}

function hasEmptyFields(data) {
    return Object.values(data).some(value => value === '');
}
