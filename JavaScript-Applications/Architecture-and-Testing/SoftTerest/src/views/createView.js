import { dataService } from "../api/dataService.js";

const createSection = document.querySelector("div[data-section='create']");
const main = document.querySelector("main");

let context = null;
export function showCreateView(ctx) {
    context = ctx;
    main.replaceChildren(createSection);
    document.querySelector("form").addEventListener("submit", onSubmit);
}

async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const {title, description, imageURL} = Object.fromEntries(formData);

    if(!title || !description || !imageURL) {
        return alert("Ooppss");
    }

    await dataService.create({title, description, img: imageURL});
    context.goTo("/dashboard");
}