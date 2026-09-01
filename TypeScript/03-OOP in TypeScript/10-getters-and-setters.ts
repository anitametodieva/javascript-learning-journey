class User {
private _username!: string

    constructor(_username: string) {
        this.username = _username;
    }

    get username() {
        return this._username;
    }

    set username(value: string) {
        if (value.length < 3) {
            throw new Error("Error: Username must be at least 3 characters long");
        }
        this._username = value;
    }
}

// const user = new User("Martin");
// user.username = "johnDoe";
// console.log(user.username);

const user = new User("jo");

// const user = new User("Martin");
// user.username = "Do";