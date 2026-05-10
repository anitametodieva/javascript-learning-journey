function solve() {
    const url = 'http://localhost:3030/jsonstore/collections/books';

    const loadBtn = document.getElementById('loadBooks');
    const tbody = document.querySelector('tbody');
    const form = document.querySelector('form');
    const submitBtn = form.querySelector('button');
    const titleInput = form.querySelector('input[name="title"]');
    const authorInput = form.querySelector('input[name="author"]');

    let editId = null;

    loadBtn.addEventListener('click', loadBooks);
    submitBtn.addEventListener('click', onSubmit);

    async function loadBooks() {
        tbody.innerHTML = '';

        const res = await fetch(url);
        const data = await res.json();

        Object.entries(data).forEach(([id, book]) => {
            const tr = document.createElement('tr');

            tr.innerHTML = `
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>
                    <button>Edit</button>
                    <button>Delete</button>
                </td>
            `;

            const [editBtn, deleteBtn] = tr.querySelectorAll('button');

            // EDIT
            editBtn.addEventListener('click', () => {
                editId = id;
                titleInput.value = book.title;
                authorInput.value = book.author;

                form.querySelector('h3').textContent = 'Edit FORM';
                submitBtn.textContent = 'Save';
            });

            // DELETE
            deleteBtn.addEventListener('click', async () => {
                await fetch(`${url}/${id}`, {
                    method: 'DELETE'
                });

                loadBooks();
            });

            tbody.appendChild(tr);
        });
    }

    async function onSubmit(e) {
        e.preventDefault();

        const title = titleInput.value;
        const author = authorInput.value;

        if (!title || !author) {
            return;
        }

        if (editId === null) {
            // CREATE
            await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title, author })
            });
        } else {
            // UPDATE
            await fetch(`${url}/${editId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title, author })
            });

            editId = null;
            form.querySelector('h3').textContent = 'FORM';
            submitBtn.textContent = 'Submit';
        }

        form.reset();
        loadBooks();
    }
}

solve();