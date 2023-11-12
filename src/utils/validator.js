import { ERROR_MESSAGE } from '../constants/message';

export function validateMenus(restaurant, menus) {
  const menuNames = Object.keys(menus);
  const menuAmounts = Object.values(menus);

  menuNames.forEach(name => {
    if (!restaurant.hasMenu(name)) throw new Error(ERROR_MESSAGE.invalidMenu);
  });

  menuAmounts.forEach(amountStr => {
    const amount = Number(amountStr);
    if (Number.isNaN(amount)) throw new Error(ERROR_MESSAGE.invalidMenu);
  });
}

export function validateDate(dateStr) {
  const date = Number(dateStr);

  if (Number.isNaN(date)) throw new Error(ERROR_MESSAGE.isNotANumber);

  if (date < 1 || date > 31) throw new Error(ERROR_MESSAGE.invalidDate);
}
