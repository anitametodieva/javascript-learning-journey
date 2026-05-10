import { userService } from "../api/userService.js";

const registerSection = document.querySelector("div[data-section='register']");
const main = document.querySelector("main");

let context = null;
export function showRegisterView(ctx) {
    context = ctx;
    main.replaceChildren(registerSection);

    document.querySelector("form").addEventListener("submit", onSubmit);
}

async function onSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const {email, password, repeatPassword} = Object.fromEntries(formData);

    if(!email || !password || password !== repeatPassword) {
        return alert("opppsss Error");
    }

    await userService.register({email, password});
    context.updateNav();
    context.goTo("/");
}