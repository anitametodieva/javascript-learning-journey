import page from "./node_modules/page/page.mjs";
import { logout } from "./src/utility/logout.js";
import { updateNav } from "./src/utility/navigationRender.js";
import { showCreateView } from "./src/views/createView.js";
import { showDashboardView } from "./src/views/dashboardView.js";
import { showDetailsView } from "./src/views/detailsView.js";
import { showLoginView } from "./src/views/loginView.js";
import { showMyFurnitureView } from "./src/views/myFurnitureView.js";
import { showRegisterView } from "./src/views/registerView.js";
import { showEditView } from "./src/views/showEditView.js";

page(decorateContext)
page("/", showDashboardView)
page("/dashboard", showDashboardView)
page("/create", showCreateView)
page("/my-furniture", showMyFurnitureView)
page("/login", showLoginView)
page("/register", showRegisterView)
page("/logout", logout);
page("/details/:id", showDetailsView)
page("/edit/:id", showEditView)

page.start();


updateNav();

function decorateContext(ctx, next) {
    ctx.goTo = goTo;
    ctx.updateNav = updateNav;
    updateNav();
    next();
}

function goTo(path) {
    page.redirect(path)
}
