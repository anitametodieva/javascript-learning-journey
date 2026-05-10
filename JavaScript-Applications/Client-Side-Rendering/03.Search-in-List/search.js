import { html, render } from './node_modules/lit-html/lit-html.js';
import { towns } from './towns.js';

const root = document.getElementById('towns');
const resultContainer = document.getElementById('result');
const input = document.getElementById('searchText');
const button = document.querySelector('button');

button.addEventListener('click', onSearch);

render(html`${towns.map(town => html`<li>${town}</li>`)}`, root);

function onSearch() {
    const searchText = input.value;
    let matches = 0;

    const list = towns.map(town => {
        const isMatch = town.includes(searchText);

        if (searchText !== '' && isMatch) {
            matches++;
            return html`<li class="active">${town}</li>`;
        }

        return html`<li>${town}</li>`;
    });

    render(list, root);

    render(
        html`<p>${matches} matches found</p>`,
        resultContainer
    );
}