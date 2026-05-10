import { dataService } from "../api/dataService.js";
import { userUtils } from "../utils/userUtils.js";

const detailsView = document.querySelector("div[data-section='details']");
const main = document.querySelector("main");

let context = null;
export async function showDetailsView(ctx, params) {
    context = ctx;
    main.replaceChildren(detailsView);
    const id = params[0];
    const idea = await dataService.getIdeaById(id);

    if (!idea) {
        detailsView.innerHTML = `<p>Idea not found</p>`;
        return;
    }

    const user = userUtils.getUserData();
    const hasOwner = user && user.id === idea._ownerId;
    detailsView.innerHTML = createIdea(idea, hasOwner);

    if (hasOwner) {
        const deleteLink = detailsView.querySelector("a[data-id]");
        if (deleteLink) {
            deleteLink.addEventListener("click", onDelete);
        }
    }

}

async function onDelete(e) {
    e.preventDefault();
    const id = e.currentTarget.dataset.id;
    await dataService.delIdea(id);
    context.goTo("/dashboard");
}

function createIdea(idea, hasOwner) {
    return `
       <img class="det-img" src="${idea.img}" />
        <div class="desc">
            <h2 class="display-5">${idea.title}</h2>
            <p class="infoType">Description:</p>
            <p class="idea-description">${idea.description}</p>
        </div>
        <div class="text-center">
            ${hasOwner ? `<a class="btn detb" data-id="${idea._id}" href="javascript:void(0)">Delete</a>`:``}
        </div>
    `;
}