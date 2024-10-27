import { Console } from "@woowacourse/mission-utils";

export default class OutputView {
  static printWinners(winners) {
    Console.print(`최종 우승자 : ${winners.join(", ")}`);
  }
}
