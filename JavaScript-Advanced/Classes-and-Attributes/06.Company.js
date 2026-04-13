class Company {
  departments;

  constructor() {
    this.departments = {};
  }

  addEmployee(name, salary, position, department) {
    if (name === undefined || name === null || name === "" ||
        salary === undefined || salary === null || salary === "" ||
        position === undefined || position === null || position === "" ||
        department === undefined || department === null || department === "") {
      throw new Error("Invalid input!");
    }

    salary = Number(salary);
    if (salary < 0 || Number.isNaN(salary)) {
      throw new Error("Invalid input!");
    }

    if (!this.departments.hasOwnProperty(department)) {
      this.departments[department] = {
        avg: 0,
        sumSalary: 0,
        employee: []
      };
    }

    this.departments[department].employee.push({ name, salary, position });
    this._updateDepartmentInfo(department);

    return `New employee is hired. Name: ${name}. Position: ${position}`;
  }

  bestDepartment() {
    const [departmentName, departmentInfo] = this._getBestDepartment();

    let buff = `Best Department is: ${departmentName}\n`;
    buff += `Average salary: ${departmentInfo.avg.toFixed(2)}\n`;

    departmentInfo.employee
      .slice()
      .sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name))
      .forEach(emp => {
        buff += `${emp.name} ${emp.salary} ${emp.position}\n`;
      });

    return buff.trim();
  }

  _updateDepartmentInfo(department) {
    const dep = this.departments[department];
    dep.sumSalary = dep.employee.reduce((sum, e) => sum + e.salary, 0);
    dep.avg = dep.sumSalary / dep.employee.length;
  }

  _getBestDepartment() {
    let bestDepartmentName = "";
    let bestAvgSalary = -Infinity;

    for (const depName in this.departments) {
      const avg = this.departments[depName].avg;

      if (avg > bestAvgSalary) {
        bestAvgSalary = avg;
        bestDepartmentName = depName;
      }
    }

    return [bestDepartmentName, this.departments[bestDepartmentName]];
  }
}

let c = new Company();

c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");

console.log(c.bestDepartment());