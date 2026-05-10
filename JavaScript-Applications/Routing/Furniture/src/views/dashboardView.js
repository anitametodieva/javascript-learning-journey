import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { dataService } from '../service/dataService.js';
import { resolveImagePath } from '../utility/imageHelper.js';

const root = document.querySelector("div.container");

const cartTemp = (item)=> html`
 <div class="row space-top">
            <div class="col-md-4">
                <div class="card text-white bg-primary">
                    <div class="card-body">
                            <img src=${resolveImagePath(item.img)} />
                            <p>${item.description}</p>
                            <footer>
                                <p>Price: <span>${item.price} $</span></p>
                            </footer>
                            <div>
                                <a href="/details/${item._id}" class="btn btn-info">Details</a>
                            </div>
                    </div>
                </div>
            </div>
`;
const temp = (data) => html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Welcome to Furniture System</h1>
            <p>Select furniture from the catalog to view details.</p>
        </div>
    </div>
        ${data.map(item => cartTemp(item))}
    </div>
`;
export async function showDashboardView() {
    let data = [];
    try {
        data = await dataService.getAll();
    } catch (err) {
        alert('Грешка при зареждане на данните!');
    }
    if (root) {
        render(temp(data), root);
    }
}
