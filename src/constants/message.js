export const ERROR_MESSAGE = {
  invalidMenu: '[ERROR] 유효하지 않은 주문입니다. 다시 입력해 주세요.',
  invalidDate: '[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.',
  isNotANumber: '[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.',
};

export const MESSAGE = {
  welcome: '안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.',
  requireDate:
    '12월 중 식당 예상 방문 날짜는 언제인가요? (숫자만 입력해 주세요!)',
  requireMenus:
    '주문하실 메뉴를 메뉴와 개수를 알려 주세요. (e.g. 해산물파스타-2,레드와인-1,초코케이크-1)',
  noticeEvents: date =>
    `12월 ${date}일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!`,
  none: '없음',
};

export const TITLE = {
  orderMenu: '<주문 메뉴>',
  totalPrice: '<할인 전 총주문 금액>',
  giveaway: '<증정 메뉴>',
  event: '<혜택 내역>',
  discount: '<총혜택 금액>',
  discountedTotalPrice: '<할인 후 예상 결제 금액>',
  badge: '<12월 이벤트 배지>',
};

export const EVENT_TITLE = {
  christmas: '크리스마스 디데이 할인',
  weekday: '평일 할인',
  weekend: '주말 할인',
  special: '특별 할인',
  giveaway: '증정 이벤트',
};
