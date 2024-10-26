import InputView from "../views/InputView.js";

class RacingController {
  async #setCarNames() {
    const carNames = await InputView.readCarNames();

    return carNames;
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
