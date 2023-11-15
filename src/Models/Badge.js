import { BADGE_BOUND, BADGE_TITLE } from '../constants/badge';
import { MESSAGE } from '../constants/message';

class Badge {
  #eventPrice;

  constructor(eventPrice) {
    this.#eventPrice = eventPrice;
  }

  getBadgeTitle() {
    if (this.#eventPrice >= BADGE_BOUND.santa) {
      return BADGE_TITLE.santa;
    }
    if (this.#eventPrice >= BADGE_BOUND.tree) {
      return BADGE_TITLE.tree;
    }
    if (this.#eventPrice >= BADGE_BOUND.star) {
      return BADGE_TITLE.star;
    }

    return MESSAGE.none;
  }
}

export default Badge;
