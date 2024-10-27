export default class Car {
  #cars;
  #playCount;

  constructor(cars, playCount) {
    this.#cars = cars;
    this.#playCount = playCount;
  }

  getCars() {
    return this.#cars;
  }
}
