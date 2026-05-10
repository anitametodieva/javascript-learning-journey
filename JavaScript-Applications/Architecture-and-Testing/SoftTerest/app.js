import { updateNav } from "./src/utils/navigationUtils.js";
import { routing } from "./src/utils/routing.js";
Array.from(document.querySelectorAll("div[data-section]")).forEach(section => section.remove());

routing.goTo("/");
updateNav();