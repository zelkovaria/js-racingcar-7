import Car from "../models/Car.js";
import { CarValidator, PlayValidator } from "../Validator.js";
import InputView from "../views/InputView.js";

class RacingController {
  async #setCarNames() {
    try {
      const carNames = await InputView.readCarNames();
      CarValidator.validate(carNames);
      return carNames.split(",").map((name) => name.trim());
    } catch (e) {
      throw e;
    }
  }

  async #setPlayCount() {
    try {
      const playCount = await InputView.readPlayCount();
      PlayValidator.validate(playCount);
      return playCount;
    } catch (e) {
      throw e;
    }
  }

  async #initCars() {
    const carNames = await this.#setCarNames();
    const playCount = await this.#setPlayCount();

    return new Car(carNames, playCount);
  }

  async run() {
    const cars = await this.#initCars();

    cars.startRace();
    console.log(cars.getResult());
  }
}

export default RacingController;
