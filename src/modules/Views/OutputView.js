import { Console } from '@woowacourse/mission-utils';
import { MESSAGE, TITLE } from '../../constants/message';
import LINE_SEPARATOR from '../../constants/lineSeparator';

const OutputView = {
  printLine(message) {
    Console.print(`${message}`);
  },
  printDiscount({ title, price }) {
    if (price !== 0) this.printLine(`${title}: -${price.toLocaleString()}원`);
  },

  printEventGuide(date) {
    this.printLine(MESSAGE.noticeEvents(date));
  },

  printOrderMenu(menus) {
    this.printLine(TITLE.orderMenu);
    Object.entries(menus).forEach(([name, amount]) => {
      this.printLine(`${name} ${amount}개`);
    });
  },

  printTotalPrice(price) {
    this.printLine(TITLE.totalPrice);
    this.printLine(`${price.toLocaleString()}원`);
  },

  printGiveaway(giveaway) {
    this.printLine(TITLE.giveaway);
    if (giveaway === MESSAGE.none) {
      this.printLine(MESSAGE.none);
      return;
    }
    this.printLine(`${giveaway} 1개`);
  },
};

export default OutputView;
