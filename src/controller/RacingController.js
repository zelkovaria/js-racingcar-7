import InputView from "../views/InputView.js";

class RacingController {
  async #createCarNames() {
    const carNames = await InputView.readCarNames();

    return carNames;
  }

  async run() {
    await this.#createCarNames();
  }
}

export default RacingController;
