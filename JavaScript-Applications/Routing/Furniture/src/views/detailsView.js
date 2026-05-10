import { html, nothing, render } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { resolveImagePath } from '../utility/imageHelper.js';
import { userHelper } from '../utility/userHelper.js';

const root = document.querySelector("div.container");

const temp = (item, hasOwner) => html`
 <div class="row space-top">
        <div class="col-md-12">
            <h1>Furniture Details</h1>
        </div>
    </div>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="card text-white bg-primary">
                <div class="card-body">
                    <img src="${resolveImagePath(item.img)}" />
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <p>Make: <span>${item.make}</span></p>
            <p>Model: <span>${item.model}</span></p>
            <p>Year: <span>${item.year}</span></p>
            <p>Description: <span>${item.description}</span></p>
            <p>Price: <span>${item.price}</span></p>
            <p>Material: <span>${item.material}</span></p>
            <div>
            ${hasOwner ? 
                html`
                     <a href="/edit/${item._id}" class="btn btn-info">Edit</a>
                     <a @click=${onDelete} href="" class="btn btn-red">Delete</a>`
                     : nothing
            }
                
            </div>
        </div>
    </div>
`;

let context = null;
export async function showDetailsView(ctx) {
    const id = ctx.params.id;
    context = ctx;
    let data = {};
    try {
        data = await dataService.getById(id);
    } catch (err) {
        alert('Грешка при зареждане на детайлите!');
    }
    const hasOwner = userHelper.hasOwner(data._ownerId);
    if (root) {
        render(temp(data, hasOwner), root);
    }
}

async function onDelete(e) {
    e.preventDefault();
    const id = context.params.id;
    const isConfirm = confirm("Delete item?");
    if(!isConfirm) {
        return;
    }
    try {
        await dataService.del(id);
        context.goTo("/");
    } catch (err) {
        alert('Грешка при изтриване!');
    }
}
