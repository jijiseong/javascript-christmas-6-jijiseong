/* eslint-disable max-lines-per-function */

import MENU from '../src/constants/menu';
import Restaurant from '../src/Models/Restaurant';

describe('Restaurant 객체 테스트', () => {
  let restaurant = new Restaurant();
  beforeEach(() => {
    restaurant = new Restaurant(MENU);
  });

  test('menu가 존재하는지 알 수 있다.', () => {
    // given
    const foodName = '양송이수프';

    // when
    const hasMenu = restaurant.hasMenu(foodName);

    // then
    expect(hasMenu).toBe(true);
  });

  test('메뉴 가격을 계산할 수 있다.', () => {
    // given
    const menus = {
      해산물파스타: 1,
      양송이수프: 1,
    };

    // when
    const totalPrice = restaurant.calculateTotalPrice(menus);

    // then
    expect(totalPrice).toBe(MENU['해산물파스타'] + MENU['양송이수프']);
  });
});
