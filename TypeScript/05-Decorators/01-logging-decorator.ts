function log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value;

  descriptor.value = function (...args: string[]) {
    const result = original.apply(this, args);

    console.log(
      `Function '${methodName}' called with arguments: ${args.join(", ")}`,
    );

    return result;
  };

  return descriptor;
}

class Person {
  public fName: string;
  public lName: string;

  constructor(fName: string, lName: string) {
    this.fName = fName;
    this.lName = lName;
  }

  @log
  static getFullName(fName: string, lName: string): string {
    return `${fName} ${lName}`;
  }
}

let person = new Person("John", "Does");
Person.getFullName(person.fName, person.lName);
console.log(Person.getFullName("Benny", "Tres"));