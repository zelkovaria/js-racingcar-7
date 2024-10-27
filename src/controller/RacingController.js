import { Console } from "@woowacourse/mission-utils";
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

  async run() {
    await this.#setCarNames();
    await this.#setPlayCount();
  }
}

export default RacingController;
