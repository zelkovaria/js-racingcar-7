export class CarValidator {
  static #validateUnique(carNames) {
    const noDuplicateCarNames = new Set(carNames);
    if (carNames.length !== noDuplicateCarNames.size) {
      throw new Error("[ERROR] 자동차 이름을 중복없이 입력해주세요");
    }
  }

  static #validateLength(carNames) {
    const isValidLength = carNames.some(
      (car) => car.length < 1 || car.length > 5
    );

    if (isValidLength)
      throw new Error(
        "[ERROR] 자동차 이름은 1자 이상 5자 이하로 작성해주세요."
      );
  }

  static validate(inputCars) {
    const carNames = inputCars.split(",").map((name) => name.trim());
    this.#validateUnique(carNames);
    this.#validateLength(carNames);
  }
}

export class PlayValidator {
  static #isPositiveNum(playCount) {
    if (playCount < 0) {
      throw new Error("[ERROR] 시도 횟수는 양수값으로 입력해주세요.");
    }
  }

  static validate(playCount) {
    this.#isPositiveNum(playCount);
  }
}
