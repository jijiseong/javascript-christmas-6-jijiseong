import { Console } from '@woowacourse/mission-utils';
import { MESSAGE } from '../constants/message';

const InputView = {
  async readDate() {
    const input = await Console.readLineAsync(MESSAGE.requireDate);
    const date = Number(input);

    return date;
  },

  async readMenus() {
    const input = await Console.readLineAsync(MESSAGE.requireMenus);
    const menus = input.split(',');

    const result = {};
    menus.forEach(menu => {
      const [name, amount] = menu.split('-');
      result[name] = amount;
    });

    return result;
  },
};

export default InputView;
