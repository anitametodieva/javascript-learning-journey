function createdOn(constructor: { new (...arg: any[]): User }) {
  return class extends constructor {
    createdOn = new Date().toString();
  };
}

@createdOn
class User {
  constructor(
    public name: string,
    public age: number,
  ) {}

  displayUserInfo() {
    console.log(`${this.name}, Age: ${this.age}`);
  }
}

const user1 = new User("John Doe", 30);
user1.displayUserInfo();
console.log(user1);
console.log((user1 as any).createdOn);