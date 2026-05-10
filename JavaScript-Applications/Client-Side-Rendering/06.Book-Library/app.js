import { html, render } from './node_modules/lit-html/lit-html.js';

const endpoints = {
    getById: (id) => `http://localhost:3030/jsonstore/collections/books/${id}`,
    books: 'http://localhost:3030/jsonstore/collections/books'
};

const tableRoot = document.getElementById('table');
const formRoot = document.getElementById('forms');

const tableTemp = (data) => html`
<button id="loadBooks" @click=${onLoadBooks}>LOAD ALL BOOKS</button>

<table>
    <thead>
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        ${data.map(book => tableRowTemp(book))}
    </tbody>
</table>
`;

const tableRowTemp = (book) => html`
<tr>
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>
        <button data-id=${book._id} @click=${onEdit}>Edit</button>
        <button data-id=${book._id} @click=${onDelete}>Delete</button>
    </td>
</tr>
`;

const createFormTemp = () => html`
<form id="add-form" @submit=${onCreate}>
    <h3>Add book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title...">
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author...">
    <input type="submit" value="Submit">
</form>
`;

const editFormTemp = (book) => html`
<form id="edit-form" @submit=${onSave}>
    <input type="hidden" name="id" .value=${book._id}>
    <h3>Edit book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title..." .value=${book.title}>
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author..." .value=${book.author}>
    <input type="submit" value="Save">
</form>
`;

render(tableTemp([]), tableRoot);
render(createFormTemp(), formRoot);

async function onLoadBooks() {
    const data = await requester('GET', endpoints.books);
    render(tableTemp(Object.values(data)), tableRoot);
}

async function onCreate(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const { title, author } = Object.fromEntries(formData);

    if (!title || !author) return;

    await requester('POST', endpoints.books, { title, author });

    e.target.reset();
    onLoadBooks();
}

async function onEdit(e) {
    const id = e.target.dataset.id;

    const book = await requester('GET', endpoints.getById(id));
    render(editFormTemp(book), formRoot);
}

function onSave(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const { id, title, author } = Object.fromEntries(formData);

    saveBook(id, { _id: id, title, author });

    e.target.reset();
}

async function saveBook(id, book) {
    await requester('PUT', endpoints.getById(id), book);

    onLoadBooks();
    render(createFormTemp(), formRoot);
}

async function onDelete(e) {
    const id = e.target.dataset.id;

    await requester('DELETE', endpoints.getById(id));

    onLoadBooks();
}

async function requester(method, url, body) {
    const options = {
        method
    };

    if (body) {
        options.headers = { 'Content-Type': 'application/json' };
        options.body = JSON.stringify(body);
    }

    const response = await fetch(url, options);

    if (response.status != 200) {
        throw new Error('Error');
    }

    return response.json();
}