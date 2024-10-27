import { Console } from "@woowacourse/mission-utils";
import CarValidator from "../Validator.js";
import InputView from "../views/InputView.js";

class RacingController {
  async #setCarNames() {
    try {
      const carNames = await InputView.readCarNames();
      CarValidator.validate(carNames);
      return carNames.split(",").map((name) => name.trim());
    } catch (e) {
      Console.print("[ERROR] 옳지 않은 형식의 입력입니다");
      throw e;
    }
  }

  async #setPlayCount() {
    const playCount = await InputView.readPlayCount();

    return playCount;
  }

  async run() {
    await this.#setCarNames();
    await this.#setPlayCount();
  }
}

export default RacingController;
