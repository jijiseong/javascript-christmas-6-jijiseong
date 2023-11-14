import Badge from './Badge';
import Restaurant from './Restaurant';
import EventCalculator from './EventCalculator';
import callWithErrorHandler from '../../utils/callWithErrorHandler';
import { validateDate, validateMenus } from '../../utils/validator';
import { MESSAGE, TITLE } from '../../constants/message';
import MENU from '../../constants/menu';

class GameController {
  #restaurant = new Restaurant(MENU);

  #eventCalculator = EventCalculator;

  async askDateAndMenus(inputView) {
    const date = await callWithErrorHandler(async () => {
      const input = await inputView.readDate();
      validateDate(input);
      return input;
    }, this);

    const menus = await callWithErrorHandler(async () => {
      const input = await inputView.readMenus();
      validateMenus(this.#restaurant, input);
      return input;
    }, this);

    return { date, menus };
  }

  printOrderInfo(date, menus, outputView) {
    const totalPrice = this.#restaurant.calculateTotalPrice(menus);
    outputView.printEventGuide(date);
    outputView.printOrderMenu(menus);
    outputView.printLine(TITLE.totalPrice);
    outputView.printLine(`${totalPrice.toLocaleString()}원`);
  }

  printGiveaway(menus, outputView) {
    const giveaway = this.#eventCalculator.getGiveaway(menus);
    outputView.printLine(TITLE.giveaway);
    outputView.printGiveaway(giveaway.name);
  }

  printEventInfo(date, menus, outputView) {
    const discounts = this.#eventCalculator.getAllDiscounts({ date, menus });
    outputView.printLine(TITLE.event);
    const totalDiscount = this.#eventCalculator.getTotalDiscount(discounts);
    if (totalDiscount === 0) {
      outputView.printLine(MESSAGE.none);
    } else {
      outputView.printAllDiscouts(discounts);
    }
  }

  printTotalEventDiscount(date, menus, outputView) {
    const discounts = this.#eventCalculator.getAllDiscounts({ date, menus });
    const totalDiscount = this.#eventCalculator.getTotalDiscount(discounts);
    const giveaway = this.#eventCalculator.getGiveaway(menus);
    const eventPrice = totalDiscount + giveaway.price;
    outputView.printLine(TITLE.discount);
    outputView.printLine(`${(-eventPrice).toLocaleString()}원`);
  }

  printDiscountedTotalPrice(date, menus, outputView) {
    const discounts = this.#eventCalculator.getAllDiscounts({ date, menus });
    const totalPrice = this.#restaurant.calculateTotalPrice(menus);
    const totalDiscount = this.#eventCalculator.getTotalDiscount(discounts);
    const discountedTotalPrice = totalPrice - totalDiscount;
    outputView.printLine(TITLE.discountedTotalPrice);
    outputView.printLine(`${discountedTotalPrice.toLocaleString()}원`);
  }

  printBadge(date, menus, outputView) {
    const discounts = this.#eventCalculator.getAllDiscounts({ date, menus });
    const totalDiscount = this.#eventCalculator.getTotalDiscount(discounts);
    const giveaway = this.#eventCalculator.getGiveaway(menus);
    const eventPrice = totalDiscount + giveaway.price;
    const badge = new Badge(eventPrice);
    outputView.printLine(TITLE.badge);
    outputView.printLine(badge.getBadgeTitle());
  }
}

export default GameController;
