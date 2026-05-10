import{ html, render } from "./node_modules/lit-html/lit-html.js";
document.querySelector("form").addEventListener("submit", onSubmit);
const root = document.getElementById("root");

function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = formData.get("towns");
    const towns = data.split(", ");
    const temp = createTemp(towns);
    render(temp, root);
}

function createTemp(towns) {
    return html `
    <ul>
    ${towns.map(town => html`<li>${town}</li>`)}
    </ul>
    `
}