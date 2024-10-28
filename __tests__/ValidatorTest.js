import { ERROR_MESSAGE } from "../src/constants/Message";
import { CarValidator, PlayValidator } from "../src/Validator";

describe("자동차 유효성 테스트", () => {
  test("자동차 이름 길이 테스트", async () => {
    const testCarsLength = "zelkovaria,hyein";

    expect(() => {
      CarValidator.validate(testCarsLength);
    }).toThrow(ERROR_MESSAGE.INVALID_NAMES_LENGTH);
  });

  test("중복없는 자동차 이름 테스트", async () => {
    const testUniqueCarsName = "pobi,pobi";

    expect(() => {
      CarValidator.validate(testUniqueCarsName);
    }).toThrow(ERROR_MESSAGE.UNIQUE_CAR_NAMES);
  });
});
