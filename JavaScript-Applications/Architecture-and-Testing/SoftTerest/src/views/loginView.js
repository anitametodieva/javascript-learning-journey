import { userService } from "../api/userService.js";

const loginSection = document.querySelector("div[data-section='login']");
const main = document.querySelector("main");

let context = null;
export function showLoginView(ctx) {
    context = ctx;
    main.replaceChildren(loginSection);

    document.querySelector("form").addEventListener("submit", onSubmit);
}

async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const { email, password } = Object.fromEntries(formData);

    if(!password || !email) {
        return alert("Oooopppss Error");
    }

    await userService.login({email, password});
    context.updateNav();
    context.goTo("/");
}