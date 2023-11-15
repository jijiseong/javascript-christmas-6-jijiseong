/* eslint-disable max-lines-per-function */
import GIVEAWAY from '../src/constants/giveaway';
import MENU from '../src/constants/menu';
import EventCalculator from '../src/modules/Models/EventCalculator';

describe('EventCalculator 객체 테스트', () => {
  const eventCalculator = EventCalculator;

  test('크리스마스 할인 계산', () => {
    // given
    const date = 5;

    // when
    const discount = eventCalculator.getChristmasDiscount(date);

    // then
    expect(discount).toBe(1400);
  });

  test('주말 할인 계산', () => {
    // given
    const date = 10;
    const menus = {
      해산물파스타: 1,
      양송이수프: 1,
    };

    // when
    const discount = eventCalculator.getWeekendDiscount({ date, menus });

    // then
    expect(discount).toBe(2023);
  });

  test('평일 할인 계산', () => {
    // given
    const date = 5;
    const menus = {
      해산물파스타: 1,
      아이스크림: 2,
    };

    // when
    const discount = eventCalculator.getWeekdayDiscount({ date, menus });

    // then
    expect(discount).toBe(4046);
  });

  test('특별 할인 계산', () => {
    // given
    const normalDate = 1;
    const specialDate = 10;

    // when
    const discount1 = eventCalculator.getSpecialDayDiscount(normalDate);
    const discount2 = eventCalculator.getSpecialDayDiscount(specialDate);

    // then
    expect(discount1).toBe(0);
    expect(discount2).toBe(1000);
  });

  test('증정 메뉴 계산', () => {
    // given
    const menus = {
      해산물파스타: 5,
      아이스크림: 1,
    };

    // when
    const giveaway = eventCalculator.getGiveaway(menus);

    // then
    expect(giveaway).toEqual({
      name: GIVEAWAY.menu,
      price: MENU[GIVEAWAY.menu],
    });
  });
});
