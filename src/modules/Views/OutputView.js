import { Console } from '@woowacourse/mission-utils';
import { MESSAGE, TITLE } from '../../constants/message';

const OutputView = {
  printEventGuide(date) {
    Console.print(MESSAGE.noticeEvents(date));
  },

  printOrderMenu(menus) {
    Console.print(TITLE.orderMenu);
    Object.entries(menus).forEach(([name, amount]) => {
      Console.print(`${name} ${amount}개`);
    });
  },

  print(message) {
    Console.print(message);
  },

  printTotalPrice(price) {
    Console.print(TITLE.totalPrice);
    Console.print(`${price.toLocaleString()}원`);
  },
};

export default OutputView;
