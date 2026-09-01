class Counter {
    private static count: number = 0;

    static increment() {
        Counter.count++
    }

    static getCount() {
        return Counter.count;
    }
}

Counter.increment();
Counter.increment();
console.log(Counter.getCount());

// Counter.count = 10