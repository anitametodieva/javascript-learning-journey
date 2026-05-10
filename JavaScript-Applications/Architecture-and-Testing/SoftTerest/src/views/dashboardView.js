import { dataService } from "../api/dataService.js";

const dashboardView = document.querySelector("div[data-section='dashboard']");
const main = document.querySelector("main");

let context = null;
export function showDashboardView(ctx) {
    main.replaceChildren(dashboardView);
    loadAllIdea();
    context = ctx;
}

async function loadAllIdea() {
   const data =  await dataService.getAllIdea();
   dashboardView.innerHTML = data.length > 0
    ? data.map(createIdea).join("")
    : getNoDataText();
   dashboardView.querySelectorAll("a").forEach(a => a.addEventListener("click", onDetails));
}

function onDetails(event) {
    event.preventDefault();
    const id = event.target.dataset.id;
    context.goTo("/details", id);
}

function createIdea(idea) {
    return `
     <div class="card overflow-hidden current-card details" style="width: 20rem; height: 18rem;">
            <div class="card-body">
                <p class="card-text">${idea.title}</p>
            </div>
            <img class="card-image" src=${idea.img} alt="Card image cap">
            <a class="btn" data-id=${idea._id} href="">Details</a>
        </div>
    `;
}
 
function getNoDataText() {
    return "<h1>No ideas yet! Be the first one :)</h1>";
}