import { showHomeView } from "../views/homeView.js";
import { showRegisterView } from "../views/registerView.js";
import { showLoginView } from "../views/loginView.js";
import { showDashboardView } from "../views/dashboardView.js";
import { showCreateView } from "../views/createView.js";
import { showDetailsView } from "../views/detailsView.js";
import { updateNav } from "./navigationUtils.js";
import { logout } from "../views/logoutView.js";

document.querySelector("nav").addEventListener("click", onNavigate);

const routs = {
    "/": showHomeView,
    "/home": showHomeView,
    "/login": showLoginView,
    "/register": showRegisterView,
    "/logout": logout,
    "/dashboard": showDashboardView,
    "/create": showCreateView,
    "/details": showDetailsView
}

function onNavigate(event) {
    event.preventDefault();
    let target = event.target;

    if(target.tagName === "IMG") {
        target = target.parentElement;
    }

    if(target.tagName !== "A") {
        return;
    }

    const url = new URL(target.href);
    const viewName = url.pathname;
   
    goTo(viewName);

}

const ctx = {
    goTo,
    updateNav
}

function goTo(viewName, ...params) {
    const handler = routs[viewName];

    handler(ctx, params)
}

export const routing = {
    goTo
}

