import Car from "../src/models/Car";

describe("자동차 생성자 테스트", () => {
  test("자동차 생성 및 거리 초기화 테스트", async () => {
    const testCars = ["hyein", "pobi"];
    const testPlayCount = 3;

    const car = new Car(testCars, testPlayCount);
    const result = car.getResult();

    expect(result["hyein"]).toBe(0);
    expect(result["pobi"]).toBe(0);
  });
});
