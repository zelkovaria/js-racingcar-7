import { MissionUtils } from "@woowacourse/mission-utils";

export default class Car {
  #cars;
  #distance;
  #playCount;

  constructor(cars, playCount) {
    this.#cars = cars;
    this.#playCount = playCount;
    this.#distance = {};
    this.#initCars();
  }

  #initCars() {
    this.#cars.forEach((car) => {
      this.#distance[car] = 0;
    });
  }

  #moveCar() {
    this.#cars.forEach((car) => {
      if (MissionUtils.Random.pickNumberInRange(0, 9) >= 4) {
        this.#distance[car] += 1;
      }
    });
  }

  startRace() {
    for (let i = 0; i < this.#playCount; i++) {
      this.#moveCar();
    }
  }

  getResult() {
    return this.#distance;
  }
}
