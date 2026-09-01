function validateAge(
  target: any,
  propertyName: string,
  descriptor: PropertyDescriptor,
) {
  const original = descriptor.set!;

  descriptor.set = function (val: number) {
    if (val < 1 || val > 200) {
      throw new Error("Age must be between 1 and 200");
    }
    original.call(this, val);
  };

  return descriptor;
}

class Age {
  private _age!: number;
  constructor(age: number) {
    this.age = age;
  }

  @validateAge
  get age() {
    return this._age;
  }
  set age(val: number) {
    this._age = val;
  }
}

let ageVal = new Age(10);
ageVal.age = -30;

console.log(ageVal.age);