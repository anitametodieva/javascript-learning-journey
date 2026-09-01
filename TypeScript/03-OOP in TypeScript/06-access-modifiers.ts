class Employee {
    constructor( public name: string, protected position: string, private salary: number) {}

    getDetails(): string {
        return `NAme: ${this.name}, Position: ${this.position}`;
    }

    showSalary(): string {
        return `Salary: ${this.salary}`;
    }
}


const emp = new Employee("Alice", "Manager", 5000);

console.log(emp.getDetails());
console.log(emp.showSalary());
console.log(emp.name)
//console.log(emp.salary)
//console.log(emp.position)