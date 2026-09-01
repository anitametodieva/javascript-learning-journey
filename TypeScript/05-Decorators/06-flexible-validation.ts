function validateName(minLength: number) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const original = descriptor.set;

    descriptor.set = function (newName: string) {
      if (newName.length < minLength) {
        throw new Error(
          `name must have a min length of ${minLength} characters`,
        );
      }

      original?.call(this, newName);
    };

    return descriptor;
  };
}

function validateAge(min: number, max: number) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const original = descriptor.set;

    descriptor.set = function (newAge: number) {
      if (newAge < min || newAge > max) {
        throw new Error(`age must be between ${min} and ${max}`);
      }

      original?.call(this, newAge);
    };

    return descriptor;
  };
}

function validatePassword(regExp: RegExp) {
  return function (target: any, key: string, descriptor: PropertyDescriptor) {
    const original = descriptor.set;

    descriptor.set = function (newPass: string) {
      if (!newPass.match(regExp)) {
        throw new Error(`password needs to match ${regExp}`);
      }

      original?.call(this, newPass);
    };

    return descriptor;
  };
}

class User {
  private _name!: string;
  private _age!: number;
  private _password!: string;

  constructor(name: string, age: number, password: string) {
    this.name = name;
    this.age = age;
    this.password = password;
  }

  @validateName(3)
  set name(val: string) {
    this._name = val;
  }

  @validateAge(1, 100)
  set age(val: number) {
    this._age = val;
  }

  @validatePassword(/^[a-zA-Z0-9]+$/g)
  set password(val: string) {
    this._password = val;
  }

  get name() {
    return this._name;
  }
  get age() {
    return this._age;
  }
}

// let user = new User("John", 130, "hardPassword12");
// let user2 = new User("John", 30, "!test");
// let user3 = new User("John", 25, "@werty");
let user4 = new User("Jo", 20, "password123");