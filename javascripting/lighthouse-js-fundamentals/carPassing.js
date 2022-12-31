const cars = [
  {
    time: Date.now(),
    speed: 40,
  },
  {
    time: Date.now(),
    speed: 42,
  },
  {
    time: Date.now(),
    speed: 35,
  },
];

const speed = 38;

function carPassing(cars, speed) {
  let newCar = {
    time: Date.now(),
    speed: speed,
  };
  cars.push(newCar);
  return newCar;
}
carPassing(cars, speed);
console.log(cars);
