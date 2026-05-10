const homeView = document.querySelector("div[data-section='home']");
const main = document.querySelector("main");


export function showHomeView(ctx){
    homeView.querySelector("a").addEventListener("click", (e) => {
        e.preventDefault()
        ctx.goTo("/dashboard")
    })
    main.replaceChildren(homeView);
}