function storeUserData(userData) {
    sessionStorage.setItem("userData", JSON.stringify({
        id: userData._id, 
        email: userData.email, 
        accessToken: userData.accessToken
    }));
}

function getUserData() {
    const userData = JSON.parse(sessionStorage.getItem("userData"));
    return userData;
}

function clear() {
    sessionStorage.removeItem("userData");
}

function hasUser() {
    return !!getUserData();
}

export const userUtils = {
    storeUserData,
    getUserData,
    clear,
    hasUser
}