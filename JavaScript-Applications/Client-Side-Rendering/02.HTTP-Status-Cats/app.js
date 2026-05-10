import { html, render } from "./node_modules/lit-html/lit-html.js";
import { cats } from './catSeeder.js';

const root = document.getElementById("allCats");

render(createTemp(), root);

function createTemp() {
    const catTemp = cats.map(cat => createCatTemp(cat));
    return html`
    <ul>
    ${catTemp}
    </ul>
    `;
}

function createCatTemp(cat) {
    return html`
    <li>
                <img src="./images/${cat.imageLocation}.jpg" width="250" height="250" alt="Card image cap">
                <div class="info">
                    <button class="showBtn" @click=${onToggleBtn}>Show status code</button>
                    <div class="status" style="display: none" id="100">
                        <h4>Status Code: ${cat.statusCode}</h4>
                        <p>${cat.statusMessage}</p>
                    </div>
                </div>
            </li>
    `;
}

function onToggleBtn(e) {
    const target = e.target;
    const div = target.nextElementSibling;

    if(div.style.display === "none") {
        target.textContent = "Hide status code";
        div.style.display = "block";
    } else {
        target.textContent = "Show status code";
        div.style.display = "none";
    }
}