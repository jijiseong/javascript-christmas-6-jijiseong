import MENU from '../../constants/menu';
import { validateDate, validateMenus } from '../../utils/validator';
import InputView from '../Views/InputView';
import OutputView from '../Views/OutputView';
import Restaurant from './Restaurant';

class GameController {
  #inputView = InputView;

  #outputView = OutputView;

  #restaurant = new Restaurant(MENU);

  async takeDate() {
    const date = await this.#inputView.readDate();
    validateDate(date);
    return date;
  }

  async takeOrder() {
    const menus = await this.#inputView.readMenus();
    validateMenus(this.#restaurant, menus);
    return menus;
  }

  print({ date, menus }) {
    this.#outputView.printEventGuide(date);
    this.#outputView.printOrderMenu(menus);
  }
}

export default GameController;
