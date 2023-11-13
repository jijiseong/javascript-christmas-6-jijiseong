import MENU from '../../constants/menu';
import { MESSAGE, TITLE } from '../../constants/message';
import { validateDate, validateMenus } from '../../utils/validator';
import InputView from '../Views/InputView';
import OutputView from '../Views/OutputView';
import EventCalculator from './EventCalculator';
import Restaurant from './Restaurant';
import sum from '../../utils/sum';

class GameController {
  #inputView = InputView;

  #outputView = OutputView;

  #restaurant = new Restaurant(MENU);

  #eventCalculator = EventCalculator;

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

  printEventGuide(date) {
    this.#outputView.printEventGuide(date);
  }

  printOrderMenu(menus) {
    this.#outputView.printOrderMenu(menus);
  }

  printTotalPrice(menus) {
    const totalPrice = this.#restaurant.calculateTotalPrice(menus);
    this.#outputView.printTotalPrice(totalPrice);
  }

  calculateEventDiscounts({ date, menus }) {
    const discounts = this.#eventCalculator.getAllDiscounts({ date, menus });
    return discounts;
  }

  calculateGiveaway(menus) {
    const giveaway = this.#eventCalculator.getGiveaway(menus);
    return giveaway;
  }

  printGiveaway(menus) {
    const giveaway = this.#eventCalculator.getGiveaway(menus);
    this.#outputView.printGiveaway(giveaway.name);
  }

  printEventDiscounts(discounts) {
    const discountTotal = sum(Object.values(discounts));

    this.#outputView.printLine(TITLE.event);
    if (discountTotal === 0) {
      this.#outputView.printLine(MESSAGE.none);
      return;
    }
    Object.entries(discounts).forEach(([title, price]) => {
      this.#outputView.printDiscount({
        title,
        price,
      });
    });
  }
}

export default GameController;
