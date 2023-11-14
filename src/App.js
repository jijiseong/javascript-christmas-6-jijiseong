import EventCalculator from './modules/Models/EventCalculator';
import OutputView from './modules/Views/OutputView';
import InputView from './modules/Views/InputView';
import { MESSAGE, TITLE } from './constants/message';
import { validateDate, validateMenus } from './utils/validator';
import Restaurant from './modules/Models/Restaurant';
import Badge from './modules/Models/Badge';
import MENU from './constants/menu';

import callWithErrorHandler from './utils/callWithErrorHandler';

class App {
  #inputView = InputView;

  #outputView = OutputView;

  #restaurant = new Restaurant(MENU);

  #eventCalculator = EventCalculator;

  // eslint-disable-next-line max-lines-per-function
  async run() {
    const date = await callWithErrorHandler(async () => {
      const input = await this.#inputView.readDate();
      validateDate(input);
      return input;
    }, this);

    const menus = await callWithErrorHandler(async () => {
      const input = await this.#inputView.readMenus();
      validateMenus(this.#restaurant, input);
      return input;
    }, this);

    this.#outputView.printEventGuide(date);
    this.#outputView.printOrderMenu(menus);

    const totalPrice = this.#restaurant.calculateTotalPrice(menus);
    this.#outputView.printLine(TITLE.totalPrice);
    this.#outputView.printLine(`${totalPrice.toLocaleString()}원`);

    const discounts = this.#eventCalculator.getAllDiscounts({ date, menus });
    const giveaway = this.#eventCalculator.getGiveaway(menus);

    this.#outputView.printLine(TITLE.giveaway);
    this.#outputView.printGiveaway(giveaway.name);

    this.#outputView.printLine(TITLE.event);

    const totalDiscount = this.#eventCalculator.getTotalDiscount(discounts);
    if (totalDiscount === 0) {
      this.#outputView.printLine(MESSAGE.none);
    } else {
      this.#outputView.printAllDiscouts(discounts);
    }

    const eventPrice = totalDiscount + giveaway.price;
    this.#outputView.printLine(TITLE.discount);
    this.#outputView.printLine(`${-eventPrice.toLocaleString()}원`);

    const discountedTotalPrice = totalPrice - totalDiscount;
    this.#outputView.printLine(TITLE.discountedTotalPrice);
    this.#outputView.printLine(`${discountedTotalPrice.toLocaleString()}원`);

    const badge = new Badge(eventPrice);
    this.#outputView.printLine(TITLE.badge);
    this.#outputView.printLine(badge.getBadgeTitle());
  }
}

export default App;
