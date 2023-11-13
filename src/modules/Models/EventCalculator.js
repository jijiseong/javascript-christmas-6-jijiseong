import MENU, { DESERT_MENU, MAIN_MENU } from '../../constants/menu';
import SPECIAL_DAY from '../../constants/specialDay';
import isWeekend from '../../utils/isWeekend';
import GIVEAWAY from '../../constants/giveaway';
import DISCOUNT from '../../constants/discount';
import { EVENT_TITLE, MESSAGE } from '../../constants/message';
import Restaurant from './Restaurant';

const EventCalculator = {
  getAllDiscounts({ date, menus }) {
    const christmasDiscount = this.getChristmasDiscount(date);
    const specialDayDiscount = this.getSpecialDayDiscount(date);
    const weekdayDiscount = this.getWeekdayDiscount({ date, menus });
    const weekendDiscount = this.getWeekendDiscount({ date, menus });

    return {
      [EVENT_TITLE.christmas]: christmasDiscount,
      [EVENT_TITLE.special]: specialDayDiscount,
      [EVENT_TITLE.weekday]: weekdayDiscount,
      [EVENT_TITLE.weekend]: weekendDiscount,
    };
  },

  getChristmasDiscount(date) {
    if (date > 25) return 0;

    const discount = DISCOUNT.christmas + date * DISCOUNT.christmasDDay;
    return discount;
  },

  getWeekendDiscount({ date, menus }) {
    if (!isWeekend(date)) return 0;
    let discount = 0;

    Object.entries(menus).forEach(([name, amount]) => {
      if (!Object.keys(MAIN_MENU).includes(name)) return;
      discount += amount * DISCOUNT.weekend;
    });

    return discount;
  },

  getWeekdayDiscount({ date, menus }) {
    if (isWeekend(date)) return 0;
    let discount = 0;

    Object.entries(menus).forEach(([name, amount]) => {
      if (!Object.keys(DESERT_MENU).includes(name)) return;
      discount += amount * DISCOUNT.weekday;
    });

    return discount;
  },

  getSpecialDayDiscount(date) {
    if (!SPECIAL_DAY.includes(date)) return 0;
    return DISCOUNT.specialDay;
  },

  getGiveaway(menus) {
    const restaurant = new Restaurant(MENU);
    const totalPrice = restaurant.calculateTotalPrice(menus);
    if (totalPrice < GIVEAWAY.bound) {
      return { name: MESSAGE.none, price: 0 };
    }
    return { name: GIVEAWAY.menu, price: MENU[GIVEAWAY.menu] };
  },
};

export default EventCalculator;
