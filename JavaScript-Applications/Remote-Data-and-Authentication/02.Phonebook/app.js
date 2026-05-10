function attachEvents() {
    const URL = `${location.origin}/jsonstore/phonebook`;

    const ul = document.getElementById('phonebook');
    const personInput = document.getElementById('person');
    const phoneInput = document.getElementById('phone');

    document.getElementById('btnLoad').addEventListener('click', () => {
        if (ul.children.length === 0) {
            onLoad();
        }
    });
    document.getElementById('btnCreate').addEventListener('click', onCreate);

    function request(method, url, body) {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url, false);

        if (body) {
            xhr.setRequestHeader('Content-Type', 'application/json');
        }

        xhr.send(body ? JSON.stringify(body) : null);

        if (!xhr.responseText) {
            return null;
        }

        try {
            return JSON.parse(xhr.responseText);
        } catch (error) {
            return null;
        }
    }

    function onLoad() {
        const data = request('GET', URL);

        if (!data) {
            return;
        }

        const entries = Array.isArray(data)
            ? data
            : Object.values(data);

        ul.innerHTML = '';

        entries.forEach((entry) => {
            const li = document.createElement('li');
            li.textContent = `${entry.person}: ${entry.phone}`;

            const btn = document.createElement('button');
            btn.textContent = 'Delete';

            btn.addEventListener('click', async () => {
                await fetch(`${URL}/${entry._id}`, { method: 'DELETE' });
                onLoad();
            });

            li.appendChild(btn);
            ul.appendChild(li);
        });
    }

    async function onCreate() {
        const person = personInput.value;
        const phone = phoneInput.value;

        if (!person || !phone) return;

        await fetch(URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ person, phone })
        });

        personInput.value = '';
        phoneInput.value = '';

        onLoad();
    }

    onLoad();
}

attachEvents();
