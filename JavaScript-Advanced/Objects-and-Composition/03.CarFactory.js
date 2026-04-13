function carFactory(order){
    const car = {
        model: undefined,
        engine: null,
        carriage: null,
        wheels: null
    }

    const engineEnum = {
        "SmallEngine": {power: 90, volume: 1800},
        "NormalEngine": {power: 120, volume: 2400},
        "MonsterEngine": {power: 200, volume: 3500}
    }

    car.model = order.model;

    if(order.power <= 90){
        car.engine = engineEnum.SmallEngine;
    } else if(order.power <= 120){
        car.engine = engineEnum.NormalEngine;
    } else {
        car.engine = engineEnum.MonsterEngine;
    }

    car.carriage = {
        type: order.carriage,
        color: order.color
    }

    let size = order.wheelsize % 2 !== 0 ? order.wheelsize : order.wheelsize - 1;
    let wheels = [size, size, size, size];

    car.wheels = new Array(4).fill(size);
    return car;
}

console.log(carFactory(
{ model: 'VW Golf II',
  power: 90,
  color: 'blue',
  carriage: 'hatchback',
  wheelsize: 14 }))