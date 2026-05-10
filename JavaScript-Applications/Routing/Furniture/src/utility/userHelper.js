function setUserData(userData) {
    const userInfo = {
        email: userData.email,
        accessToken: userData.accessToken,
        id: userData._id
    }

    sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
}

function getUserData() {
    return JSON.parse(sessionStorage.getItem("userInfo"));
}

function hasUser() {
    return !!getUserData()
}

function getAccessToken() {
    const userData = getUserData();
    return userData.accessToken;
}

function hasOwner(itemOwnerId) {
    const userData = getUserData();
    return userData && userData.id === itemOwnerId;
}

function clearUserData() {
    sessionStorage.removeItem("userInfo");
}

export const userHelper = {
    setUserData,
    getUserData,
    hasUser,
    getAccessToken,
    hasOwner,
    clearUserData
}
