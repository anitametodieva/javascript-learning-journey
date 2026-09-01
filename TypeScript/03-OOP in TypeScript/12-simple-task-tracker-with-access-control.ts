class Task {
  public completed = false;

  constructor(
    public title: string,
    public description: string,
    private _createdBy: string,
  ) {
  }

  get createdBy() {
    return this._createdBy;
  }

  toggleStatus(): void {
    this.completed = !this.completed;
  }

  getDetails(): string {
    return `Task: ${this.title} - ${this.description} - ${this.completed ? "Completed" : "Pending"}`;
  }

  static createSampleTasks() {
    return [
      new Task("Clean room", "Make bed and clean floor", "Yoan"),
      new Task("Study", "Solve problems for lecture 3", "Pencho"),
    ];
  }
}

// const task1 = new Task("Complete homework", "Finish math exercises", "Charlie");
// task1.toggleStatus();
// console.log(task1.getDetails());

// const task2 = new Task("Clean room", "Clean the room", "Mary");
// console.log(task2.getDetails());

const tasks = Task.createSampleTasks();
tasks.forEach(task => console.log(task.getDetails()));