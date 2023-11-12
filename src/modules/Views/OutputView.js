import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../../constants/message';

const OutputView = {
  printEventGuide(date) {
    Console.print(MESSAGE.noticeEvents(date));
  },

  printOrderMenu(menus) {
    Console.print('<주문 메뉴>');
    Object.entries(menus).forEach(([name, amount]) => {
      Console.print(`${name} ${amount}개`);
    });
  },

  print(message) {
    Console.print(message);
  },
};

export default OutputView;
