/* eslint-disable max-lines-per-function */
import { BADGE_TITLE } from '../src/constants/badge';
import Badge from '../src/modules/Models/Badge';

describe('Badge 객체 테스트', () => {
  test.each([
    [5000, BADGE_TITLE.star],
    [10000, BADGE_TITLE.tree],
    [20000, BADGE_TITLE.santa],
  ])(
    `이벤트 할인이 %d원 이면, %s 뱃지를 얻는다.`,
    (discount, expectedBadgeTitle) => {
      // given
      const badge = new Badge(discount);

      // when
      const badgeTitle = badge.getBadgeTitle();

      // then
      expect(badgeTitle).toEqual(expectedBadgeTitle);
    },
  );
});
