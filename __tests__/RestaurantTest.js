/* eslint-disable max-lines-per-function */

import MENU from '../src/constants/menu';
import Restaurant from '../src/modules/Models/Restaurant';

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
});
