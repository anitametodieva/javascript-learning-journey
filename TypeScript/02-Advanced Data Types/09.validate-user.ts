type User = {
id: number | string,
username: string,
passwordHash: string | string[],
status: 'Locked' | 'Unlocked' | 'Deleted',
email?: string
}

function validateUser(param: unknown): param is User {
    if (!param || typeof param !== "object") {
        return false;
    }
    
    if (!("id" in param) ||
        !("username" in param) ||
        !("passwordHash" in param) ||
        !("status" in param)) {
        return false;
    }

    const validId =
        (typeof param.id === "number" && param.id > 100) ||
        (typeof param.id === "string" && param.id.length === 14);

    const validUsername =
        typeof param.username === "string" &&
        param.username.length >= 5 &&
        param.username.length <= 10;

    const validPassword =
        (typeof param.passwordHash === "string" &&
            param.passwordHash.length === 20) ||
        (Array.isArray(param.passwordHash) &&
            param.passwordHash.length === 4 &&
            param.passwordHash.every(
                p => typeof p === "string" && p.length === 8
            ));

    const validStatus =
        param.status === "Locked" ||
        param.status === "Unlocked";

    return (
        validId &&
        validUsername &&
        validPassword &&
        validStatus
    );
}