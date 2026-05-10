import { html, render } from '../../node_modules/lit-html/lit-html.js';
import { userHelper } from './userHelper.js';

const navRoot = document.querySelector("nav");

const userHtmlTemp = () => html`
    <div id="user">
        <a id="createLink" href="/create">Create Furniture</a>
        <a id="profileLink" href="/my-furniture" >My Publications</a>
        <a id="logoutBtn" href="/logout">Logout</a>
    </div>
`

const guestHtmlTemp = () => html`
    <div id="guest">
        <a id="loginLink" href="/login">Login</a>
        <a id="registerLink" href="/register">Register</a>
    </div>
`

const tempTemp = () => html`
<a id="catalogLink" href="/dashboard" >Dashboard</a>
      ${userHelper.hasUser() ? userHtmlTemp() : guestHtmlTemp()}     
`

export function updateNav() {
    render(tempTemp(), navRoot);
}