import { userService } from "../service/userServise.js";

export async function logout(ctx) {
    await userService.logout();
    ctx.updateNav();
    ctx.goTo("/");
}