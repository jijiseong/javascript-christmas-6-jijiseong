/* eslint-disable max-lines-per-function */
import MENU from '../src/constants/menu';
import { ERROR_MESSAGE } from '../src/constants/message';
import Restaurant from '../src/modules/Models/Restaurant';
import { validateDate, validateMenus } from '../src/utils/validator';

describe('유저 입력 검증 로직 테스트', () => {
  test('메뉴는 한 번에 최대 20개까지만 주문할 수 있습니다.', () => {
    // given
    const restaurant = new Restaurant(MENU);
    const menus = {
      해산물파스타: '10',
      아이스크림: '10',
      시저샐러드: '10',
    };
    // when
    const validationLogic = () => validateMenus(restaurant, menus);

    // then
    expect(validationLogic).toThrow(ERROR_MESSAGE.invalidMenu);
  });

  test.each(['1', '10', '31'])('1 ~ 31일 사이를 입력하면 정상 처리', date => {
    const validationLogic = () => validateDate(date);

    expect(validationLogic).not.toThrow(ERROR_MESSAGE.invalidDate);
  });

  test.each(['-1', '0', '32'])(
    '1 ~ 31일 외의 날짜를 입력하면 에러 발생',
    date => {
      const validationLogic = () => validateDate(date);

      expect(validationLogic).toThrow(ERROR_MESSAGE.invalidDate);
    },
  );
});
