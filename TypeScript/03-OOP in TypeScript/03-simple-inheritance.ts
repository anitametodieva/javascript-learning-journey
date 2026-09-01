class Vehicle {
   public brand: string;

    constructor(brand: string) {
        this.brand = brand;
    }

    drive() {
        return `Driving a ${this.brand}`
    }
}

class Car extends Vehicle {
    constructor(brand: string, public model: string) {
        super(brand)
    }

    override drive() {
        return `Driving a ${this.brand} ${this.model}`;
    }
}

const car = new Car("Toyota", "Corolla");
console.log(car.drive());