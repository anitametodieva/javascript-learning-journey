interface User {
    username: string;
    signupDate: Date;
    passwordHash?: string;
}

type TaskStatus = "Logged" | "Started" | "InProgress" | "Done";

interface Task {
        status: TaskStatus;
        title: string;
        daysRequired: number;
        assignedTo?: User;
        changeStatus(newStatus: TaskStatus): void;
    }

function assignTask(
    user: User,
    task: Task,
) {
    if (task.assignedTo == undefined) {
        task.assignedTo = user;
        console.log(`User ${user.username} assigned to task '${task.title}'`);
    }
}

let user: User = {
    username: "Margaret",
    signupDate: new Date(2022, 1, 13),
    passwordHash: "random",
};

let task1: Task = {
    status: "Logged",
    title: "Need assistance",
    daysRequired: 1,
    assignedTo: undefined,
    changeStatus(newStatus: TaskStatus) {
        this.status = newStatus;
    },
};

let task2: Task & { moreProps: number; evenMore: string } = {
    status: "Done",
    title: "Test",
    daysRequired: 12,
    assignedTo: undefined,
    changeStatus(newStatus: TaskStatus) {
        this.status = newStatus;
    },

    moreProps: 300,
    evenMore: "wow",
};
assignTask(user, task1);
assignTask(user, task2);